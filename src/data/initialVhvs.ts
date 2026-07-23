export interface VhvItem {
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

export const INITIAL_VHVS_LIST: VhvItem[] = [
  {
    "id": "VHV-001",
    "cid": "3199700105168",
    "name": "นาง ต้อย จูทิม",
    "phone": "089-766-4232",
    "address": "บ้านเลขที่ 10/5 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-002",
    "cid": "3-1903-00141-10-2",
    "name": "นาง สี อยู่มาก",
    "phone": "085-643-6563",
    "address": "บ้านเลขที่ 10/12 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-003",
    "cid": "3-1903-00141-10-2",
    "name": "นางสาว วรรณเทนา อ่อนสี",
    "phone": "086-853-9893",
    "address": "บ้านเลขที่ 10/22 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-004",
    "cid": "5-6701-00041-12-1",
    "name": "นาง บุญล้ำ จันทร์นาด",
    "phone": "089-262-7220",
    "address": "บ้านเลขที่ 10/41 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-005",
    "cid": "3-1903-00141-13-4",
    "name": "นางสาว จำปา มาลา",
    "phone": "082-805-2549",
    "address": "บ้านเลขที่ 10/54 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-006",
    "cid": "5-1024-99011-13-6",
    "name": "นาง เขมิกา ไพรรัตน์",
    "phone": "084-127-3215",
    "address": "บ้านเลขที่ 10/56 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-007",
    "cid": "1-1999-00461-13-8",
    "name": "นาย กัมปนาท มาลา",
    "phone": "086-349-3881",
    "address": "บ้านเลขที่ 10/58 หมู่ 1 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 1",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-008",
    "cid": "3190300147515",
    "name": "นาง ธิดารัตน์ เที่ยงแก้ว",
    "phone": "085-544-3566",
    "address": "บ้านเลขที่ 64/4 หมู่ 2 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 2",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-009",
    "cid": "3-1903-00142-10-6",
    "name": "นาง ละออ เอี่ยมเย็น",
    "phone": "081-397-2225",
    "address": "บ้านเลขที่ 10/26 หมู่ 2 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 2",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-010",
    "cid": "3-1903-00142-10-7",
    "name": "นางสาว เรียม สนทนา",
    "phone": "082-508-2558",
    "address": "บ้านเลขที่ 10/27 หมู่ 2 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 2",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-011",
    "cid": "3-1903-00142-12-7",
    "name": "นาย ณรงค์ สนทนา",
    "phone": "084-928-9218",
    "address": "บ้านเลขที่ 10/47 หมู่ 2 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 2",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-012",
    "cid": "5-3305-00002-13-0",
    "name": "นางสาว ชลิตา บุญขาว",
    "phone": "089-361-1217",
    "address": "บ้านเลขที่ 10/50 หมู่ 2 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 2",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-013",
    "cid": "3340400399808",
    "name": "นาง ทองกาศ บุญชัย",
    "phone": "086-655-3899",
    "address": "บ้านเลขที่ 45/78 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-014",
    "cid": "3-1903-00143-10-4",
    "name": "นาย สำพันธ์ คงสมจรูญ",
    "phone": "089-865-7229",
    "address": "บ้านเลขที่ 10/14 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": true
  },
  {
    "id": "VHV-015",
    "cid": "3-1604-00063-11-1",
    "name": "นาง มะลิวัลย์ อบรมชอบ",
    "phone": "086-952-3890",
    "address": "บ้านเลขที่ 10/31 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-016",
    "cid": "3-1903-00143-11-8",
    "name": "นาย ประเสริฐ มีวงษ์",
    "phone": "084-829-6221",
    "address": "บ้านเลขที่ 10/38 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-017",
    "cid": "3-1903-00143-12-9",
    "name": "นาย ชิน คงสมจรูญ",
    "phone": "086-250-9884",
    "address": "บ้านเลขที่ 10/49 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-018",
    "cid": "3-1903-00143-13-7",
    "name": "นาง เกษร นิลพัฒน์",
    "phone": "085-238-3548",
    "address": "บ้านเลขที่ 10/57 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-019",
    "cid": "3-6207-00313-13-9",
    "name": "นางสาว กัญญาภัด มีสี",
    "phone": "089-460-4214",
    "address": "บ้านเลขที่ 10/59 หมู่ 3 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 3",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": true
  },
  {
    "id": "VHV-020",
    "cid": "3-1801-00174-10-0",
    "name": "นาย เสนาะ บัวใย",
    "phone": "083-421-5897",
    "address": "บ้านเลขที่ 10/10 หมู่ 4 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 4",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-021",
    "cid": "1-1903-00054-10-0",
    "name": "นางสาว ศิริพร เปรมกมล",
    "phone": "084-631-9227",
    "address": "บ้านเลขที่ 10/20 หมู่ 4 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 4",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-022",
    "cid": "3-4001-01354-11-7",
    "name": "นาย พชรพรรพล เพียรโคตร",
    "phone": "083-718-5888",
    "address": "บ้านเลขที่ 10/37 หมู่ 4 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 4",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-023",
    "cid": "3-1903-00604-12-5",
    "name": "นาง นนเทศ เปรมกมล",
    "phone": "082-706-8552",
    "address": "บ้านเลขที่ 10/45 หมู่ 4 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 4",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-024",
    "cid": "3190300581525",
    "name": "นาง เรณู กริกลิ่น",
    "phone": "082-211-2567",
    "address": "บ้านเลขที่ 22/15 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-025",
    "cid": "3-1903-00008-10-7",
    "name": "นาง อณัฐธิศร ทรัพย์ธนาสาร",
    "phone": "095-988-4898",
    "address": "บ้านเลขที่ 10/7 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-026",
    "cid": "3-4013-00185-10-1",
    "name": "นาย สุวิทย์ สูงแข็ง",
    "phone": "084-532-6230",
    "address": "บ้านเลขที่ 10/11 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-027",
    "cid": "3-1903-00315-10-5",
    "name": "นางสาว สายหยุด สุขประเสริฐ",
    "phone": "091-976-7562",
    "address": "บ้านเลขที่ 10/15 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-028",
    "cid": "3-1903-00315-10-8",
    "name": "นาง รัตนลักษณ์ ปั้นบำรุงกิตน์",
    "phone": "083-619-2891",
    "address": "บ้านเลขที่ 10/28 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-029",
    "cid": "3-1903-00005-10-9",
    "name": "นาง มาลีรัตน์ ทรัพย์น้อย",
    "phone": "084-730-3224",
    "address": "บ้านเลขที่ 10/29 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": true
  },
  {
    "id": "VHV-030",
    "cid": "3-1903-00315-11-9",
    "name": "นาง ประมวล เหมือนแจ่ม",
    "phone": "085-940-6554",
    "address": "บ้านเลขที่ 10/39 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-031",
    "cid": "3-1903-00315-12-6",
    "name": "นาง ทองหล่อ ตรีพัฒน์",
    "phone": "083-817-8885",
    "address": "บ้านเลขที่ 10/46 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-032",
    "cid": "3-1903-00315-12-8",
    "name": "นาง ณทเบล ตะเคียนทอง",
    "phone": "085-139-9551",
    "address": "บ้านเลขที่ 10/48 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-033",
    "cid": "3-1903-00315-13-5",
    "name": "นาง จันที รักษาผล",
    "phone": "083-916-2882",
    "address": "บ้านเลขที่ 10/55 หมู่ 5 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 5",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-034",
    "cid": "1199700072093",
    "name": "นางสาว เปมิกา รุ่งธนานนท์",
    "phone": "083-322-2900",
    "address": "บ้านเลขที่ 22/15 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-035",
    "cid": "3190300321043",
    "name": "นางขวัญเรือน รุ่งธนานนท์",
    "phone": "084-433-3233",
    "address": "บ้านเลขที่ 22/15 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-036",
    "cid": "3190300319979",
    "name": "นางสาว อรทดา จำปาพันธุ์",
    "phone": "091-877-4565",
    "address": "บ้านเลขที่ 10/6 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-037",
    "cid": "4-1903-00006-10-3",
    "name": "นาง สำรวม ปราบพินาศ",
    "phone": "086-754-6896",
    "address": "บ้านเลขที่ 10/13 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-038",
    "cid": "3-1903-00326-10-6",
    "name": "นางสาว สายพิน สุขประเสริฐ",
    "phone": "095-187-7895",
    "address": "บ้านเลขที่ 10/16 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-039",
    "cid": "3-1602-00286-10-9",
    "name": "นาง สมประสงค์ เหล่าวงค์",
    "phone": "083-520-8894",
    "address": "บ้านเลขที่ 10/19 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-040",
    "cid": "3-3010-00746-10-1",
    "name": "นาง วิภาวี บุญมา",
    "phone": "085-742-9560",
    "address": "บ้านเลขที่ 10/21 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-041",
    "cid": "3-1606-00566-10-5",
    "name": "นาง ละเอียด ไชยโรสง",
    "phone": "095-286-1892",
    "address": "บ้านเลขที่ 10/25 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-042",
    "cid": "3-1903-00316-11-0",
    "name": "นาง มาลา พึ่งเพ็ง",
    "phone": "085-841-3557",
    "address": "บ้านเลขที่ 10/30 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-043",
    "cid": "3-1903-00016-11-3",
    "name": "นาง เพ็ญนี วงษ์อุย",
    "phone": "091-274-4556",
    "address": "บ้านเลขที่ 10/33 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-044",
    "cid": "3-1903-00326-11-4",
    "name": "นาง พิชญ์สินี คงสมบูรณ์",
    "phone": "095-385-4889",
    "address": "บ้านเลขที่ 10/34 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-045",
    "cid": "3-1903-00316-11-5",
    "name": "นางสาว พัทธนันท์ สมศักดิ์",
    "phone": "081-496-5222",
    "address": "บ้านเลขที่ 10/35 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-046",
    "cid": "3-1903-00216-12-3",
    "name": "นาย บุญเรือง ทรัพย์ล้อม",
    "phone": "095-484-7886",
    "address": "บ้านเลขที่ 10/43 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-047",
    "cid": "3-1903-00326-13-1",
    "name": "นางสาว จุรินทร์เอ์ ปราบพินาศ",
    "phone": "091-472-1550",
    "address": "บ้านเลขที่ 10/51 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-048",
    "cid": "3-1903-00326-13-2",
    "name": "นาง จินดา สุขประเสริฐ",
    "phone": "095-583-1883",
    "address": "บ้านเลขที่ 10/52 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-049",
    "cid": "3-1903-00316-13-3",
    "name": "นาง จำลอง พรหมน้อย",
    "phone": "081-694-2216",
    "address": "บ้านเลขที่ 10/53 หมู่ 6 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 6",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-050",
    "cid": "3-1903-00327-10-9",
    "name": "นางสาว ไสว สโมสร",
    "phone": "082-310-5564",
    "address": "บ้านเลขที่ 10/9 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-051",
    "cid": "3-1903-00327-10-7",
    "name": "นาง สังเวียน สโมสร",
    "phone": "081-298-8228",
    "address": "บ้านเลขที่ 10/17 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-052",
    "cid": "3-1903-00147-10-3",
    "name": "นาง ลูกจัน อบรมจิต",
    "phone": "089-964-1226",
    "address": "บ้านเลขที่ 10/23 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-053",
    "cid": "3-1903-00327-10-4",
    "name": "นาง ลำยอง พึ่งเพ็ง",
    "phone": "091-175-1559",
    "address": "บ้านเลขที่ 10/24 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": true
  },
  {
    "id": "VHV-054",
    "cid": "3-7202-00207-12-0",
    "name": "นาง ประเทือง พินทอง",
    "phone": "086-151-6887",
    "address": "บ้านเลขที่ 10/40 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-055",
    "cid": "3-1903-00327-12-2",
    "name": "นาง บุญเรือน พรอิน",
    "phone": "091-373-7553",
    "address": "บ้านเลขที่ 10/42 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-056",
    "cid": "3-1903-00317-12-4",
    "name": "นาง บุญเยือน ประพันธ์สันติ",
    "phone": "081-595-8219",
    "address": "บ้านเลขที่ 10/44 หมู่ 7 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 7",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": true
  },
  {
    "id": "VHV-057",
    "cid": "3-4906-00058-10-8",
    "name": "นาง หนูปอนด์ มากมี",
    "phone": "081-199-5231",
    "address": "บ้านเลขที่ 10/8 หมู่ 8 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 8",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-058",
    "cid": "3-1903-00328-10-8",
    "name": "นาย สมศักดิ์ มากมี",
    "phone": "082-409-8561",
    "address": "บ้านเลขที่ 10/18 หมู่ 8 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 8",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  },
  {
    "id": "VHV-059",
    "cid": "3-1903-00328-11-2",
    "name": "นาง มะลิ ดีประเสริฐ",
    "phone": "089-163-4223",
    "address": "บ้านเลขที่ 10/32 หมู่ 8 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 8",
    "type": "อสม",
    "isCaregiver": true,
    "isBeneficiary": false
  },
  {
    "id": "VHV-060",
    "cid": "3-1903-00328-11-6",
    "name": "นางสาว พยอม มากมี",
    "phone": "082-607-5555",
    "address": "บ้านเลขที่ 10/36 หมู่ 8 ต.ไผ่ต่ำ อ.หนองแค",
    "moo": "หมู่ 8",
    "type": "อสม",
    "isCaregiver": false,
    "isBeneficiary": false
  }
];
