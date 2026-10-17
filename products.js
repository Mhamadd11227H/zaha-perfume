/* ═══════════════════════════════════════════════════════════════
   ZAHA — لیستا عطران  (تەنها ئەڤ فایلە دەستکاری بکە)
   ═══════════════════════════════════════════════════════════════

   بۆ زێدەکرنا عطرەکێ: یەک بلۆکا {...} کۆپی بکە، و ڤان خانەیان بگۆڕە.
   ئاگاداربە: پشتی هەر بلۆکەکێ کۆما (,) هەبیت، ژبلی یا دوماهیێ.

     cat      = بەش:  "men" (پیاوان)  یان  "women" (ئافرەتان)
     name     = ناڤێ عطری
     brand    = براند (دشێی بهێلی بەتال: "")
     size     = قەبارە، وەک "100ml"
     price    = نرخ، وەک "45,000 IQD"  (ئەگەر بەتال بیت: «نرخ ب پەیوەندیێ»)
     desc     = وەسفا عطری، دشێی درێژ بیت
     notes    = بۆنێن سەرەکی، وەک ["Oud","Vanilla","Musk"]  (دشێی بەتال بهێلی: [])
     img      = وێنەیا سەرەکی، وەک "images/sauvage.jpg"
     imgs     = وێنەیێن زێدە (ئارەزوومەندانە)، وەک ["images/sauvage-2.jpg"]
     tag      = نیشانەیەکا بچووک، وەک "New" یان "Best seller" (دشێی بەتال بیت: "")
     featured = true  ←  دێ د بەشا «هەلبژارتیێن مە» دا ل پەڕا سەرەکی دیار بیت  (یان false)
     stock    = true  ←  بەردەستە
                false ←  عطر دێ قفل بیت و بنڤیسیت «تەمام بوو»، و کەس نەشێت داخواز بکەت

   عطرەکێ بسڕمەوە؟ هەمان بلۆک بسڕەوە.
   وێنەیان بخە د ناڤ فۆڵدەرێ images دا (ناڤێ وێنەی بێ ڤالا و بێ جهێ بیت).
   ═══════════════════════════════════════════════════════════════ */

const WHATSAPP = "9649316163";

const PRODUCTS = [
  {cat:"men", name:"Perfume Name 1", brand:"Brand", size:"100ml", price:"",
   desc:"Short description of this perfume goes here: its character, feel and the best occasion to wear it.",
   notes:["Bergamot","Woody","Amber"], img:"images/men-1.jpg", imgs:[], tag:"New", featured:true, stock:true},

  {cat:"men", name:"Perfume Name 2", brand:"Brand", size:"100ml", price:"",
   desc:"Short description of this perfume goes here.",
   notes:["Oud","Spice"], img:"images/men-2.jpg", imgs:[], tag:"", featured:false, stock:false},

  {cat:"women", name:"Perfume Name 1", brand:"Brand", size:"100ml", price:"",
   desc:"Short description of this perfume goes here: its character, feel and the best occasion to wear it.",
   notes:["Rose","Vanilla","Musk"], img:"images/women-1.jpg", imgs:[], tag:"Best seller", featured:true, stock:true},

  {cat:"women", name:"Perfume Name 2", brand:"Brand", size:"100ml", price:"",
   desc:"Short description of this perfume goes here.",
   notes:["Jasmine","Peach"], img:"images/women-2.jpg", imgs:[], tag:"", featured:false, stock:true}
];
