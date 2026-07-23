import { Patient, Activity, PatientCategory, ActivityType, ActivityStatus } from '../types';

// Standard sheet title in user's Google Drive
const SPREADSHEET_TITLE = 'ตำบลไผ่ต่ำ - ระบบจัดการสุขภาพ';

export const SEED_PATIENTS: Patient[] = [
  {
    id: 'HN001',
    name: "ผู้ป่วย (บ้านเลขที่ 4/1)",
    category: 'ติดบ้าน',
    address: "4/1 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    vitalSigns: "อายุ 73 ปี | ขาอ่อนแรง โรคพาร์กินสัน มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 1",
    lat: 14.3153,
    lng: 100.8105,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0001',
  },
  {
    id: 'HN002',
    name: "นายประทวน ศรประเสริฐ",
    category: 'ติดบ้าน',
    address: "23/11 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    vitalSigns: "อายุ 85 ปี | หลงลืม มีปัญหาการรับประทานอาหารและการขับถ่าย",
    caregiver: "อสม. ประจำหมู่ 1",
    lat: 14.3156,
    lng: 100.811,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0002',
  },
  {
    id: 'HN003',
    name: "นางดม แก้วโกศรี",
    category: 'ติดบ้าน',
    address: "32 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    vitalSigns: "อายุ 84 ปี | ขาอ่อนแรง ชราภาพ มีปัญหาการขับถ่ายและการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 1",
    lat: 14.3159,
    lng: 100.8115,
    lastVisited: 'วันนี้',
    phone: '081-999-0003',
  },
  {
    id: 'HN004',
    name: "นายจำลอง อัฐมาลา",
    category: 'ติดเตียง',
    address: "23/5 หมู่ 1 ต.ไผ่ต่ำ",
    moo: "หมู่ 1",
    vitalSigns: "อายุ 77 ปี | โรคอัมพฤกษ์ แขนและขาซ้ายอ่อนแรง มีปัญหาการเคลื่อนไหวและการขับถ่าย",
    caregiver: "อสม. ประจำหมู่ 1",
    lat: 14.3162,
    lng: 100.812,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0004',
  },
  {
    id: 'HN005',
    name: "นายเชาว์ คงสมบูรณ์",
    category: 'ติดบ้าน',
    address: "72 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    vitalSigns: "อายุ 75 ปี | โรคอัมพฤกษ์ มีแผลกดทับ ขาอ่อนแรง มีปัญหาการเคลื่อนไหวและการขับถ่าย",
    caregiver: "อสม. ประจำหมู่ 2",
    lat: 14.3165,
    lng: 100.8125,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0005',
  },
  {
    id: 'HN006',
    name: "นายสุรพงษ์ พุ่มอุไร",
    category: 'ติดบ้าน',
    address: "25 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    vitalSigns: "อายุ 34 ปี | พิการทางสมอง ลมชัก มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 2",
    lat: 14.3168,
    lng: 100.813,
    lastVisited: 'วันนี้',
    phone: '081-999-0006',
  },
  {
    id: 'HN007',
    name: "นายสมชาย พิทักษ์",
    category: 'ติดบ้าน',
    address: "53 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    vitalSigns: "อายุ 50 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 2",
    lat: 14.3171,
    lng: 100.8135,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0007',
  },
  {
    id: 'HN008',
    name: "นางสาวอำพัย ตามศักดิ์",
    category: 'ติดเตียง',
    address: "8/1 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    vitalSigns: "อายุ 58 ปี | ผู้ป่วยประคับประคอง มะเร็งระยะลุกลาม มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 2",
    lat: 14.3174,
    lng: 100.814,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0008',
  },
  {
    id: 'HN009',
    name: "นางสุนทร สีโชค",
    category: 'ติดเตียง',
    address: "56/1 หมู่ 2 ต.ไผ่ต่ำ",
    moo: "หมู่ 2",
    vitalSigns: "อายุ 75 ปี | แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 2",
    lat: 14.3177,
    lng: 100.8145,
    lastVisited: 'วันนี้',
    phone: '081-999-0009',
  },
  {
    id: 'HN010',
    name: "นายเกียรติศักดิ์ พุฒซ้อน",
    category: 'ติดเตียง',
    address: "5/1 หมู่ 3 ต.ไผ่ต่ำ",
    moo: "หมู่ 3",
    vitalSigns: "อายุ 51 ปี | แขนขาอ่อนแรง เส้นเลือดสมองแตก มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 3",
    lat: 14.318,
    lng: 100.815,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0010',
  },
  {
    id: 'HN011',
    name: "นายเชื้อ เหมือนแม้น",
    category: 'ติดเตียง',
    address: "7/3 หมู่ 3 ต.ไผ่ต่ำ",
    moo: "หมู่ 3",
    vitalSigns: "อายุ 81 ปี | เส้นเลือดสมองตีบ แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 3",
    lat: 14.3183,
    lng: 100.8155,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0011',
  },
  {
    id: 'HN012',
    name: "นายเล็ก ดอกรัก",
    category: 'ติดบ้าน',
    address: "14/3 หมู่ 4 ต.ไผ่ต่ำ",
    moo: "หมู่ 4",
    vitalSigns: "อายุ 80 ปี | แขนขาอ่อนแรง มีปัญหาการกินและการขับถ่าย",
    caregiver: "อสม. ประจำหมู่ 4",
    lat: 14.3186,
    lng: 100.816,
    lastVisited: 'วันนี้',
    phone: '081-999-0012',
  },
  {
    id: 'HN013',
    name: "นายวิเชียร เชิดชู",
    category: 'ติดบ้าน',
    address: "9849/2 หมู่ 4 ต.ไผ่ต่ำ",
    moo: "หมู่ 4",
    vitalSigns: "อายุ 65 ปี | เส้นเลือดสมองตีบ แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 4",
    lat: 14.3189,
    lng: 100.8165,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0013',
  },
  {
    id: 'HN014',
    name: "นายพันธ์ นามวงษ์",
    category: 'ติดเตียง',
    address: "4/2 หมู่ 4 ต.ไผ่ต่ำ",
    moo: "หมู่ 4",
    vitalSigns: "อายุ 89 ปี | เส้นเลือดสมองตีบ แขนขาอ่อนแรง มีปัญหาการขับถ่ายและการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 4",
    lat: 14.3192,
    lng: 100.817,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0014',
  },
  {
    id: 'HN015',
    name: "นายสมโพชน์ เมธาอัศวเดชสกุล",
    category: 'ติดบ้าน',
    address: "20/2 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 78 ปี | ขาอ่อนแรง โรคพาร์กินสัน มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3195,
    lng: 100.8175,
    lastVisited: 'วันนี้',
    phone: '081-999-0015',
  },
  {
    id: 'HN016',
    name: "นายณรงค์ชัย เหมือนแม้น",
    category: 'ติดบ้าน',
    address: "25/1 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 64 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3198,
    lng: 100.818,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0016',
  },
  {
    id: 'HN017',
    name: "นายดิเรก เหมือนแม้น",
    category: 'ติดเตียง',
    address: "17/1 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 76 ปี | แขนขาอ่อนแรงจากโรคหลอดเลือดสมอง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3201,
    lng: 100.8185,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0017',
  },
  {
    id: 'HN018',
    name: "นางบุญเทียม แพนสิงห์",
    category: 'ติดบ้าน',
    address: "21 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 82 ปี | ขาอ่อนแรง ชราภาพ มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3204,
    lng: 100.819,
    lastVisited: 'วันนี้',
    phone: '081-999-0018',
  },
  {
    id: 'HN019',
    name: "นางประไพร สุดโส",
    category: 'ติดบ้าน',
    address: "29 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 74 ปี | ข้อเข่าเสื่อม เดินลำบาก มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3207,
    lng: 100.8195,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0019',
  },
  {
    id: 'HN020',
    name: "นางสาวอรนุช ขอยุคกลาง",
    category: 'ติดบ้าน',
    address: "11/2 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 46 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.321,
    lng: 100.82,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0020',
  },
  {
    id: 'HN021',
    name: "นางยวน ปราบวินาศ",
    category: 'ติดเตียง',
    address: "9 หมู่ 5 ต.ไผ่ต่ำ",
    moo: "หมู่ 5",
    vitalSigns: "อายุ 86 ปี | ชราภาพ ขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 5",
    lat: 14.3213,
    lng: 100.8205,
    lastVisited: 'วันนี้',
    phone: '081-999-0021',
  },
  {
    id: 'HN022',
    name: "นางบุญเกิด ไวยพล",
    category: 'ติดบ้าน',
    address: "17/2 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 78 ปี | ขาอ่อนแรง โรคข้อเข่าเสื่อม มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3216,
    lng: 100.821,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0022',
  },
  {
    id: 'HN023',
    name: "นางสมบูรณ์ ภารเอน",
    category: 'ติดบ้าน',
    address: "10/1 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 84 ปี | ขาอ่อนแรง ชราภาพ มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3219,
    lng: 100.8215,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0023',
  },
  {
    id: 'HN024',
    name: "นางสาวสมบุญ หามนตรี",
    category: 'ติดเตียง',
    address: "42 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 59 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3222,
    lng: 100.822,
    lastVisited: 'วันนี้',
    phone: '081-999-0024',
  },
  {
    id: 'HN025',
    name: "นางสาวหลี พินงา",
    category: 'ติดบ้าน',
    address: "6/1 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 66 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3225,
    lng: 100.8225,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0025',
  },
  {
    id: 'HN026',
    name: "นายสำราญ ย้ำพราย",
    category: 'ติดบ้าน',
    address: "13 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 71 ปี | ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3228,
    lng: 100.823,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0026',
  },
  {
    id: 'HN027',
    name: "นางสมควร แสงทา",
    category: 'ติดบ้าน',
    address: "3/2 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 81 ปี | ข้อเข่าเสื่อม เดินลำบาก มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3231,
    lng: 100.8235,
    lastVisited: 'วันนี้',
    phone: '081-999-0027',
  },
  {
    id: 'HN028',
    name: "นางฉลวย ดำนงค์",
    category: 'ติดบ้าน',
    address: "16 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 83 ปี | ชราภาพ ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3234,
    lng: 100.824,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0028',
  },
  {
    id: 'HN029',
    name: "นางแก้ว ถาบุญเรือง",
    category: 'ติดบ้าน',
    address: "18 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 77 ปี | โรคพาร์กินสัน ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3237,
    lng: 100.8245,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0029',
  },
  {
    id: 'HN030',
    name: "นางอำไพ ขันทองหล่อ",
    category: 'ติดเตียง',
    address: "9/1 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 89 ปี | ชราภาพ มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.324,
    lng: 100.825,
    lastVisited: 'วันนี้',
    phone: '081-999-0030',
  },
  {
    id: 'HN031',
    name: "นางสาวสำรวม อินทรา",
    category: 'ติดบ้าน',
    address: "31 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 63 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3243,
    lng: 100.8255,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0031',
  },
  {
    id: 'HN032',
    name: "นางบุญนาค สุขประเสริฐ",
    category: 'ติดบ้าน',
    address: "14/1 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 79 ปี | ข้อเข่าเสื่อม ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3246,
    lng: 100.826,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0032',
  },
  {
    id: 'HN033',
    name: "นายสำรวย ขันทองหล่อ",
    category: 'ติดเตียง',
    address: "8 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 85 ปี | อัมพฤกษ์ แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3249,
    lng: 100.8265,
    lastVisited: 'วันนี้',
    phone: '081-999-0033',
  },
  {
    id: 'HN034',
    name: "นายพงศ์ธร เพ็ชรวัฒนา",
    category: 'ติดบ้าน',
    address: "12/2 หมู่ 6 ต.ไผ่ต่ำ",
    moo: "หมู่ 6",
    vitalSigns: "อายุ 58 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 6",
    lat: 14.3252,
    lng: 100.827,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0034',
  },
  {
    id: 'HN035',
    name: "นางทองหยิบ คงสมบูรณ์",
    category: 'ติดบ้าน',
    address: "8/2 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 87 ปี | ชราภาพ ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3255,
    lng: 100.8275,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0035',
  },
  {
    id: 'HN036',
    name: "นางสนุ่น ชาโต",
    category: 'ติดบ้าน',
    address: "25 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 80 ปี | ข้อเข่าเสื่อม เดินลำบาก มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3258,
    lng: 100.828,
    lastVisited: 'วันนี้',
    phone: '081-999-0036',
  },
  {
    id: 'HN037',
    name: "นายชำเลือง ยุทธการ",
    category: 'ติดเตียง',
    address: "41 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 83 ปี | อัมพฤกษ์ แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3261,
    lng: 100.8285,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0037',
  },
  {
    id: 'HN038',
    name: "นายนิคม รัตนะ",
    category: 'ติดบ้าน',
    address: "12 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 73 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3264,
    lng: 100.829,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0038',
  },
  {
    id: 'HN039',
    name: "นางพยอม สุขประเสริฐ",
    category: 'ติดบ้าน',
    address: "14/1 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 84 ปี | ขาอ่อนแรง ชราภาพ มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3267,
    lng: 100.8295,
    lastVisited: 'วันนี้',
    phone: '081-999-0039',
  },
  {
    id: 'HN040',
    name: "นางเจียง กลั่นเชื้อ",
    category: 'ติดเตียง',
    address: "19 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 88 ปี | ชราภาพ มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.327,
    lng: 100.81,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0040',
  },
  {
    id: 'HN041',
    name: "นางสาวหนูน้อย คำดวง",
    category: 'ติดบ้าน',
    address: "17/1 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 54 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3273,
    lng: 100.8105,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0041',
  },
  {
    id: 'HN042',
    name: "นายลำดวน ทรัพย์เจริญ",
    category: 'ติดบ้าน',
    address: "6 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 77 ปี | โรคพาร์กินสัน ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3276,
    lng: 100.811,
    lastVisited: 'วันนี้',
    phone: '081-999-0042',
  },
  {
    id: 'HN043',
    name: "นายบัว คงสมบูรณ์",
    category: 'ติดเตียง',
    address: "8 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 85 ปี | โรคหลอดเลือดสมอง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3279,
    lng: 100.8115,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0043',
  },
  {
    id: 'HN044',
    name: "นายสมาน ภูติสิทธิ์",
    category: 'ติดบ้าน',
    address: "10/2 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 82 ปี | ข้อเข่าเสื่อม เดินลำบาก มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3282,
    lng: 100.812,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0044',
  },
  {
    id: 'HN045',
    name: "นายชานน เผือกแก้ว",
    category: 'ติดบ้าน',
    address: "27/1 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 46 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3285,
    lng: 100.8125,
    lastVisited: 'วันนี้',
    phone: '081-999-0045',
  },
  {
    id: 'HN046',
    name: "นายอภิชาติ ยุทธการ",
    category: 'ติดบ้าน',
    address: "42 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 58 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3288,
    lng: 100.813,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0046',
  },
  {
    id: 'HN047',
    name: "นายบุญส่ง คงสมบูรณ์",
    category: 'ติดเตียง',
    address: "5 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 79 ปี | ชราภาพ มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3291,
    lng: 100.8135,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0047',
  },
  {
    id: 'HN048',
    name: "นายสีกา สากลาง",
    category: 'ติดบ้าน',
    address: "31 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 74 ปี | ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3294,
    lng: 100.814,
    lastVisited: 'วันนี้',
    phone: '081-999-0048',
  },
  {
    id: 'HN049',
    name: "นางสาววาริญญา เมฆหมอก",
    category: 'ติดบ้าน',
    address: "9/2 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 49 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3297,
    lng: 100.8145,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0049',
  },
  {
    id: 'HN050',
    name: "นายทนงศักดิ์ ไพรสมพงษ์",
    category: 'ติดบ้าน',
    address: "22 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 61 ปี | โรคหลอดเลือดสมอง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.33,
    lng: 100.815,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0050',
  },
  {
    id: 'HN051',
    name: "นางสาวสุนันทา งามระเบียบ",
    category: 'ติดบ้าน',
    address: "18/1 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 56 ปี | อัมพาต แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3303,
    lng: 100.8155,
    lastVisited: 'วันนี้',
    phone: '081-999-0051',
  },
  {
    id: 'HN052',
    name: "นางสาวพัชรินทร์ คงสมบูรณ์",
    category: 'ติดบ้าน',
    address: "7/1 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 43 ปี | สมองพิการ มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3306,
    lng: 100.816,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0052',
  },
  {
    id: 'HN053',
    name: "นางตุ คงสำเร็จ",
    category: 'ติดบ้าน',
    address: "11 หมู่ 7 ต.ไผ่ต่ำ",
    moo: "หมู่ 7",
    vitalSigns: "อายุ 84 ปี | ชราภาพ ขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 7",
    lat: 14.3309,
    lng: 100.8165,
    lastVisited: '2 วันที่แล้ว',
    phone: '081-999-0053',
  },
  {
    id: 'HN054',
    name: "นายพิมพ์ เอี่ยมสิทธิ์",
    category: 'ติดเตียง',
    address: "4 หมู่ 8 ต.ไผ่ต่ำ",
    moo: "หมู่ 8",
    vitalSigns: "อายุ 79 ปี | อัมพฤกษ์ แขนขาอ่อนแรง มีปัญหาการกิน การขับถ่าย และการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 8",
    lat: 14.3312,
    lng: 100.817,
    lastVisited: 'วันนี้',
    phone: '081-999-0054',
  },
  {
    id: 'HN055',
    name: "นายสมยศ ศรีสุระ",
    category: 'ติดบ้าน',
    address: "15/1 หมู่ 8 ต.ไผ่ต่ำ",
    moo: "หมู่ 8",
    vitalSigns: "อายุ 68 ปี | โรคหลอดเลือดสมอง แขนขาอ่อนแรง มีปัญหาการเคลื่อนไหว",
    caregiver: "อสม. ประจำหมู่ 8",
    lat: 14.3315,
    lng: 100.8175,
    lastVisited: '1 วันที่แล้ว',
    phone: '081-999-0055',
  },
];

export const SEED_ACTIVITIES: Activity[] = [
  {
    timestamp: '5 นาทีที่แล้ว',
    patientName: 'คุณสมพร รักดี',
    caregiverName: 'อสม. สมศรี',
    type: 'แจ้งเตือน',
    description: 'แจ้งเตือนด่วน: คุณสมพร (ติดเตียง) บ้านเลขที่ 45/1 ความดันสูง 150/90',
    status: 'Danger',
  },
  {
    timestamp: '20 นาทีที่แล้ว',
    patientName: 'คุณวิภา มีสุข',
    caregiverName: 'อสม. สมชาย',
    type: 'เข้าเยี่ยม',
    description: 'อสม. สมชาย เข้าเยี่ยม คุณวิภา (ติดบ้าน) บ้านเลขที่ 12/3 เรียบร้อยแล้ว อาการปกติ',
    status: 'Normal',
  },
  {
    timestamp: '1 ชั่วโมงที่แล้ว',
    patientName: 'คุณตาบุญมี แข็งแรง',
    caregiverName: 'อสม. สมศรี',
    type: 'นัดหมาย',
    description: 'นัดหมายกลุ่ม ติดสังคม บ้านเลขที่ 88/9 ตรวจสุขภาพประจำปีและสันทนาการ',
    status: 'Normal',
  },
  {
    timestamp: '1 วันที่แล้ว',
    patientName: 'คุณยายสายใจ สุขใจ',
    caregiverName: 'อสม. รัตนา',
    type: 'เข้าเยี่ยม',
    description: 'อสม. รัตนา เข้าเยี่ยม คุณยายสายใจ ตรวจวัดความดันโลหิตและจัดยาชุดประจำสัปดาห์',
    status: 'Normal',
  },
];

export class SheetsService {
  private accessToken: string;
  private spreadsheetId: string | null = null;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  // Set Authorization headers
  private getHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
  }

  // Step 1: Find spreadsheet in Drive or create if not exists
  async getOrCreateSpreadsheet(): Promise<string> {
    if (this.spreadsheetId) return this.spreadsheetId;

    if (!this.accessToken || this.accessToken.trim() === '' || this.accessToken === 'mock-staff-token') {
      throw new Error('กรุณาเข้าสู่ระบบด้วยบัญชี Google เพื่อเชื่อมต่อ Google Sheets');
    }

    // 1. Check local cache first
    try {
      const cachedId = localStorage.getItem('stitchsync_spreadsheet_id');
      if (cachedId) {
        this.spreadsheetId = cachedId;
        console.log('Using cached Google Spreadsheet ID:', cachedId);
        return cachedId;
      }
    } catch (e) {
      // ignore local storage errors
    }

    // 2. Try searching for existing spreadsheet in Drive
    try {
      const query = encodeURIComponent(`name = '${SPREADSHEET_TITLE}' and mimeType = 'application/vnd.google-apps.spreadsheet' and trashed = false`);
      const searchUrl = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)`;
      
      const searchResponse = await fetch(searchUrl, {
        headers: this.getHeaders(),
      });

      if (searchResponse.ok) {
        const searchResult = await searchResponse.json();
        if (searchResult.files && searchResult.files.length > 0) {
          this.spreadsheetId = searchResult.files[0].id;
          try {
            localStorage.setItem('stitchsync_spreadsheet_id', this.spreadsheetId!);
          } catch (e) {}
          console.log('Found existing spreadsheet in Drive:', this.spreadsheetId);
          return this.spreadsheetId!;
        }
      } else if (searchResponse.status === 401 || searchResponse.status === 403) {
        throw new Error(`สิทธิ์การเข้าถึง Google Drive ไม่ถูกต้องหรือหมดอายุ (HTTP ${searchResponse.status})`);
      } else {
        const errText = await searchResponse.text().catch(() => '');
        console.warn('Drive search returned non-OK response:', searchResponse.status, errText);
      }
    } catch (searchError: any) {
      if (searchError.message && searchError.message.includes('401')) {
        throw searchError;
      }
      console.warn('Could not search Drive for existing spreadsheet, proceeding to create one:', searchError);
    }

    // 3. Fallback: If not found in Drive or Drive search fails, create a new one directly via Sheets API
    try {
      console.log('Spreadsheet not found or Drive search unavailable. Creating a new spreadsheet via Sheets API...');
      const createUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
      const createBody = {
        properties: {
          title: SPREADSHEET_TITLE,
        },
        sheets: [
          {
            properties: {
              title: 'Patients',
            },
          },
          {
            properties: {
              title: 'Activities',
            },
          },
        ],
      };

      const createResponse = await fetch(createUrl, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(createBody),
      });

      if (!createResponse.ok) {
        if (createResponse.status === 401 || createResponse.status === 403) {
          throw new Error(`ต้องการสิทธิ์ Google OAuth (HTTP ${createResponse.status}) - กรุณาเข้าสู่ระบบ Google อีกครั้ง`);
        }
        const errBody = await createResponse.text().catch(() => '');
        throw new Error(`ไม่สามารถสร้างแผ่นงาน Google Sheets ใหม่ได้ (HTTP ${createResponse.status}): ${errBody}`);
      }

      const createResult = await createResponse.json();
      this.spreadsheetId = createResult.spreadsheetId;
      try {
        localStorage.setItem('stitchsync_spreadsheet_id', this.spreadsheetId!);
      } catch (e) {}
      console.log('Created new spreadsheet ID:', this.spreadsheetId);

      // Populate headers & initial seed data
      await this.initializeSpreadsheet();

      return this.spreadsheetId!;
    } catch (error: any) {
      console.warn('getOrCreateSpreadsheet warning:', error.message || error);
      throw error;
    }
  }

  // Populate newly created sheet with headers & seed data
  private async initializeSpreadsheet() {
    if (!this.spreadsheetId) return;

    try {
      // 1. Patients sheet headers and data
      const patientsRange = 'Patients!A1:J7';
      const patientsValues = [
        ['ID', 'Name', 'Category', 'Address', 'VitalSigns', 'Caregiver', 'Lat', 'Lng', 'LastVisited', 'Phone'],
        ...SEED_PATIENTS.map(p => [
          p.id,
          p.name,
          p.category,
          p.address,
          p.vitalSigns,
          p.caregiver,
          p.lat.toString(),
          p.lng.toString(),
          p.lastVisited,
          p.phone,
        ]),
      ];

      // 2. Activities sheet headers and data
      const activitiesRange = 'Activities!A1:F5';
      const activitiesValues = [
        ['Timestamp', 'PatientName', 'CaregiverName', 'Type', 'Description', 'Status'],
        ...SEED_ACTIVITIES.map(a => [
          a.timestamp,
          a.patientName,
          a.caregiverName,
          a.type,
          a.description,
          a.status,
        ]),
      ];

      // Send update request for Patients
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${patientsRange}?valueInputOption=USER_ENTERED`,
        {
          method: 'PUT',
          headers: this.getHeaders(),
          body: JSON.stringify({ values: patientsValues }),
        }
      );

      // Send update request for Activities
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${activitiesRange}?valueInputOption=USER_ENTERED`,
        {
          method: 'PUT',
          headers: this.getHeaders(),
          body: JSON.stringify({ values: activitiesValues }),
        }
      );

      console.log('Successfully initialized spreadsheet with seed data.');
    } catch (error) {
      console.error('Failed to initialize spreadsheet seed data:', error);
    }
  }

  // Get all sheet titles in a spreadsheet
  async getSpreadsheetSheets(spreadsheetId: string): Promise<string[]> {
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`;
      const response = await fetch(url, { headers: this.getHeaders() });
      if (!response.ok) {
        const errJson = await response.json().catch(() => null);
        const errMsg = errJson?.error?.message || response.statusText || `HTTP ${response.status}`;
        throw new Error(`Failed to fetch sheet names: ${errMsg}`);
      }
      const data = await response.json();
      return data.sheets?.map((s: any) => s.properties.title) || [];
    } catch (error) {
      console.error('Error getting sheet names:', error);
      throw error;
    }
  }

  // Fetch arbitrary values from any sheet and range
  async fetchSheetValues(spreadsheetId: string, sheetName: string, range: string = 'A1:Z500'): Promise<any[][]> {
    try {
      const encodedRange = encodeURIComponent(`${sheetName}!${range}`);
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}`;
      const response = await fetch(url, { headers: this.getHeaders() });
      if (!response.ok) {
        const errJson = await response.json().catch(() => null);
        const errMsg = errJson?.error?.message || response.statusText || `HTTP ${response.status}`;
        throw new Error(`Failed to fetch sheet values: ${errMsg}`);
      }
      const data = await response.json();
      return data.values || [];
    } catch (error) {
      console.error('Error fetching sheet values:', error);
      throw error;
    }
  }

  // Fetch all Patients
  async fetchPatients(): Promise<Patient[]> {
    const spreadId = await this.getOrCreateSpreadsheet();
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Patients!A2:J1000`;
      const response = await fetch(url, { headers: this.getHeaders() });
      if (!response.ok) throw new Error('Failed to fetch patients values');
      const data = await response.json();
      
      if (!data.values || data.values.length === 0) {
        return [];
      }

      return data.values.map((row: string[]) => ({
        id: row[0] || '',
        name: row[1] || '',
        category: (row[2] as PatientCategory) || 'ติดสังคม',
        address: row[3] || '',
        vitalSigns: row[4] || '',
        caregiver: row[5] || '',
        lat: parseFloat(row[6]) || 14.321,
        lng: parseFloat(row[7]) || 100.812,
        lastVisited: row[8] || '',
        phone: row[9] || '',
      }));
    } catch (error) {
      console.error('Error fetching patients:', error);
      // Return default list if sheet fetching fails
      return SEED_PATIENTS;
    }
  }

  // Fetch all Activities
  async fetchActivities(): Promise<Activity[]> {
    const spreadId = await this.getOrCreateSpreadsheet();
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Activities!A2:F1000`;
      const response = await fetch(url, { headers: this.getHeaders() });
      if (!response.ok) throw new Error('Failed to fetch activities values');
      const data = await response.json();

      if (!data.values || data.values.length === 0) {
        return [];
      }

      // Return newer first
      const acts = data.values.map((row: string[]) => ({
        timestamp: row[0] || '',
        patientName: row[1] || '',
        caregiverName: row[2] || '',
        type: (row[3] as ActivityType) || 'เข้าเยี่ยม',
        description: row[4] || '',
        status: (row[5] as ActivityStatus) || 'Normal',
      }));

      return acts.reverse();
    } catch (error) {
      console.error('Error fetching activities:', error);
      return SEED_ACTIVITIES;
    }
  }

  // Add new Patient
  async addPatient(patient: Patient): Promise<boolean> {
    const spreadId = await this.getOrCreateSpreadsheet();
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Patients!A:J:append?valueInputOption=USER_ENTERED`;
      const values = [[
        patient.id,
        patient.name,
        patient.category,
        patient.address,
        patient.vitalSigns,
        patient.caregiver,
        patient.lat.toString(),
        patient.lng.toString(),
        patient.lastVisited,
        patient.phone,
      ]];

      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ values }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error appending patient:', error);
      return false;
    }
  }

  // Add new Activity
  async addActivity(activity: Activity): Promise<boolean> {
    const spreadId = await this.getOrCreateSpreadsheet();
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Activities!A:F:append?valueInputOption=USER_ENTERED`;
      const values = [[
        activity.timestamp,
        activity.patientName,
        activity.caregiverName,
        activity.type,
        activity.description,
        activity.status,
      ]];

      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ values }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error appending activity:', error);
      return false;
    }
  }

  // Update Patient by ID
  async updatePatient(patient: Patient): Promise<boolean> {
    const spreadId = await this.getOrCreateSpreadsheet();
    try {
      // 1. Fetch current rows to find row index
      const urlFetch = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Patients!A2:A1000`;
      const responseFetch = await fetch(urlFetch, { headers: this.getHeaders() });
      if (!responseFetch.ok) throw new Error('Failed to fetch patient IDs for update');
      const dataFetch = await responseFetch.json();
      
      if (!dataFetch.values || dataFetch.values.length === 0) {
        return false;
      }
      
      const rowIndex = dataFetch.values.findIndex((row: string[]) => row[0] === patient.id);
      if (rowIndex === -1) {
        throw new Error('Patient ID not found in sheet');
      }
      
      const sheetRowNumber = rowIndex + 2; // +2 because 1-based index and header row
      const updateUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/Patients!A${sheetRowNumber}:J${sheetRowNumber}?valueInputOption=USER_ENTERED`;
      
      const values = [[
        patient.id,
        patient.name,
        patient.category,
        patient.address,
        patient.vitalSigns,
        patient.caregiver,
        patient.lat.toString(),
        patient.lng.toString(),
        patient.lastVisited,
        patient.phone,
      ]];
      
      const updateResponse = await fetch(updateUrl, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ values }),
      });
      
      return updateResponse.ok;
    } catch (error) {
      console.error('Error updating patient:', error);
      return false;
    }
  }
}
