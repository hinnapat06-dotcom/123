export interface CaregiverItem {
  id: string;
  cid?: string;
  name: string;
  phone: string;
  address: string;
  moo?: string;
  relationship: string;
  isCaregiver?: boolean;
  isBeneficiary?: boolean;
}

export const INITIAL_CAREGIVERS_LIST: CaregiverItem[] = [
  {
    id: "CG-001",
    cid: "3-1903-00201-11-1",
    name: "นางเขมิกา ไพรัตน์",
    phone: "081-444-5001",
    address: "บ้านเลขที่ 1 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-002",
    cid: "3-1903-00202-11-2",
    name: "นางบุญล้ำ จันทร์นาค",
    phone: "081-444-5002",
    address: "บ้านเลขที่ 12 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-003",
    cid: "3-1903-00203-22-1",
    name: "น.ส.ชลิตา บุญขาว",
    phone: "081-444-5003",
    address: "บ้านเลขที่ 25 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-004",
    cid: "3-1903-00204-22-2",
    name: "นางธิดารัตน์ เที่ยงแก้ว",
    phone: "081-444-5004",
    address: "บ้านเลขที่ 40 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-005",
    cid: "3-1903-00205-33-1",
    name: "นางทองภาศ บุญชัย",
    phone: "081-444-5005",
    address: "บ้านเลขที่ 10 หมู่ 3 ต.ไผ่ต่ำ",
    moo: "หมู่ 3",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-006",
    cid: "3-1903-00206-33-2",
    name: "น.ส.กัญญาภัค มีสี",
    phone: "081-444-5006",
    address: "บ้านเลขที่ 18 หมู่ 3 ต.ไผ่ต่ำ",
    moo: "หมู่ 3",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-007",
    cid: "3-1903-00207-44-1",
    name: "ศิริพร เปรมกมล",
    phone: "081-444-5007",
    address: "บ้านเลขที่ 32 หมู่ 4 ต.ไผ่ต่ำ",
    moo: "หมู่ 4",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-008",
    cid: "3-1903-00208-55-1",
    name: "นางมาลีรัตน์ เมธาอัศวเดชสกุล",
    phone: "081-444-5008",
    address: "บ้านเลขที่ 51 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-009",
    cid: "3-1903-00209-55-2",
    name: "นางประมวล เหมือนแม้น",
    phone: "081-444-5009",
    address: "บ้านเลขที่ 64 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-010",
    cid: "3-1903-00210-66-1",
    name: "นางจินดา สุขประเสริฐ",
    phone: "081-444-5010",
    address: "บ้านเลขที่ 14 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-011",
    cid: "3-1903-00211-66-2",
    name: "นางพิชญ์สินี คงสมบูรณ์",
    phone: "081-444-5011",
    address: "บ้านเลขที่ 28 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-012",
    cid: "3-1903-00212-66-3",
    name: "นางมาลา พึ่งเพ็ง",
    phone: "081-444-5012",
    address: "บ้านเลขที่ 35 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-013",
    cid: "3-1903-00213-77-1",
    name: "นางบุญเยือน ประพันธ์สันติ",
    phone: "081-444-5013",
    address: "บ้านเลขที่ 8 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-014",
    cid: "3-1903-00214-77-2",
    name: "น.ส.จุรินภรณ์ ปราบพินาศ",
    phone: "081-444-5014",
    address: "บ้านเลขที่ 19 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-015",
    cid: "3-1903-00215-77-3",
    name: "นางประเทือง พินทอง",
    phone: "081-444-5015",
    address: "บ้านเลขที่ 27 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-016",
    cid: "3-1903-00216-77-4",
    name: "ไสว สโมสร",
    phone: "081-444-5016",
    address: "บ้านเลขที่ 42 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-017",
    cid: "3-1903-00217-77-5",
    name: "น.ส.สังเวียน สโมสร",
    phone: "081-444-5017",
    address: "บ้านเลขที่ 45 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-018",
    cid: "3-1903-00218-77-6",
    name: "นางลูกจัน อบรมจิต",
    phone: "081-444-5018",
    address: "บ้านเลขที่ 58 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-019",
    cid: "3-1903-00219-77-7",
    name: "นางลำยอง พึ่งเพ็ง",
    phone: "081-444-5019",
    address: "บ้านเลขที่ 63 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  },
  {
    id: "CG-020",
    cid: "3-1903-00220-88-1",
    name: "นางหนูปอน มากมี",
    phone: "081-444-5020",
    address: "บ้านเลขที่ 77 หมู่ 8 ต.ไผ่ต่ำ",
    moo: "หมู่ 8",
    relationship: "ผู้ดูแลผู้สูงอายุ (Caregiver)",
    isCaregiver: true,
    isBeneficiary: true
  }
];
