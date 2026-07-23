import json

with open("vhv_data.json", "r", encoding="utf-8") as f:
    items = json.load(f)

ts_content = """export interface VhvItem {
  id: string;
  cid: string;
  name: string;
  phone: string;
  address: string;
  moo?: string;
  type: 'อสม' | 'จิตอาสา';
  isCaregiver?: boolean;
  isBeneficiary?: boolean;
}

export const INITIAL_VHVS_LIST: VhvItem[] = """ + json.dumps(items, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/initialVhvs.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Created src/data/initialVhvs.ts successfully")
