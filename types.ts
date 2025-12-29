import { LucideIcon } from "lucide-react";

export interface TechItem {
  name: string;
  logo: string;
  category: 'Infrastructure' | 'Model' | 'Framework' | 'Database';
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  techStack: string[];
  gridArea?: string; // For Bento layout
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}