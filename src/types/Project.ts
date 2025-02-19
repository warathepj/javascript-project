export interface Project {
  id: number;
  thaiName: string;
  name: string;
  description: string;
  techStack: string[];
  price: number;
  learn?: string[];
  images?: string[];
  function?: string[];
}

export const projects: Project[] = [
  {
    id: 2,
    thaiName: "แดชบอร์ดสกุลเงินดิจิทัล",
    name: "Cryptocurrency Dashboard",
    description: "นี่คือแดชบอร์ดราคาสกุลเงินดิจิทัลแบบเรียลไทม์ที่ติดตามและแสดงข้อมูลสำหรับสกุลเงินดิจิทัลหลัก 5 สกุล ได้แก่ Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Solana (SOL) และ Ripple (XRP)",
    techStack: ["Javascript", "HTML", "CSS"],
    function: ["ดึงข้อมูลราคาแบบเรียลไทม์จาก API ของ CoinGecko", "อนุญาตให้ผู้ใช้กำหนดราคาเป้าหมายสำหรับสกุลเงินดิจิทัลแต่ละสกุล", "การตอบสนองทางภาพผ่านการเข้ารหัสสี: สีเขียวเมื่อราคาปัจจุบันอยู่เหนือเป้าหมาย สีแดงเมื่อต่ำกว่า", "คงราคาเป้าหมายที่ผู้ใช้กำหนดไว้โดยใช้ localStorage", "การออกแบบที่ตอบสนองสำหรับทั้งมุมมองเดสก์ท็อปและมือถือ", "โครงการนี้ใช้ JavaScript, HTML และ CSS แบบดั้งเดิม ทำให้เป็นแอปพลิเคชันฝั่งไคลเอ็นต์เท่านั้นที่สามารถเรียกใช้โดยตรงในเว็บเบราว์เซอร์โดยไม่ต้องใช้เซิร์ฟเวอร์แบ็กเอนด์"],
    learn: ["ประสบการณ์จริงกับ API ของ CoinGecko สำหรับข้อมูลสกุลเงินดิจิทัลแบบเรียลไทม์", "การจัดการการตอบสนองของ API และกรณีข้อผิดพลาด", "การทำงานกับ API สาธารณะโดยไม่ต้องตรวจสอบสิทธิ์", "การนำที่เก็บข้อมูลถาวรมาใช้โดยใช้ที่เก็บข้อมูลในเครื่อง(local storage)", "การจัดการค่ากำหนดของผู้ใช้ (ราคาเหรียญ) ในทุกเซสชัน", "การอัปเดตข้อมูลราคาแบบไดนามิก", "การจัดการเหตุการณ์สำหรับปุ่มและอินพุต", "การเปลี่ยนรหัสสีตามราคาที่กำหนดไว้ (สีเขียวสำหรับค่าที่สูงขึ้น สีแดงสำหรับค่าที่ต่ำกว่า)", "การใช้การไล่ระดับสีและการเปลี่ยนผ่าน CSS เพื่อความน่าสนใจทางภาพ", "การใช้เอฟเฟกต์โฮเวอร์และแอนิเมชัน", "การจัดโครงสร้างโค้ด JavaScript ด้วยฟังก์ชันที่นำมาใช้ซ้ำได้", "การจัดการส่วนประกอบที่คล้ายกันหลายรายการ (การ์ดราคา)", "การใช้คุณลักษณะ ES6+ ที่ทันสมัย ​​เช่น การแยกโครงสร้างและเทมเพลตลิเทอรัล", "การใช้งานที่เป็นมิตรกับมือถือ", "การใช้ CSS media query", "การจัดการขนาดและระยะห่างของแบบอักษรระหว่างอุปกรณ์ต่างๆ", "การจัดรูปแบบตัวเลขด้วยเครื่องหมายจุลภาคเพื่อให้สามารถอ่านได้", "การจัดการการเปรียบเทียบราคาและการกำหนดรูปแบบตามเงื่อนไข", "การทำงานกับการอัปเดตข้อมูลแบบเรียลไทม์", "การจัดการการอัปเดต DOM อย่างมีประสิทธิภาพ", "การจัดการบัตรราคาหลายใบพร้อมกัน (price card)", "โครงการนี้ทำหน้าที่เป็นแบบฝึกหัดในทางปฏิบัติในการรวมเทคโนโลยีส่วนหน้า (HTML, CSS, JavaScript) เข้ากับข้อมูลในโลกแห่งความเป็นจริงเพื่อสร้างแดชบอร์ดแบบโต้ตอบและใช้งานง่าย"],
    images: ["dashboard/1.jpg"],
    price: 30
  },
  {
    id: 1,
    thaiName: "แอพพลิเคชันแปลงค่าเงิน",
    name: "Currency Converter",
    description: "แปลงค่าเงิน จากสกุลเงินหนึ่งไปอีกสกุลเงิน",
    techStack: ["Javascript", "HTML", "CSS"],
    learn: ["โครงสร้าง HTML: ทำความเข้าใจวิธีการสร้างเอกสาร HTML ขั้นพื้นฐาน รวมถึงการใช้องค์ประกอบต่างๆ เช่น <div>, <h1>, <label>, <input>, <select> และ <button>", "การจัดรูปแบบ CSS: การเรียนรู้วิธีการจัดรูปแบบหน้าเว็บโดยใช้ CSS รวมถึงเทคนิคการจัดเค้าโครง (flexbox) การจัดวางตัวอักษร สี และการออกแบบแบบตอบสนองด้วย Media query", "พื้นฐานของ JavaScript: การได้รับประสบการณ์กับ JavaScript สำหรับการจัดการ DOM การจัดการเหตุการณ์ และการเรียกใช้ API แบบอะซิงโครนัสโดยใช้การดึงข้อมูล", "การผสานรวม API: ทำความเข้าใจวิธีการโต้ตอบกับ API ภายนอกเพื่อดึงข้อมูล (ในกรณีนี้คืออัตราแลกเปลี่ยนเงินตรา) และใช้ข้อมูลนั้นในแอปพลิเคชันของคุณ", "การจัดการข้อผิดพลาด: การเรียนรู้วิธีการจัดการข้อผิดพลาดอย่างดีใน JavaScript ทั้งสำหรับการเรียกใช้ API และการตรวจสอบอินพุตของผู้ใช้", "เนื้อหาแบบไดนามิก: การสร้างแอปพลิเคชันเว็บแบบไดนามิกที่อัปเดตเนื้อหาตามการโต้ตอบของผู้ใช้ เช่น การเลือกสกุลเงินและการแปลงจำนวนเงิน", "การออกแบบแบบตอบสนอง (Responsive Design): การนำหลักการออกแบบแบบตอบสนองมาใช้เพื่อให้แน่ใจว่าแอปพลิเคชันทำงานได้ดีบนหน้าจอที่มีขนาดต่างกัน", "โค้ดแบบโมดูลาร์: การเขียนโค้ดแบบโมดูลาร์และนำกลับมาใช้ใหม่ได้โดยแยกประเด็นต่างๆ (HTML สำหรับโครงสร้าง, CSS สำหรับการจัดรูปแบบ และ JavaScript สำหรับพฤติกรรม)", "โดยรวมแล้ว โปรเจ็กต์นี้ให้คำแนะนำอย่างครอบคลุมเกี่ยวกับการสร้างแอปพลิเคชันเว็บที่มีฟังก์ชัน โดยผสมผสานเทคโนโลยีส่วนหน้าและการใช้งาน API"],
    images: ["currency-converter/1.jpg"],
    price: 30
  }
];