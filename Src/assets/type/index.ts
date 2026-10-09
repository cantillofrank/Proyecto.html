export interface Stat {
  label: string;
  value: string;
}

export interface Educacion {
  periodo: string;
  titulo: string;
  institucion: string;
  descripcion: string;
}

export interface Project {
  id: number;
  titulo: string;
  materia: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
  githubUrl: string;
}

export interface Contacto {
  email: string;
  github: string;
  linkedin?: string;
}

export interface PersonalData {
  nombre: string;
  carrera: string;
  universidad: string;
  semestre: string;
  presentacion: string;
  stats: Stat[];
  habilidades: string[];
  educacion: Educacion[];
  proyectos: Project[];
  contacto: Contacto;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps';
}

export interface NavItem {
  id: number;
  label: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string; 
  label: string;
}

export type Theme = 'light' | 'dark';
