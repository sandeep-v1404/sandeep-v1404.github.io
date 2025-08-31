export interface Content {
  header: Header;
  hero: Hero;
  about: About;
  projects: Projects;
  contact: Contact;
  footer: Footer;
}

export interface About {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface Contact {
  title: string;
  description: string;
  info: Info;
}

export interface Info {
  email: string;
  phone: string;
  location: string;
}

export interface Footer {
  name: string;
  title: string;
}

export interface Header {
  logo: string;
  menuItems: MenuItem[];
  socialLinks: SocialLinks;
  projectLink: string;
}

export interface MenuItem {
  title: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Hero {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface Projects {
  title: string;
  description: string;
  items: Item[];
}

export interface Item {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}
