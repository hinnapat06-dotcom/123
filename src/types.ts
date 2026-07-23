export type PatientCategory = 'ติดเตียง' | 'ติดบ้าน' | 'ติดสังคม';
export type ActivityType = 'แจ้งเตือน' | 'เข้าเยี่ยม' | 'นัดหมาย';
export type ActivityStatus = 'Danger' | 'Normal' | 'Warning';
export type UserRole = 'staff' | 'vhv' | 'caregiver' | 'dependent' | 'public';

export interface Patient {
  id: string;
  cid?: string;
  name: string;
  category: PatientCategory;
  address: string;
  moo?: string;
  vitalSigns: string;
  caregiver: string;
  lat: number;
  lng: number;
  lastVisited: string;
  phone: string;
}

export interface Activity {
  timestamp: string;
  patientName: string;
  caregiverName: string;
  type: ActivityType;
  description: string;
  status: ActivityStatus;
}

export interface VhvItem {
  id: string;
  cid?: string;
  name: string;
  phone: string;
  address: string;
  moo?: string;
  type: 'อสม' | 'จิตอาสา';
  assignedPatientsCount?: number;
}

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

export interface BenefactorItem {
  id: string;
  cid?: string;
  name: string;
  phone: string;
  address: string;
  moo?: string;
  contribution: string;
}

export interface UserProfile {
  displayName: string;
  email: string;
  phone: string;
  photoURL: string;
  roleName: string;
  workplace: string;
  moo: string;
  badgeId: string;
}

export interface UserAccessLog {
  id: string;
  time: string;
  userName: string;
  email: string;
  role: string;
  ip: string;
  location: string;
  device: string;
  status: 'ONLINE' | 'สำเร็จ';
  isMobile?: boolean;
}

export interface DashboardStats {
  totalPopulation: number;
  bedboundCount: number;
  homeboundCount: number;
  socialCount: number;
  activeUsers: number;
  mobilePercentage: number;
  desktopPercentage: number;
}

export interface NetworkLog {
  id: string;
  time: string;
  type: 'Auth' | 'Sheets DB' | 'Realtime Engine' | 'Geospatial' | 'Risk Evaluator' | 'V8 Engine';
  status: '200 OK' | '101 Switching' | '201 Created' | '204 No Content';
  latency: string;
  details: string;
}

export interface MapStyleOption {
  id: string;
  label: string;
  desc: string;
}
