export interface Project {
  id: number;
  thaiName: string;
  name: string;
  description: string;
  techStack: string[];
  price: number;
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
    price: 80000
  }
];