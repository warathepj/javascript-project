export interface Project {
  id: number;
  thaiName: string;
  name: string;
  description: string;
  techStack: string[];
  price: number;
  learn?: string[];
}

export const projects: Project[] = [
  {
    id: 3,
    thaiName: "ระบบจัดการโครงการ",
    name: "Project Management System",
    description: "A comprehensive project management solution",
    techStack: ["React", "Node.js", "MongoDB"],
    price: 150000
  },
  {
    id: 2,
    thaiName: "ระบบร้านค้าออนไลน์",
    name: "E-commerce Platform",
    description: "Full-featured online shopping platform",
    techStack: ["React", "Express", "PostgreSQL"],
    price: 200000
  },
  {
    id: 1,
    thaiName: "แอพพลิเคชันแปลงค่าเงิน",
    name: "Currency Converter",
    description: "แปลงค่าเงิน จากสกุลเงินหนึ่งไปอีกสกุลเงิน",
    techStack: ["Javascript", "HTML", "CSS"],
    learn: ["โครงสร้าง HTML: ทำความเข้าใจวิธีการสร้างเอกสาร HTML ขั้นพื้นฐาน รวมถึงการใช้องค์ประกอบต่างๆ เช่น <div>, <h1>, <label>, <input>, <select> และ <button>", "การจัดรูปแบบ CSS: การเรียนรู้วิธีการจัดรูปแบบหน้าเว็บโดยใช้ CSS รวมถึงเทคนิคการจัดเค้าโครง (flexbox) การจัดวางตัวอักษร สี และการออกแบบแบบตอบสนองด้วย Media query", "พื้นฐานของ JavaScript: การได้รับประสบการณ์กับ JavaScript สำหรับการจัดการ DOM การจัดการเหตุการณ์ และการเรียกใช้ API แบบอะซิงโครนัสโดยใช้การดึงข้อมูล", "การผสานรวม API: ทำความเข้าใจวิธีการโต้ตอบกับ API ภายนอกเพื่อดึงข้อมูล (ในกรณีนี้คืออัตราแลกเปลี่ยนเงินตรา) และใช้ข้อมูลนั้นในแอปพลิเคชันของคุณ", "การจัดการข้อผิดพลาด: การเรียนรู้วิธีการจัดการข้อผิดพลาดอย่างดีใน JavaScript ทั้งสำหรับการเรียกใช้ API และการตรวจสอบอินพุตของผู้ใช้", "เนื้อหาแบบไดนามิก: การสร้างแอปพลิเคชันเว็บแบบไดนามิกที่อัปเดตเนื้อหาตามการโต้ตอบของผู้ใช้ เช่น การเลือกสกุลเงินและการแปลงจำนวนเงิน", "การออกแบบแบบตอบสนอง (Responsive Design): การนำหลักการออกแบบแบบตอบสนองมาใช้เพื่อให้แน่ใจว่าแอปพลิเคชันทำงานได้ดีบนหน้าจอที่มีขนาดต่างกัน", "โค้ดแบบโมดูลาร์: การเขียนโค้ดแบบโมดูลาร์และนำกลับมาใช้ใหม่ได้โดยแยกประเด็นต่างๆ (HTML สำหรับโครงสร้าง, CSS สำหรับการจัดรูปแบบ และ JavaScript สำหรับพฤติกรรม)", "โดยรวมแล้ว โปรเจ็กต์นี้ให้คำแนะนำอย่างครอบคลุมเกี่ยวกับการสร้างแอปพลิเคชันเว็บที่มีฟังก์ชัน โดยผสมผสานเทคโนโลยีส่วนหน้าและการใช้งาน API"],
    price: 30
  }
];