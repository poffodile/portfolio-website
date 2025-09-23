export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "ai-todo",
    title: "AI-Powered To-Do List",
    description:
      "A MERN stack app with Natural Language Processing that lets users add tasks in plain English and converts them into structured todos.",
    tech: ["MongoDB", "Express", "React", "Node.js", "NLP"],
    image: "/images/projects/ai-todo.png",
    demo: "https://ai-todo-demo.vercel.app",
    repo: "https://github.com/precious/ai-todo",
  },
  {
    id: "inventory-app",
    title: "Inventory Management System",
    description:
      "Angular app for managing stock in/out, with dashboards, low stock alerts, JSON/CSV export, and modular features.",
    tech: ["Angular", "TypeScript", "Tailwind", "Node.js"],
    image: "/images/projects/inventory.png",
    repo: "https://github.com/precious/inventory",
  },
  {
    id: "maintenance-portal",
    title: "Tenant Maintenance Request Portal",
    description:
      "Full-stack Angular app integrated with Arduino DHT11 sensors. Automatically logs requests when temperature/humidity thresholds are breached.",
    tech: ["Angular", "Arduino", "Node.js", "Socket.io"],
    image: "/images/projects/maintenance.png",
  },
  {
    id: "vet-surgery",
    title: "Veterinary Surgery Management System",
    description:
      "Java console app with booking, pet management, and staff features. Built using SOLID principles and tested with JUnit.",
    tech: ["Java", "JUnit", "OOP", "UML"],
    image: "/images/projects/vet-surgery.png",
  },
  {
    id: "shiftcalc",
    title: "ShiftCalc PWA",
    description:
      "Offline-first PWA for shift workers. Features OCR, charts, and IndexedDB storage. Built with Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind", "Dexie", "Tesseract.js"],
    image: "/images/projects/shiftcalc.png",
  },
];
