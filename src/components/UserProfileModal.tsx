import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User as UserIcon, X, Edit3, Check, Shield } from 'lucide-react';
import { UserProfile, UserRole } from '../types';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  customProfile: UserProfile;
  setCustomProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onSaveProfile: (e: React.FormEvent) => void;
  userRole: UserRole;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  customProfile,
  setCustomProfile,
  onSaveProfile,
  userRole,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <UserIcon className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug">ข้อมูลส่วนตัวผู้ใช้งาน</h3>
                  <p className="text-[11px] text-blue-200/90 font-medium">จัดการโปรไฟล์ รูปถ่าย และข้อมูลติดต่อประจำระบบ</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 hover:bg-white/10 rounded-xl text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar space-y-5 flex-1 bg-slate-50/50">
              
              {/* User Info Section */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">{customProfile.displayName}</h4>
                    <p className="text-xs text-slate-500 font-mono">{customProfile.email}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {customProfile.roleName}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      ID: {customProfile.badgeId}
                    </span>
                  </div>
                </div>
              </div>

              {/* Edit Form */}
              <form onSubmit={onSaveProfile} className="space-y-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-blue-600" />
                  <span>แก้ไขรายละเอียดข้อมูลส่วนตัว</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">ชื่อ-นามสกุล ผู้เข้าใช้</label>
                    <input
                      type="text"
                      required
                      value={customProfile.displayName}
                      onChange={(e) => setCustomProfile(p => ({ ...p, displayName: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">อีเมลติดต่อ (Email)</label>
                    <input
                      type="email"
                      required
                      value={customProfile.email}
                      onChange={(e) => setCustomProfile(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">เบอร์โทรศัพท์ติดต่อด่วน</label>
                    <input
                      type="tel"
                      value={customProfile.phone}
                      onChange={(e) => setCustomProfile(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      placeholder="เช่น 081-987-6543"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">รหัสประจำตัว / สมาชิก</label>
                    <input
                      type="text"
                      value={customProfile.badgeId}
                      onChange={(e) => setCustomProfile(p => ({ ...p, badgeId: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">ตำแหน่ง / สิทธิ์การใช้งาน</label>
                    <input
                      type="text"
                      value={customProfile.roleName}
                      onChange={(e) => setCustomProfile(p => ({ ...p, roleName: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">หมู่บ้าน / พื้นที่รับผิดชอบ</label>
                    <input
                      type="text"
                      value={customProfile.moo}
                      onChange={(e) => setCustomProfile(p => ({ ...p, moo: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">สังกัด / หน่วยงานปฏิบัติงาน</label>
                  <input
                    type="text"
                    value={customProfile.workplace}
                    onChange={(e) => setCustomProfile(p => ({ ...p, workplace: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>บันทึกข้อมูลส่วนตัว</span>
                  </button>
                </div>
              </form>

              {/* System Session Status Card */}
              <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-150 text-xs space-y-2">
                <div className="flex items-center justify-between text-blue-900 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>สถานะการเชื่อมต่อระบบล่าสุด</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold">ONLINE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-blue-800">
                  <div>
                    <span className="text-blue-500 block text-[10px]">สิทธิ์ในระบบ:</span>
                    <span className="font-bold">{userRole === 'staff' ? 'เจ้าหน้าที่ (Admin)' : 'อสม. (VHV)'}</span>
                  </div>
                  <div>
                    <span className="text-blue-500 block text-[10px]">พื้นที่ปฏิบัติงาน:</span>
                    <span className="font-medium">ต.ไผ่ต่ำ อ.วิหารแดง</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
