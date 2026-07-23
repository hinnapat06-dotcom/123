import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Patient } from '../types';

interface DetailItem {
  type: 'อสม' | 'ผู้ป่วย' | 'ผู้ดูแล' | 'ผู้ทำคุณประโยชน์';
  name: string;
  data: any;
}

interface DetailViewModalProps {
  selectedDetailItem: DetailItem | null;
  onClose: () => void;
  patients: Patient[];
}

export const DetailViewModal: React.FC<DetailViewModalProps> = ({
  selectedDetailItem,
  onClose,
  patients,
}) => {
  if (!selectedDetailItem) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 select-none">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-150 flex flex-col z-10"
      >
        {/* Header */}
        <div className={`p-5 text-white ${
          selectedDetailItem.type === 'อสม' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' :
          selectedDetailItem.type === 'ผู้ป่วย' ? 'bg-gradient-to-r from-rose-600 to-pink-600' :
          selectedDetailItem.type === 'ผู้ทำคุณประโยชน์' ? 'bg-gradient-to-r from-amber-600 to-orange-600' :
          'bg-gradient-to-r from-emerald-600 to-teal-600'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/25 text-white block w-fit mb-1.5">
                {selectedDetailItem.type === 'อสม' ? 'ข้อมูล อสม. จิตอาสา' :
                 selectedDetailItem.type === 'ผู้ป่วย' ? 'ข้อมูลคนไข้ในระบบ' :
                 selectedDetailItem.type === 'ผู้ทำคุณประโยชน์' ? 'ข้อมูลผู้ทำคุณประโยชน์' :
                 'ข้อมูลผู้ดูแล (Caregiver)'}
              </span>
              <h3 className="text-lg font-extrabold tracking-tight">{selectedDetailItem.name}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[450px] overflow-y-auto custom-scrollbar">
          
          {selectedDetailItem.type === 'อสม' && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">สถานะตำแหน่ง</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">อสม. ปฏิบัติการในพื้นที่</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">หน่วยงานสังกัด</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">รพ.สต.ตำบลไผ่ต่ำ</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">ที่อยู่อาศัยปัจจุบัน</p>
                <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                  12 หมู่ 2 ต.ไผ่ต่ำ อ.วิหารแดง จ.สระบุรี 18150
                </p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 flex items-center justify-between">
                  <span>ผู้ป่วยในความรับผิดชอบ ({
                    patients.filter(p => p.caregiver === selectedDetailItem.name).length
                  } ราย)</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                </p>
                <div className="space-y-2">
                  {(() => {
                    const list = patients.filter(p => p.caregiver === selectedDetailItem.name);
                    if (list.length === 0) {
                      return <p className="text-slate-400 italic text-center py-4 bg-slate-50 rounded-lg border border-slate-100">ไม่มีผู้ป่วยในตารางความรับผิดชอบขณะนี้</p>;
                    }
                    return list.map((p, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex justify-between items-center hover:bg-slate-100/50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-800">{p.name}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{p.address}</p>
                        </div>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          p.category === 'ติดเตียง' ? 'bg-rose-50 text-rose-700 border border-rose-150' :
                          p.category === 'ติดบ้าน' ? 'bg-amber-50 text-amber-700 border border-amber-150' :
                          'bg-emerald-50 text-emerald-700 border border-emerald-150'
                        }`}>{p.category}</span>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}

          {selectedDetailItem.type === 'ผู้ป่วย' && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">รหัสผู้ป่วย HN</p>
                  <p className="text-xs font-mono font-extrabold text-slate-800 mt-0.5">{selectedDetailItem.data.id || 'HN-NEW'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">กลุ่มสุขภาพ</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      selectedDetailItem.data.category === 'ติดเตียง' ? 'bg-rose-500' :
                      selectedDetailItem.data.category === 'ติดบ้าน' ? 'bg-amber-500' :
                      'bg-emerald-500'
                    }`}></span>
                    <span>{selectedDetailItem.data.category}</span>
                  </p>
                </div>
              </div>

              {selectedDetailItem.data.cid && (
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">เลขบัตรประจำตัวประชาชน</p>
                  <p className="text-xs font-mono font-bold text-slate-800 mt-0.5">{selectedDetailItem.data.cid}</p>
                </div>
              )}

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">ที่อยู่ที่ติดต่อได้สะดวก</p>
                <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                  {selectedDetailItem.data.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">เบอร์ติดต่อด่วน</p>
                  <p className="text-xs font-bold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    {selectedDetailItem.data.phone || '081-xxx-xxxx'}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">สัญญาณชีพ/อาการสำคัญ</p>
                  <p className="text-xs font-bold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-100 truncate">
                    {selectedDetailItem.data.vitalSigns || 'ปกติ'}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1.5">ผู้ดูแล และ อสม. ผู้รับผิดชอบ</p>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 font-bold">
                    {selectedDetailItem.data.caregiver ? selectedDetailItem.data.caregiver.charAt(0) : 'อ'}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{selectedDetailItem.data.caregiver || 'ไม่มีข้อมูลผู้ดูแล'}</p>
                    <p className="text-[10px] text-slate-500">เจ้าหน้าที่สาธารณสุข / อสม. ประจำตำบล</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedDetailItem.type === 'ผู้ดูแล' && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">บทบาทหน้าที่หลัก</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">ผู้ดูแลหลักประจำตัวญาติ</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">ความสัมพันธ์ผู้ป่วย</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">ญาติสนิท / ผู้ดูแลหลัก</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">ที่อยู่ที่พำนักในชุมชน</p>
                <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                  {selectedDetailItem.data?.address || 'ต.ไผ่ต่ำ อ.วิหารแดง จ.สระบุรี'}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">เบอร์ติดต่อประสานงาน</p>
                <p className="text-xs font-extrabold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {selectedDetailItem.data?.phone || '081-xxx-xxxx'}
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1.5">ผู้ป่วยในความดูแลหลัก</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0 font-bold">
                      {selectedDetailItem.data?.name ? selectedDetailItem.data.name.charAt(0) : 'ค'}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{selectedDetailItem.data?.name || 'ไม่มีข้อมูลคนไข้'}</p>
                      <p className="text-[10px] text-slate-500">คนไข้ในทะเบียนตำบลไผ่ต่ำ</p>
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    selectedDetailItem.data?.category === 'ติดเตียง' ? 'bg-rose-50 text-rose-700 border border-rose-150' :
                    selectedDetailItem.data?.category === 'ติดบ้าน' ? 'bg-amber-50 text-amber-700 border border-amber-150' :
                    'bg-emerald-50 text-emerald-700 border border-emerald-150'
                  }`}>{selectedDetailItem.data?.category || 'ไม่ระบุ'}</span>
                </div>
              </div>
            </div>
          )}

          {selectedDetailItem.type === 'ผู้ทำคุณประโยชน์' && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">รหัสสมาชิก</p>
                  <p className="text-xs font-mono font-bold text-slate-800 mt-0.5">{selectedDetailItem.data?.id || 'BEN-000'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">ประจำหมู่บ้าน</p>
                  <p className="text-xs font-bold text-amber-700 mt-0.5">{selectedDetailItem.data?.moo || 'หมู่ 1'}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">สิ่งสนับสนุน / คุณประโยชน์ต่อชุมชน</p>
                <p className="text-xs font-semibold text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200 leading-relaxed">
                  {selectedDetailItem.data?.contribution || 'ผู้สนับสนุนชุมชนตำบลไผ่ต่ำ'}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">เบอร์โทรศัพท์ติดต่อ</p>
                <p className="text-xs font-extrabold font-mono text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {selectedDetailItem.data?.phone || '08x-xxx-xxxx'}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">ที่อยู่อาศัย / ที่ตั้งองค์กร</p>
                <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                  {selectedDetailItem.data?.address || 'ต.ไผ่ต่ำ อ.วิหารแดง จ.สระบุรี'}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </motion.div>
    </div>
  );
};
