type ContactIconType = {
  id: string;
  text: string;
  link: string;
};

export interface Project {
  id: string;
  title: string;
  category?: string;
  year?: string;
  description: string;
  imageUrl: string;
  code?: string;
  link?: string;
  stack: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechItem {
  name: string;
  category: "Core" | "Framework" | "Ferramentas";
}
