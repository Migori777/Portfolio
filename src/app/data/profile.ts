export interface Language {
  name: string;
  tone?: 'swift' | 'kotlin';
}

export interface Profile {
  role: string;
  headline: string;
  intro: string;
  languages: Language[];
}

export const PROFILE: Profile = {
  role: 'Sviluppatore mobile · iOS e Android',
  headline: "Scrivo il codice nativo che sta sotto l'interfaccia.",
  intro:
    "Mi chiamo Andrea Migori. In Domotica Labs sviluppo plugin e integrazioni in Swift e Kotlin: la parte dell'app che parla con il telefono.",
  languages: [
    { name: 'Swift', tone: 'swift' },
    { name: 'Kotlin', tone: 'kotlin' },
    { name: 'Java' },
  ],
};

export interface WorkArea {
  title: string;
  text: string;
}

export const WORK_AREAS: WorkArea[] = [
  {
    title: 'Plugin Cordova',
    text: "Scrivo in Swift e Kotlin i plugin che un'app Cordova richiama per usare le funzioni del telefono.",
  },
  {
    title: 'Due piattaforme, un comportamento',
    text: 'Ogni plugin ha una parte per iOS e una per Android, e deve rispondere allo stesso modo su entrambe.',
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    period: '2024 — oggi',
    title: 'Sviluppatore mobile',
    place: 'Domotica Labs · Fossano',
  },
  {
    period: '2019 — 2024',
    title: 'Diploma in informatica',
    place: 'IIS «G. Vallauri» · Fossano',
  },
];
