export interface Sommelier {
  id: string;
  nome: string;
  cognome: string;
  titolo: string;
  localita: string;
  disponibile: boolean;
  specializzazioni: string[];
  certificazioni: string[];
  bio: string;
  email: string;
  telefono: string;
  immagine: string;
  cantineSponsorizzate: string[];
}

export interface Cantina {
  id: string;
  nome: string;
  regione: string;
  denominazione: string;
  filosofia: string;
  storia: string;
  sitoWeb: string;
  email: string;
  telefono: string;
  immagine: string;
  logo: string;
  tags: string[];
}

export interface Evento {
  id: string;
  titolo: string;
  data: string;
  luogo: string;
  cantinaId: string;
  cantinaNome: string;
  descrizione: string;
}

export const sommelier: Sommelier[] = [
  {
    id: "marco-bianchi",
    nome: "Marco",
    cognome: "Bianchi",
    titolo: "Head Sommelier & Wine Director",
    localita: "Milano, Italia",
    disponibile: true,
    specializzazioni: ["Borgogna", "Fine Dining"],
    certificazioni: ["WSET Diploma", "Master Sommelier"],
    bio: "Con 15 anni di esperienza in ristoranti 3 stelle Michelin, Marco ha sviluppato una profonda conoscenza dei vini francesi e italiani. Attualmente dirige il programma vini di uno dei ristoranti più rinomati di Milano.",
    email: "marco.bianchi@email.com",
    telefono: "+39 333 1234567",
    immagine: "",
    cantineSponsorizzate: ["tenuta-ghibellino", "castello-barolo"],
  },
  {
    id: "giulia-verdi",
    nome: "Giulia",
    cognome: "Verdi",
    titolo: "Consulente Vini Naturali",
    localita: "Berlino, Germania",
    disponibile: true,
    specializzazioni: ["Vini Naturali", "Marketing"],
    certificazioni: ["WSET Level 3", "AIS Sommelier"],
    bio: "Giulia si è specializzata nei vini naturali e biodinamici, lavorando con produttori di tutta Europa. Offre consulenze per ristoranti e wine bar che vogliono introdurre selezioni naturali.",
    email: "giulia.verdi@email.com",
    telefono: "+49 170 9876543",
    immagine: "",
    cantineSponsorizzate: ["vigna-sospesa"],
  },
  {
    id: "davide-rossi",
    nome: "Davide",
    cognome: "Rossi",
    titolo: "Wine Educator & WSET Certified",
    localita: "Roma, Italia",
    disponibile: false,
    specializzazioni: ["WSET", "Formazione"],
    certificazioni: ["WSET Diploma", "FISAR"],
    bio: "Davide è un educatore del vino con oltre 10 anni di esperienza nella formazione professionale. Tiene corsi WSET e seminari di degustazione in tutta Italia.",
    email: "davide.rossi@email.com",
    telefono: "+39 347 5551234",
    immagine: "",
    cantineSponsorizzate: ["castello-barolo"],
  },
  {
    id: "elena-martini",
    nome: "Elena",
    cognome: "Martini",
    titolo: "Sommelier @ Ristorante Stellato",
    localita: "Firenze, Italia",
    disponibile: true,
    specializzazioni: ["Toscana", "Champagne"],
    certificazioni: ["AIS Sommelier Professionista", "Court of Master Sommeliers"],
    bio: "Elena lavora come sommelier in un ristorante stellato Michelin a Firenze. La sua passione per i vini toscani e gli Champagne la rende un punto di riferimento nel settore.",
    email: "elena.martini@email.com",
    telefono: "+39 055 6667788",
    immagine: "",
    cantineSponsorizzate: ["tenuta-ghibellino"],
  },
  {
    id: "paolo-ferri",
    nome: "Paolo",
    cognome: "Ferri",
    titolo: "Importatore Vini Francesi",
    localita: "Torino, Italia",
    disponibile: true,
    specializzazioni: ["Bordeaux", "Borgogna"],
    certificazioni: ["WSET Level 4"],
    bio: "Paolo importa e distribuisce vini francesi pregiati in Italia. Con una rete di oltre 200 ristoranti clienti, seleziona personalmente ogni bottiglia durante i suoi viaggi in Francia.",
    email: "paolo.ferri@email.com",
    telefono: "+39 011 9998877",
    immagine: "",
    cantineSponsorizzate: [],
  },
  {
    id: "chiara-russo",
    nome: "Chiara",
    cognome: "Russo",
    titolo: "New World Wine Specialist",
    localita: "Napoli, Italia",
    disponibile: true,
    specializzazioni: ["Vini del Nuovo Mondo", "Piemonte"],
    certificazioni: ["WSET Diploma", "AIS"],
    bio: "Chiara è specializzata nei vini del Nuovo Mondo, con particolare attenzione ai produttori emergenti di Australia, Nuova Zelanda e Sud America.",
    email: "chiara.russo@email.com",
    telefono: "+39 081 2223344",
    immagine: "",
    cantineSponsorizzate: ["agricola-le-rocce"],
  },
];

export const cantine: Cantina[] = [
  {
    id: "tenuta-ghibellino",
    nome: "Tenuta Il Ghibellino",
    regione: "Toscana",
    denominazione: "Chianti Classico DOCG",
    filosofia: "Tradizionale",
    storia: "Dal 1880, produciamo Sangiovese nel cuore del Chianti Classico. La nostra famiglia ha tramandato la passione per il vino per cinque generazioni, mantenendo metodi di vinificazione tradizionali con un tocco di modernità.",
    sitoWeb: "tenutaghibellino.it",
    email: "info@tenutaghibellino.it",
    telefono: "+39 055 1234567",
    immagine: "",
    logo: "",
    tags: ["Toscana", "Sangiovese"],
  },
  {
    id: "vigna-sospesa",
    nome: "La Vigna Sospesa",
    regione: "Sicilia",
    denominazione: "Etna DOC",
    filosofia: "Biologico",
    storia: "Fondata nel 2005 sulle pendici dell'Etna, La Vigna Sospesa produce vini biologici da uve autoctone coltivate su terreni vulcanici a oltre 800 metri di altitudine.",
    sitoWeb: "lavignasospesa.it",
    email: "info@lavignasospesa.it",
    telefono: "+39 095 7654321",
    immagine: "",
    logo: "",
    tags: ["Etna", "Biologico"],
  },
  {
    id: "agricola-le-rocce",
    nome: "Azienda Agricola Le Rocce",
    regione: "Valle d'Aosta",
    denominazione: "Valle d'Aosta DOC",
    filosofia: "Biodinamico",
    storia: "In Valle d'Aosta, a oltre 1000 metri di altitudine, coltiviamo vitigni autoctoni come Petit Rouge e Fumin seguendo i principi della biodinamica.",
    sitoWeb: "lerocce.it",
    email: "info@lerocce.it",
    telefono: "+39 0165 998877",
    immagine: "",
    logo: "",
    tags: ["Autoctoni", "Valle d'Aosta"],
  },
  {
    id: "castello-barolo",
    nome: "Castello di Barolo",
    regione: "Piemonte",
    denominazione: "Barolo DOCG",
    filosofia: "Tradizionale",
    storia: "Il Castello di Barolo è uno dei produttori storici delle Langhe. Dal 1850 produciamo Barolo e Barbaresco con uve Nebbiolo coltivate nei migliori cru del territorio.",
    sitoWeb: "castellodibarolo.it",
    email: "info@castellodibarolo.it",
    telefono: "+39 0173 556677",
    immagine: "",
    logo: "",
    tags: ["Barolo", "Nebbiolo"],
  },
  {
    id: "masseria-puglia",
    nome: "Masseria del Sole",
    regione: "Puglia",
    denominazione: "Primitivo di Manduria DOC",
    filosofia: "Sostenibile",
    storia: "Nel cuore del Salento, la Masseria del Sole produce Primitivo di Manduria da vigneti ultracentenari, con un approccio sostenibile alla viticoltura.",
    sitoWeb: "masseriadelsole.it",
    email: "info@masseriadelsole.it",
    telefono: "+39 099 4455667",
    immagine: "",
    logo: "",
    tags: ["Primitivo", "Puglia"],
  },
  {
    id: "cantina-veneto",
    nome: "Ca' del Prosecco",
    regione: "Veneto",
    denominazione: "Prosecco Superiore DOCG",
    filosofia: "Innovativo",
    storia: "Nelle colline di Valdobbiadene, produciamo Prosecco Superiore DOCG con metodi innovativi che rispettano la tradizione secolare della spumantizzazione.",
    sitoWeb: "cadelprosecco.it",
    email: "info@cadelprosecco.it",
    telefono: "+39 0423 778899",
    immagine: "",
    logo: "",
    tags: ["Prosecco", "Glera"],
  },
];

export const eventi: Evento[] = [
  {
    id: "1",
    titolo: "Degustazione Chianti Classico Riserva",
    data: "2026-05-15",
    luogo: "Tenuta Il Ghibellino, Toscana",
    cantinaId: "tenuta-ghibellino",
    cantinaNome: "Tenuta Il Ghibellino",
    descrizione: "Una serata dedicata alla degustazione delle migliori annate di Chianti Classico Riserva, accompagnata da piatti della tradizione toscana.",
  },
  {
    id: "2",
    titolo: "Masterclass Barolo: Terroir e Tradizione",
    data: "2026-06-02",
    luogo: "Castello di Barolo, Piemonte",
    cantinaId: "castello-barolo",
    cantinaNome: "Castello di Barolo",
    descrizione: "Un percorso guidato attraverso i diversi cru del Barolo, per scoprire come il terroir influenza il carattere del Nebbiolo.",
  },
  {
    id: "3",
    titolo: "Vendemmia sull'Etna",
    data: "2026-09-20",
    luogo: "La Vigna Sospesa, Sicilia",
    cantinaId: "vigna-sospesa",
    cantinaNome: "La Vigna Sospesa",
    descrizione: "Partecipa alla vendemmia sulle pendici dell'Etna. Un'esperienza unica tra vigneti vulcanici e panorami mozzafiato.",
  },
  {
    id: "4",
    titolo: "Serata Prosecco sotto le Stelle",
    data: "2026-07-10",
    luogo: "Ca' del Prosecco, Veneto",
    cantinaId: "cantina-veneto",
    cantinaNome: "Ca' del Prosecco",
    descrizione: "Una serata estiva nelle colline di Valdobbiadene con degustazione di Prosecco Superiore DOCG e musica dal vivo.",
  },
  {
    id: "5",
    titolo: "Festival del Primitivo",
    data: "2026-08-25",
    luogo: "Masseria del Sole, Puglia",
    cantinaId: "masseria-puglia",
    cantinaNome: "Masseria del Sole",
    descrizione: "Due giorni dedicati al Primitivo di Manduria con degustazioni, laboratori e cena gourmet sotto gli ulivi.",
  },
];
