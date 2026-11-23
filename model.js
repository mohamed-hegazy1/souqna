export const products=[
{id:'headphones',name:'سماعات موج اللاسلكية',category:'إلكترونيات',price:189900,color:'#c8c0e9',icon:'headphones',desc:'تصميم تجريبي لسماعات مريحة حول الأذن مع وسائد ناعمة.',spec:['اتصال لاسلكي تجريبي','تصميم قابل للطي','لون بنفسجي هادئ']},
{id:'watch',name:'ساعة مدار الذكية',category:'إلكترونيات',price:249900,color:'#b6d8c8',icon:'watch',desc:'شاشة واضحة وسوار مرن في نموذج ساعة للاستخدام اليومي.',spec:['سوار قابل للتعديل','شاشة مربعة','لون أخضر داكن']},
{id:'speaker',name:'مكبر صوت نغمة',category:'إلكترونيات',price:84900,color:'#f0c893',icon:'speaker',desc:'مكبر صوت صغير بتصميم بسيط يناسب المكتب.',spec:['هيكل أسطواني','أزرار علوية','لون رملي']},
{id:'bag',name:'حقيبة رحلة اليومية',category:'أزياء',price:79900,color:'#b8cedc',icon:'bag',desc:'حقيبة يومية بمساحة منظمة وتصميم خفيف.',spec:['جيب أمامي','حمالات قابلة للتعديل','لون أزرق']},
{id:'shoes',name:'حذاء خطوة الرياضي',category:'رياضة',price:129900,color:'#e7c6bd',icon:'shoe',desc:'نموذج حذاء رياضي بتصميم عصري ونعل سميك.',spec:['المقاس المعروض: 42 فقط','نعل مطاطي تجريبي','لون أبيض وبرتقالي']},
{id:'lamp',name:'مصباح ركن المكتبي',category:'المنزل',price:64900,color:'#d6dbad',icon:'lamp',desc:'إضاءة مكتبية ذات خطوط هندسية بسيطة.',spec:['ذراع ثابت','قاعدة دائرية','لون زيتوني']},
{id:'bottle',name:'زجاجة نشاط الحرارية',category:'رياضة',price:34900,color:'#becfe4',icon:'bottle',desc:'زجاجة بتصميم نظيف للاستخدام اليومي.',spec:['السعة النموذجية: 500 مل','غطاء لولبي','لون أزرق']},
{id:'chair',name:'كرسي مساحة المريح',category:'المنزل',price:329900,color:'#e1c4a7',icon:'chair',desc:'كرسي منزلي بلون دافئ وهيكل بسيط.',spec:['مقعد مبطن','أرجل خشبية','لون كراميل']},
{id:'keyboard',name:'لوحة مفاتيح سطر',category:'إلكترونيات',price:109900,color:'#c5d8d7',icon:'keyboard',desc:'نموذج لوحة مفاتيح صغيرة للمكتب العصري.',spec:['تخطيط مدمج','أزرار مرتفعة','لون أخضر فاتح']},
{id:'mug',name:'كوب صباح الخزفي',category:'المنزل',price:19900,color:'#e8c6cd',icon:'mug',desc:'كوب خزفي بسيط للحظات الهادئة.',spec:['سعة نموذجية 300 مل','مقبض واسع','لون وردي']},
{id:'hoodie',name:'هودي راحة القطني',category:'أزياء',price:89900,color:'#cfc9e4',icon:'hoodie',desc:'تصميم هودي يومي بقصة واسعة.',spec:['المقاس المعروض: L فقط','قصة واسعة','لون بنفسجي']},
{id:'mat',name:'حصيرة توازن الرياضية',category:'رياضة',price:45900,color:'#b7d4c6',icon:'mat',desc:'نموذج حصيرة للتمارين المنزلية بلون هادئ.',spec:['طول نموذجي 180 سم','قابلة للّف','لون نعناعي']}
];
export const money=n=>new Intl.NumberFormat('ar-EG',{style:'currency',currency:'EGP',maximumFractionDigits:0}).format(n/100);
export function filterProducts({query='',category='الكل',max=4000,sort='featured',favorites=null}){let a=products.filter(p=>(category==='الكل'||p.category===category)&&p.price<=Number(max)*100&&(!favorites||favorites.includes(p.id))&&(p.name+' '+p.category+' '+p.desc).includes(query.trim()));if(sort==='asc')a.sort((a,b)=>a.price-b.price);if(sort==='desc')a.sort((a,b)=>b.price-a.price);return a;}
export const total=cart=>products.reduce((s,p)=>s+p.price*(cart[p.id]||0),0);
export function restore(raw){try{const x=JSON.parse(raw);if(!x||typeof x!=='object'||Array.isArray(x))return {cart:{},favorites:[]};const cart={};for(const p of products)if(Number.isInteger(x.cart?.[p.id])&&x.cart[p.id]>0)cart[p.id]=Math.min(9,x.cart[p.id]);return {cart,favorites:products.filter(p=>x.favorites?.includes?.(p.id)).map(p=>p.id)};}catch{return {cart:{},favorites:[]};}}
