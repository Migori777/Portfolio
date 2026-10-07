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