import React, { useState, useEffect, useMemo } from 'react';
import {
  Coins,
  ShoppingBag,
  Gift,
  Plus,
  Minus,
  History,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  X,
  Search,
  Package,
  Settings,
  Award,
  Users,
  Eye,
  RefreshCw,
  PlusCircle,
  MinusCircle,
  BarChart2,
  Trash2,
  Image as ImageIcon,
  Upload
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  coinCost: number; // จำนวนเหรียญที่ใช้ในการแลก
  status: 'active' | 'inactive'; // เปิดให้แลก / ปิดการแลก
  images: string[]; // รูปภาพหลายรูป
}

export interface CoinTransaction {
  id: string;
  userId: string;
  userName: string;
  type: 'topup' | 'deduct' | 'exchange';
  amount: number;
  description: string;
  timestamp: string;
  staffName?: string;
}

export interface ExchangeRecord {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  userName: string;
  userRole: string;
  coinCost: number;
  timestamp: string;
  status: 'completed' | 'cancelled';
}

interface CoinExchangeWidgetProps {
  userRole: 'staff' | 'caregiver' | 'dependent' | 'public';
  userName?: string;
  vhvs: { id: string; name: string; phone: string; moo?: string }[];
  benefactors: { id: string; name: string; phone: string; moo?: string }[];
  onAddLog?: (source: string, message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 'PROD-001',
    name: 'เครื่องวัดความดันโลหิตดิจิทัลอัตโนมัติ',
    description: 'เครื่องวัดความดันโลหิตแบบพกพา หน้าจอ LCD ตัวเลขใหญ่ อ่านค่าง่าย เหมาะสำหรับ อสม. ใช้ตรวจเยี่ยมบ้าน',
    coinCost: 500,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'PROD-002',
    name: 'ชุดกระเป๋าเยี่ยมบ้าน อสม. ไผ่ต่ำพร้อมอุปกรณ์',
    description: 'กระเป๋าสะพายข้างกันน้ำ พร้อมชุดปฐมพยาบาล, สายวัดรอบเอว, เครื่องวัดไข้ดิจิทัล และสมุดบันทึก',
    coinCost: 350,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'PROD-003',
    name: 'ผ้าอ้อมผู้ใหญ่คุณภาพสูง แพ็ค 10 ชิ้น',
    description: 'ผ้าอ้อมสำหรับผู้ป่วยภาวะพึ่งพิง ซึมซับดีเยี่ยม ไม่อับชื้น เพื่อสนับสนุนการดูแลผู้ป่วยติดเตียง',
    coinCost: 150,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'PROD-004',
    name: 'เข็มเชิดชูเกียรติผู้ทำคุณประโยชน์ สสอ.ไผ่ต่ำ',
    description: 'เข็มที่ระลึกชุบทองแท้ สำหรับผู้ทำคุณประโยชน์และผู้สนับสนุนกองทุนสุขภาพตำบลไผ่ต่ำ',
    coinCost: 1000,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'PROD-005',
    name: 'เสื้อกั๊กจิตอาสาสุขภาพตำบลไผ่ต่ำ (ปักโลโก้)',
    description: 'เสื้อกั๊กผ้าเนื้อดี พร้อมกระเป๋าหลายช่อง สำหรับสวมใส่ขณะลงพื้นที่เยี่ยมบ้านและทำกิจกรรมชุมชน',
    coinCost: 250,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'PROD-006',
    name: 'คูปองร้านค้าชุมชนไผ่ต่ำ มูลค่า 200 บาท',
    description: 'ใช้แลกซื้อสินค้าอุปโภคบริโภค ณ ร้านค้าสหกรณ์และร้านค้าชุมชนที่ร่วมรายการในตำบลไผ่ต่ำ',
    coinCost: 200,
    status: 'active',
    images: [
      'https://images.unsplash.com/photo-1556742049-0a67822964e7?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const CoinExchangeWidget: React.FC<CoinExchangeWidgetProps> = ({
  userRole,
  userName = 'อสม. สมบูรณ์ สุขใจ',
  vhvs,
  benefactors,
  onAddLog
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'catalog' | 'history' | 'coinHistory' | 'dashboard' | 'admin'>('catalog');

  // Guarantee non-staff users cannot see or stay on staff admin tab
  useEffect(() => {
    if (userRole !== 'staff' && activeTab === 'admin') {
      setActiveTab('catalog');
    }
  }, [userRole, activeTab]);

  // Products state
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('phaitam_coin_products');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_PRODUCTS;
  });

  // User coin balances map: { [userNameOrId]: number }
  const [userCoinsMap, setUserCoinsMap] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('phaitam_coin_balances_v0');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      'อสม. สมบูรณ์ สุขใจ': 0,
      'อสม. วิจิตร แก้วมณี': 0,
      'คุณสมชาย ใจดี (ผู้ใหญ่บ้านหมู่ 1)': 0,
      'คุณวิภา สุขสวัสดิ์': 0,
      'เจ้าหน้าที่สาธารณสุข (Admin)': 0
    };
  });

  // Exchange Records
  const [exchanges, setExchanges] = useState<ExchangeRecord[]>(() => {
    try {
      const saved = localStorage.getItem('phaitam_coin_exchanges');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Coin Transactions
  const [coinTransactions, setCoinTransactions] = useState<CoinTransaction[]>(() => {
    try {
      const saved = localStorage.getItem('phaitam_coin_transactions');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Selected Product detail modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);

  // Filters state
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Admin Top-up / Deduct form
  const [targetMember, setTargetMember] = useState<string>('');
  const [coinAmountInput, setCoinAmountInput] = useState<number>(100);
  const [coinReasonInput, setCoinReasonInput] = useState<string>('สมนาคุณผลงานการลงเยี่ยมบ้านผู้ป่วย');

  // Admin Add Product form state
  const [isAddingProduct, setIsAddingProduct] = useState<boolean>(false);
  const [newProdName, setNewProdName] = useState<string>('');
  const [newProdDesc, setNewProdDesc] = useState<string>('');
  const [newProdCoins, setNewProdCoins] = useState<number>(100);
  const [newProdImage, setNewProdImage] = useState<string>('');

  // Persist local storage changes
  useEffect(() => {
    localStorage.setItem('phaitam_coin_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('phaitam_coin_balances_v0', JSON.stringify(userCoinsMap));
  }, [userCoinsMap]);

  useEffect(() => {
    localStorage.setItem('phaitam_coin_exchanges', JSON.stringify(exchanges));
  }, [exchanges]);

  useEffect(() => {
    localStorage.setItem('phaitam_coin_transactions', JSON.stringify(coinTransactions));
  }, [coinTransactions]);

  // Current active user's coins
  const currentMemberKey = userRole === 'staff' ? 'เจ้าหน้าที่สาธารณสุข (Admin)' : userName;
  const currentCoins = userCoinsMap[currentMemberKey] ?? 0;

  // Member options list
  const memberOptions = useMemo(() => {
    const list: { name: string; role: string }[] = [];
    vhvs.forEach(v => list.push({ name: v.name, role: 'อสม.' }));
    benefactors.forEach(b => list.push({ name: b.name, role: 'ผู้ทำคุณประโยชน์' }));
    list.push({ name: 'อสม. สมบูรณ์ สุขใจ', role: 'อสม.' });
    list.push({ name: 'อสม. วิจิตร แก้วมณี', role: 'อสม.' });
    return Array.from(new Set(list.map(l => l.name))).map(name => {
      const match = list.find(l => l.name === name);
      return { name, role: match?.role || 'สมาชิก' };
    });
  }, [vhvs, benefactors]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });
  }, [products, searchQuery]);

  // Handle Delete Product
  const handleDeleteProduct = (productId: string, productName: string) => {
    if (window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบรายการสินค้า "${productName}" ออกจากระบบ?`)) {
      const updated = products.filter(p => p.id !== productId);
      setProducts(updated);
      if (onAddLog) {
        onAddLog('Coin System', `ลบรายการสินค้า "${productName}" สำเร็จ`, 'warning');
      }
      alert(`ลบรายการสินค้า "${productName}" เรียบร้อยแล้ว`);
      if (selectedProduct?.id === productId) {
        setSelectedProduct(null);
      }
    }
  };

  // Handle Exchange Product
  const handlePerformExchange = (product: Product) => {
    if (product.status !== 'active') {
      alert('⚠️ สินค้ารายการนี้ปิดการแลกชั่วคราว');
      return;
    }
    if (currentCoins < product.coinCost) {
      alert(`⚠️ จำนวนเหรียญไม่เพียงพอ! คุณมี ${currentCoins.toLocaleString()} เหรียญ แต่นี่ต้องใช้ ${product.coinCost.toLocaleString()} เหรียญในการแลก`);
      return;
    }

    if (!window.confirm(`คุณยืนยันที่จะแลกสินค้า "${product.name}" โดยใช้ ${product.coinCost.toLocaleString()} เหรียญ ใช่หรือไม่?`)) {
      return;
    }

    // 1. Deduct user coins
    const updatedUserCoins = {
      ...userCoinsMap,
      [currentMemberKey]: currentCoins - product.coinCost
    };
    setUserCoinsMap(updatedUserCoins);

    // 2. Create exchange log
    const nowStr = new Date().toLocaleString('th-TH', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' น.';

    const newExRecord: ExchangeRecord = {
      id: `EX-${Date.now().toString().slice(-5)}`,
      productId: product.id,
      productName: product.name,
      productImage: product.images[0] || '',
      userName: currentMemberKey,
      userRole: userRole === 'staff' ? 'เจ้าหน้าที่' : 'อสม./ผู้ทำคุณประโยชน์',
      coinCost: product.coinCost,
      timestamp: nowStr,
      status: 'completed'
    };
    setExchanges([newExRecord, ...exchanges]);

    // 3. Create coin transaction log
    const newTxRecord: CoinTransaction = {
      id: `TX-${Date.now().toString().slice(-5)}`,
      userId: currentMemberKey,
      userName: currentMemberKey,
      type: 'exchange',
      amount: product.coinCost,
      description: `แลกสินค้า: ${product.name}`,
      timestamp: nowStr
    };
    setCoinTransactions([newTxRecord, ...coinTransactions]);

    if (onAddLog) {
      onAddLog('Coin System', `แลกสินค้าเรียบร้อยแล้ว: ${product.name} (หัก ${product.coinCost} เหรียญ)`, 'success');
    }

    alert('✅ แลกสินค้าเรียบร้อยแล้ว! ระบบได้หักจำนวนเหรียญโดยอัตโนมัติแล้ว');
    setSelectedProduct(null);
  };

  // Staff Top-up or Deduct coins
  const handleAdminModifyCoins = (actionType: 'topup' | 'deduct') => {
    if (!targetMember) {
      alert('กรุณาเลือกสมาชิกที่ต้องการดำเนินการเติมเหรียญหรือหักเหรียญ');
      return;
    }
    if (coinAmountInput <= 0) {
      alert('กรุณาระบุจำนวนเหรียญที่ถูกต้อง');
      return;
    }

    const currentBal = userCoinsMap[targetMember] ?? 0;
    let newBal = currentBal;
    if (actionType === 'topup') {
      newBal += coinAmountInput;
    } else {
      if (currentBal < coinAmountInput) {
        alert(`สมาชิกรายนี้มีเหรียญเพียง ${currentBal} เหรียญ ไม่สามารถหักจำนวน ${coinAmountInput} เหรียญได้`);
        return;
      }
      newBal -= coinAmountInput;
    }

    setUserCoinsMap({
      ...userCoinsMap,
      [targetMember]: newBal
    });

    const nowStr = new Date().toLocaleString('th-TH', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' น.';

    const newTx: CoinTransaction = {
      id: `TX-${Date.now().toString().slice(-5)}`,
      userId: targetMember,
      userName: targetMember,
      type: actionType,
      amount: coinAmountInput,
      description: coinReasonInput || (actionType === 'topup' ? 'เติมเหรียญรางวัลสะสม' : 'หักเหรียญปรับปรุงยอดยกมา'),
      timestamp: nowStr,
      staffName: 'เจ้าหน้าที่สาธารณสุข'
    };

    setCoinTransactions([newTx, ...coinTransactions]);

    if (onAddLog) {
      onAddLog('Coin System', `${actionType === 'topup' ? 'เติมเหรียญให้' : 'หักเหรียญ'} ${targetMember} จำนวน ${coinAmountInput} เหรียญ`, 'info');
    }

    alert(`บันทึก${actionType === 'topup' ? 'เติมเหรียญ' : 'หักเหรียญ'} ${targetMember} จำนวน ${coinAmountInput} เหรียญ เรียบร้อยแล้ว (ยอดคงเหลือใหม่: ${newBal.toLocaleString()} เหรียญ)`);
  };

  // Image File Upload Handler (JPEG / PNG)
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate MIME type and file extension for JPEG (.jpg, .jpeg) and PNG (.png)
    const validMimes = ['image/jpeg', 'image/jpg', 'image/png'];
    const fileNameLower = file.name.toLowerCase();
    const isValidExt = fileNameLower.endsWith('.jpg') || fileNameLower.endsWith('.jpeg') || fileNameLower.endsWith('.png');

    if (!validMimes.includes(file.type) && !isValidExt) {
      alert('⚠️ กรุณาเลือกไฟล์รูปภาพที่เป็น JPEG (.jpg, .jpeg) หรือ PNG (.png) เท่านั้น');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setNewProdImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // Add Product Handler
  const handleAddNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    const newProduct: Product = {
      id: `PROD-${String(products.length + 1).padStart(3, '0')}`,
      name: newProdName.trim(),
      description: newProdDesc.trim() || 'สินค้ารายการสะสมแลกรางวัลตำบลไผ่ต่ำ',
      coinCost: Number(newProdCoins) || 100,
      status: 'active',
      images: [
        newProdImage.trim() || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
      ]
    };

    setProducts([newProduct, ...products]);
    setIsAddingProduct(false);
    setNewProdName('');
    setNewProdDesc('');
    setNewProdCoins(100);
    setNewProdImage('');
    alert(`เพิ่มสินค้ารายการใหม่ "${newProduct.name}" เข้าสู่ระบบแลกสินค้าเรียบร้อยแล้ว`);
  };

  // Dashboard Metrics
  const totalProductsCount = products.length;
  const totalExchangesCount = exchanges.length;
  const totalCoinsSpent = exchanges.reduce((acc, curr) => acc + curr.coinCost, 0);

  return (
    <>
      {/* Floating Green Room Button at Bottom Right */}
      <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-40 select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white p-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-2xl hover:shadow-emerald-900/40 transition-all duration-300 flex items-center gap-2.5 sm:gap-3 cursor-pointer border border-emerald-400/40 active:scale-95"
          title="ตารางแลกเปลี่ยนสินค้า"
        >
          <div className="w-9.5 h-9.5 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 group-hover:scale-110 transition-transform">
            <Coins className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div className="text-left">
            <span className="text-sm sm:text-base font-black tracking-tight text-white leading-tight block">การแลกเปลี่ยน</span>
          </div>
        </button>
      </div>

      {/* Modal - ทรงสี่เหลี่ยมผืนผ้ายาวขึ้น (w-[95vw] max-w-6xl h-[95vh] max-h-[95vh]) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 select-none bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-[95vw] max-w-6xl h-[95vh] max-h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
            
            {/* Header Room Banner */}
            <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-4 sm:p-5 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 z-10">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
                  <Gift className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-sans font-black text-base sm:text-xl text-white leading-snug">
                      การแลกเปลี่ยน
                    </h3>
                  </div>
                  <p className="text-xs text-emerald-100/90 font-medium mt-0.5">
                    ระบบสะสมและใช้เหรียญ ตำบลไผ่ต่ำ
                  </p>
                </div>
              </div>

              {/* Coins & Profile Box */}
              <div className="flex items-center gap-3 z-10 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-2.5 sm:pt-0">
                <div className="bg-emerald-950/60 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-400/40 flex items-center gap-3">
                  <Coins className="w-5 h-5 text-amber-400 animate-bounce shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-200 uppercase font-bold tracking-wider whitespace-nowrap">เหรียญสะสมของคุณ</div>
                    <div className="text-sm sm:text-base font-black font-mono text-amber-300 leading-tight whitespace-nowrap">
                      {currentCoins.toLocaleString()} <span className="text-xs font-sans font-normal text-amber-200">เหรียญ</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer shrink-0"
                  aria-label="ปิดหน้าต่าง"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="bg-slate-50 border-b border-slate-200/80 px-4 pt-2.5 flex items-center gap-1.5 overflow-x-auto shrink-0 touch-scroll">
              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'catalog'
                    ? 'bg-white text-emerald-700 border-t-2 border-emerald-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>แคตตาล็อกสินค้า</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'history'
                    ? 'bg-white text-emerald-700 border-t-2 border-emerald-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <History className="w-4 h-4 text-slate-500 shrink-0" />
                <span>ประวัติการแลกเปลี่ยน</span>
              </button>

              <button
                onClick={() => setActiveTab('coinHistory')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'coinHistory'
                    ? 'bg-white text-emerald-700 border-t-2 border-emerald-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Coins className="w-4 h-4 text-amber-500 shrink-0" />
                <span>ประวัติเหรียญ (เติม/หัก)</span>
              </button>

              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'dashboard'
                    ? 'bg-white text-emerald-700 border-t-2 border-emerald-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <BarChart2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Dashboard สรุปข้อมูล</span>
              </button>

              {/* แท็บจัดการระบบ - เฉพาะเจ้าหน้าที่เท่านั้น (อสม. จะไม่เห็น) */}
              {userRole === 'staff' && (
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    activeTab === 'admin'
                      ? 'bg-white text-emerald-700 border-t-2 border-emerald-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Settings className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>จัดการระบบ (เจ้าหน้าที่)</span>
                </button>
              )}
            </div>

            {/* Content Body Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar touch-scroll bg-slate-50">
              
              {/* TAB 1: CATALOGUE */}
              {activeTab === 'catalog' && (
                <div className="space-y-4">
                  {/* Prominent Coin Display Banner on Exchange Screen */}
                  <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-4 rounded-2xl shadow-sm border border-emerald-600/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-black shadow-md shrink-0">
                        <Coins className="w-6 h-6 text-slate-900 animate-bounce" />
                      </div>
                      <div>
                        <span className="text-[10px] text-emerald-200 uppercase font-extrabold tracking-wider block">เหรียญสะสมพร้อมใช้นำมาแลกเปลี่ยน</span>
                        <div className="text-xl sm:text-2xl font-black font-mono text-amber-300 leading-none mt-1">
                          {currentCoins.toLocaleString()} <span className="text-xs font-sans font-normal text-amber-100">เหรียญ</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs bg-emerald-950/70 border border-emerald-600/50 px-3.5 py-2 rounded-xl text-emerald-100 font-medium text-center sm:text-right">
                      ✨ สิทธิพิเศษผู้ทำคุณประโยชน์: <span className="font-bold text-amber-300">{currentMemberKey}</span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="relative w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ค้นหาชื่อสินค้า รายละเอียด หรือจำนวนเหรียญ..."
                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Product Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((p) => {
                      const canAfford = currentCoins >= p.coinCost;
                      return (
                        <div
                          key={p.id}
                          className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group"
                        >
                          {/* Image Container */}
                          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                            <img
                              src={p.images[0] || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'}
                              alt={p.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Delete Button for Staff */}
                            {userRole === 'staff' && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteProduct(p.id, p.name);
                                }}
                                className="absolute top-2.5 right-2.5 p-2 bg-rose-600/90 hover:bg-rose-700 text-white rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center"
                                title="ลบรายการสินค้า"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          {/* Details */}
                          <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                            <div>
                              <h4 className="text-xs sm:text-sm font-black text-slate-800 line-clamp-2 leading-snug">
                                {p.name}
                              </h4>
                              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                {p.description}
                              </p>
                            </div>

                            {/* Price in Coins and Action */}
                            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase block leading-tight">ราคาแลก</span>
                                <div className="flex items-center gap-1 text-emerald-700 font-mono font-black text-base">
                                  <Coins className="w-4 h-4 text-amber-500 shrink-0" />
                                  <span>{p.coinCost.toLocaleString()}</span>
                                  <span className="text-xs font-sans font-normal text-slate-500">เหรียญ</span>
                                </div>
                              </div>

                              <button
                                onClick={() => setSelectedProduct(p)}
                                className="w-full sm:w-auto px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap"
                              >
                                <Eye className="w-3.5 h-3.5 shrink-0" />
                                <span>ดูรายละเอียด / แลก</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: EXCHANGE HISTORY */}
              {activeTab === 'history' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <div className="flex items-center gap-2">
                      <History className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-xs font-bold text-slate-800">ประวัติการแลกสินค้าทั้งหมด</h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      รวมทั้งหมด: {exchanges.length} รายการ
                    </span>
                  </div>

                  <div className="overflow-x-auto custom-scrollbar touch-scroll">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 font-mono border-b border-slate-100">
                          <th className="p-3.5 pl-5 font-bold">รหัสรายการ</th>
                          <th className="p-3.5 font-bold">สินค้าที่แลก</th>
                          <th className="p-3.5 font-bold">ผู้แลกสินค้า</th>
                          <th className="p-3.5 font-bold">จำนวนเหรียญที่ใช้</th>
                          <th className="p-3.5 font-bold">เวลาที่ทำรายการ</th>
                          <th className="p-3.5 pr-5 text-right font-bold">สถานะ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {exchanges.map((ex) => (
                          <tr key={ex.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="p-3.5 pl-5 font-mono font-bold text-slate-400">{ex.id}</td>
                            <td className="p-3.5">
                              <div className="flex items-center gap-2.5">
                                {ex.productImage && (
                                  <img src={ex.productImage} alt="" className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200" />
                                )}
                                <span className="font-bold text-slate-800">{ex.productName}</span>
                              </div>
                            </td>
                            <td className="p-3.5">
                              <span className="font-semibold text-slate-700">{ex.userName}</span>
                            </td>
                            <td className="p-3.5 font-mono font-bold text-emerald-700">
                              -{ex.coinCost.toLocaleString()} เหรียญ
                            </td>
                            <td className="p-3.5 text-slate-500 font-mono">{ex.timestamp}</td>
                            <td className="p-3.5 pr-5 text-right">
                              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md font-bold text-[10px]">
                                แลกสินค้าเรียบร้อยแล้ว
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: COIN TRANSACTIONS */}
              {activeTab === 'coinHistory' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-amber-500" />
                      <h4 className="text-xs font-bold text-slate-800">ประวัติการเติมและใช้เหรียญ (Coin History)</h4>
                    </div>
                  </div>

                  <div className="overflow-x-auto custom-scrollbar touch-scroll">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 font-mono border-b border-slate-100">
                          <th className="p-3.5 pl-5 font-bold">รหัสธุรกรรม</th>
                          <th className="p-3.5 font-bold">สมาชิก</th>
                          <th className="p-3.5 font-bold">ประเภท</th>
                          <th className="p-3.5 font-bold">จำนวนเหรียญ</th>
                          <th className="p-3.5 font-bold">เหตุผล / รายละเอียด</th>
                          <th className="p-3.5 pr-5 font-bold">เวลาที่บันทึก</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {coinTransactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="p-3.5 pl-5 font-mono font-bold text-slate-400">{tx.id}</td>
                            <td className="p-3.5 font-bold text-slate-800">{tx.userName}</td>
                            <td className="p-3.5">
                              {tx.type === 'topup' ? (
                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-bold text-[10px]">
                                  + เติมเหรียญ
                                </span>
                              ) : tx.type === 'deduct' ? (
                                <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded font-bold text-[10px]">
                                  - หักเหรียญ
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-bold text-[10px]">
                                  🛒 แลกสินค้า
                                </span>
                              )}
                            </td>
                            <td className={`p-3.5 font-mono font-extrabold ${tx.type === 'topup' ? 'text-emerald-600' : 'text-rose-600'}`}>
                              {tx.type === 'topup' ? `+${tx.amount.toLocaleString()}` : `-${tx.amount.toLocaleString()}`} เหรียญ
                            </td>
                            <td className="p-3.5 text-slate-600">{tx.description}</td>
                            <td className="p-3.5 pr-5 text-slate-400 font-mono">{tx.timestamp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 4: DASHBOARD SUMMARY */}
              {activeTab === 'dashboard' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">จำนวนสินค้าทั้งหมด</span>
                      <div className="text-xl font-black text-slate-800 mt-1 font-mono">{totalProductsCount} รายการ</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">จำนวนรายการแลกทั้งหมด</span>
                      <div className="text-xl font-black text-emerald-600 mt-1 font-mono">{totalExchangesCount} ครั้ง</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">จำนวนเหรียญที่ถูกใช้แลก</span>
                      <div className="text-xl font-black text-amber-600 mt-1 font-mono">{totalCoinsSpent.toLocaleString()} เหรียญ</div>
                    </div>
                  </div>

                  {/* Registered members coins table */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <h4 className="text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>สรุปเหรียญคงเหลือของสมาชิก (อสม. / ผู้ทำคุณประโยชน์)</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {memberOptions.map(m => {
                        const coins = userCoinsMap[m.name] ?? 0;
                        return (
                          <div key={m.name} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-slate-800">{m.name}</p>
                              <span className="text-[9px] text-slate-500 font-semibold">{m.role}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono font-black text-amber-600">{coins.toLocaleString()} เหรียญ</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: STAFF ADMIN CONTROLS (เฉพาะเจ้าหน้าที่สาธารณสุขเท่านั้น อสม. ไม่เห็น) */}
              {activeTab === 'admin' && userRole === 'staff' && (
                <div className="space-y-5">
                  
                  {/* Top-Up / Deduct Section */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Coins className="w-5 h-5 text-emerald-600" />
                      <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        1. ระบบเติมเหรียญ / หักเหรียญ สมาชิก (Staff Admin)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <label className="font-bold text-slate-600 block mb-1">เลือกสมาชิก (อสม. / ผู้ทำคุณประโยชน์)</label>
                        <select
                          value={targetMember}
                          onChange={(e) => setTargetMember(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl font-bold text-slate-800"
                        >
                          <option value="">-- กรุณาเลือกสมาชิก --</option>
                          {memberOptions.map(m => (
                            <option key={m.name} value={m.name}>
                              {m.name} ({m.role}) - เหรียญคงเหลือ: {(userCoinsMap[m.name] ?? 0).toLocaleString()}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="font-bold text-slate-600 block mb-1">จำนวนเหรียญ</label>
                        <input
                          type="number"
                          value={coinAmountInput}
                          onChange={(e) => setCoinAmountInput(Number(e.target.value))}
                          placeholder="เช่น 100"
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl font-mono font-bold text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="font-bold text-slate-600 block mb-1">เหตุผล / รายละเอียดบันทึก</label>
                        <input
                          type="text"
                          value={coinReasonInput}
                          onChange={(e) => setCoinReasonInput(e.target.value)}
                          placeholder="เช่น รางวัลปฏิบัติงานลงเยี่ยมบ้าน"
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end pt-1">
                      <button
                        onClick={() => handleAdminModifyCoins('deduct')}
                        className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <MinusCircle className="w-4 h-4 text-rose-600" />
                        <span>หักเหรียญสมาชิก</span>
                      </button>

                      <button
                        onClick={() => handleAdminModifyCoins('topup')}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <PlusCircle className="w-4 h-4" />
                        <span>เติมเหรียญให้สมาชิก</span>
                      </button>
                    </div>
                  </div>

                  {/* Manage Products Section */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-emerald-600" />
                        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          2. จัดการรายการสินค้าแลกเปลี่ยน
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsAddingProduct(!isAddingProduct)}
                        className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isAddingProduct ? 'ยกเลิกเพิ่มสินค้า' : 'เพิ่มสินค้ารายการใหม่'}</span>
                      </button>
                    </div>

                    {isAddingProduct && (
                      <form onSubmit={handleAddNewProduct} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                        <h5 className="font-extrabold text-slate-800">กรอกข้อมูลสินค้าใหม่</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="font-bold text-slate-600 block mb-1">ชื่อสินค้า</label>
                            <input
                              type="text"
                              required
                              value={newProdName}
                              onChange={(e) => setNewProdName(e.target.value)}
                              placeholder="เช่น เครื่องวัดอุณหภูมิอินฟราเรด"
                              className="w-full bg-white border border-slate-200 px-3 py-2 rounded-xl"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-slate-600 block mb-1">จำนวนเหรียญที่ใช้ในการแลก</label>
                            <input
                              type="number"
                              required
                              value={newProdCoins}
                              onChange={(e) => setNewProdCoins(Number(e.target.value))}
                              placeholder="เช่น 300"
                              className="w-full bg-white border border-slate-200 px-3 py-2 rounded-xl font-mono font-bold"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-bold text-slate-600 block mb-1">
                            รูปภาพสินค้า (อัปโหลดรูปภาพ JPEG/PNG หรือระบุ URL)
                          </label>

                          <div className="space-y-2">
                            {/* File Upload Button */}
                            <label className="flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 border-dashed rounded-xl font-bold cursor-pointer transition-colors text-xs text-center">
                              <Upload className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>อัปโหลดรูปภาพ JPEG (.jpg, .jpeg) หรือ PNG (.png)</span>
                              <input
                                type="file"
                                accept="image/jpeg,image/png,image/jpg,.jpg,.jpeg,.png"
                                onChange={handleImageFileUpload}
                                className="hidden"
                              />
                            </label>

                            {/* URL Text Input */}
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={newProdImage}
                                onChange={(e) => setNewProdImage(e.target.value)}
                                placeholder="หรือวาง URL รูปภาพสินค้า (https://...)"
                                className="w-full bg-white border border-slate-200 px-3 py-2 rounded-xl font-mono text-[11px]"
                              />
                              {newProdImage && (
                                <button
                                  type="button"
                                  onClick={() => setNewProdImage('')}
                                  className="p-2 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl cursor-pointer shrink-0"
                                  title="ลบรูปภาพ"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              )}
                            </div>

                            {/* Image Preview Box */}
                            {newProdImage && (
                              <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                                <img
                                  src={newProdImage}
                                  alt="ตัวอย่างรูปภาพสินค้า"
                                  className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80';
                                  }}
                                />
                                <div className="text-[11px]">
                                  <p className="font-bold text-slate-800">ตัวอย่างรูปภาพสินค้า</p>
                                  <p className="text-[10px] text-emerald-600 font-medium mt-0.5">พร้อมใช้งานสำหรับรายการสินค้านี้</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="font-bold text-slate-600 block mb-1">รายละเอียดสินค้า</label>
                          <textarea
                            value={newProdDesc}
                            onChange={(e) => setNewProdDesc(e.target.value)}
                            rows={2}
                            placeholder="ระบุรายละเอียดเพิ่มเติม..."
                            className="w-full bg-white border border-slate-200 px-3 py-2 rounded-xl"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl shadow-xs cursor-pointer"
                        >
                          บันทึกการเพิ่มสินค้าใหม่
                        </button>
                      </form>
                    )}

                    {/* Product List Controls */}
                    <div className="space-y-2">
                      {products.map(p => (
                        <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-3">
                            <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                            <div>
                              <p className="font-bold text-slate-800">{p.name}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] font-mono text-emerald-700 font-bold">{p.coinCost} เหรียญ</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setProducts(products.map(item => item.id === p.id ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' } : item));
                              }}
                              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer ${
                                p.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                              }`}
                            >
                              {p.status === 'active' ? 'เปิดให้แลก' : 'ปิดการแลก'}
                            </button>

                            <button
                              onClick={() => handleDeleteProduct(p.id, p.name)}
                              className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg font-bold text-[11px] cursor-pointer flex items-center gap-1 transition-all"
                              title="ลบรายการสินค้านี้"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                              <span>ลบสินค้า</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs select-none">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <span className="text-xs font-bold text-slate-500 font-mono">หน้ารายละเอียดสินค้า</span>
              <button onClick={() => setSelectedProduct(null)} className="p-1 hover:bg-slate-200 rounded-full text-slate-500 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 overflow-y-auto max-h-[75vh] custom-scrollbar">
              {/* Main Image */}
              <div className="relative h-56 w-full rounded-2xl bg-slate-100 overflow-hidden border border-slate-200">
                <img
                  src={selectedProduct.images[selectedImageIdx] || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {selectedProduct.images.length > 1 && (
                <div className="flex gap-2">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                        selectedImageIdx === idx ? 'border-emerald-600 scale-105' : 'border-slate-200 opacity-60'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div>
                <h3 className="text-base font-black text-slate-800 leading-snug">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Price Display */}
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <span className="text-[10px] text-emerald-800 font-bold uppercase block">จำนวนเหรียญที่ใช้ในการแลก</span>
                <div className="flex items-center gap-1 text-emerald-700 font-black font-mono text-lg mt-0.5">
                  <Coins className="w-5 h-5 text-amber-500" />
                  <span>{selectedProduct.coinCost.toLocaleString()}</span>
                  <span className="text-xs font-sans font-normal text-slate-500">เหรียญ</span>
                </div>
              </div>

              {/* Coin Warning if Insufficient */}
              {currentCoins < selectedProduct.coinCost && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>
                    จำนวนเหรียญไม่เพียงพอ (คุณมี {currentCoins.toLocaleString()} เหรียญ / ต้องการ {selectedProduct.coinCost.toLocaleString()} เหรียญ)
                  </span>
                </div>
              )}
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-slate-400 font-bold block">เหรียญของคุณ</span>
                <span className="text-xs font-mono font-black text-amber-600">{currentCoins.toLocaleString()} เหรียญ</span>
              </div>

              <div className="flex gap-2">
                {userRole === 'staff' && (
                  <button
                    onClick={() => handleDeleteProduct(selectedProduct.id, selectedProduct.name)}
                    className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold rounded-xl text-xs cursor-pointer flex items-center gap-1 transition-all"
                    title="ลบรายการสินค้านี้"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                    <span>ลบสินค้า</span>
                  </button>
                )}

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs cursor-pointer"
                >
                  ยกเลิก
                </button>

                <button
                  onClick={() => handlePerformExchange(selectedProduct)}
                  disabled={currentCoins < selectedProduct.coinCost || selectedProduct.status !== 'active'}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-xl text-xs shadow-xs transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <Gift className="w-4 h-4 text-amber-300" />
                  <span>ยืนยันแลกสินค้า</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
