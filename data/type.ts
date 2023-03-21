export interface PersonalData {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

export interface AboutMe {
  title: string;
  body: string[];
}

export interface SkillProps {
  soft: {
    icon: string;
    text: string;
  }[];
  hard: {
    icon: string;
    text: string;
  }[];
}

export interface ProfessionalData {
  title: string;
  experiences: {
    role: string;
    description: string;
    current: boolean;
  }[];
}
