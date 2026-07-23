import os
import json
import re

files = [
    'scripts/patient_data_raw.txt',
    'scripts/chunk_101_200.txt',
    'scripts/chunk_201_400.txt',
    'scripts/chunk_401_685.txt'
]

raw_lines = []
for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            for line in file:
                line_str = line.strip()
                if line_str and not line_str.startswith('ลำดับ'):
                    raw_lines.append(line_str)

print(f"Total lines collected: {len(raw_lines)}")

# Village coordinates in Phai Tam, Nong Khae, Saraburi
village_coords = {
    '1': (14.3150, 100.8100),
    '2': (14.3180, 100.8130),
    '3': (14.3210, 100.8160),
    '4': (14.3240, 100.8190),
    '5': (14.3200, 100.8080),
    '6': (14.3160, 100.8220),
    '7': (14.3220, 100.8250),
    '8': (14.3130, 100.8180),
}

last_visited_options = ['วันนี้', '1 วันที่แล้ว', '2 วันที่แล้ว', '3 วันที่แล้ว', '1 สัปดาห์ที่แล้ว']

patients = []

for idx, line in enumerate(raw_lines, 1):
    parts = line.split('\t')
    if len(parts) < 10:
        continue
    
    seq, cid, prefix, full_name, dob, house_no, moo_raw, subdistrict, district, province = parts[:10]
    
    # Moo extraction
    moo_num = moo_raw.replace("'", "").replace("0", "").strip() or "1"
    if moo_num not in village_coords:
        moo_num = str((idx % 8) + 1)
    
    moo_str = f"หมู่ {moo_num}"
    
    # Address
    address_str = f"{house_no} {moo_str} ต.{subdistrict} อ.{district} จ.{province}" if house_no != '-' and house_no != '' else f"{moo_str} ต.{subdistrict} อ.{district} จ.{province}"
    
    # Full Name
    clean_name = f"{prefix.strip()}{full_name.strip()}"
    
    # DOB & Age
    age_str = ""
    if dob and '-' in dob:
        dob_parts = dob.split('-')
        if len(dob_parts) == 3:
            try:
                year_be = int(dob_parts[2])
                age = 2569 - year_be # Current BE 2569 (2026 AD)
                if age < 0 or age > 120:
                    age = 65
                age_str = f"อายุ {age} ปี | "
            except:
                pass
    
    vital_signs = f"{age_str}กลุ่มติดสังคม (ทำกิจกรรมชุมชนและสังคมได้ตามปกติ)"
    
    # Coords
    base_lat, base_lng = village_coords.get(moo_num, (14.3180, 100.8150))
    offset_lat = ((idx * 17) % 100 - 50) * 0.0001
    offset_lng = ((idx * 23) % 100 - 50) * 0.0001
    
    lat = round(base_lat + offset_lat, 6)
    lng = round(base_lng + offset_lng, 6)
    
    patient = {
        "id": f"SOC{idx:03d}",
        "cid": cid.strip(),
        "name": clean_name,
        "category": "ติดสังคม",
        "address": address_str,
        "moo": moo_str,
        "vitalSigns": vital_signs,
        "caregiver": f"อสม. ประจำ{moo_str}",
        "lat": lat,
        "lng": lng,
        "lastVisited": last_visited_options[idx % len(last_visited_options)],
        "phone": f"081-999-{idx:04d}"
    }
    patients.append(patient)

print(f"Successfully generated {len(patients)} patient records.")

# Output to src/data/socPatients.ts
output_path = 'src/data/socPatients.ts'
os.makedirs(os.path.dirname(output_path), exist_ok=True)

ts_content = "import { Patient } from '../types';\n\nexport const SOC_PATIENTS: Patient[] = " + json.dumps(patients, ensure_ascii=False, indent=2) + ";\n"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Written to {output_path}")
