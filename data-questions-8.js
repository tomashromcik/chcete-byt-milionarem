// data-questions-8.js

// topic:
//  - "prace"
//  - "kladky"
//  - "vykon"
//  - "ucinnost"
//  - "Ep" (polohová energie)
//  - "Ek" (pohybová energie)

const QUESTIONS_8 = [
  // --- PRÁCE (WORK) ---

  {
    id: "prace-1",
    topic: "prace",
    difficulty: 1,
    question: "Jaká je základní jednotka práce v soustavě SI?",
    answers: ["Joul (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
    correctIndex: 0
  },
  {
    id: "prace-2",
    topic: "prace",
    difficulty: 1,
    question: "Který vztah správně vyjadřuje práci konstantní silou?",
    answers: ["W = F · s", "W = m · g", "W = F / s", "W = m · v"],
    correctIndex: 0
  },
  {
    id: "prace-3",
    topic: "prace",
    difficulty: 2,
    question: "Síla 50 N posune těleso rovnoměrně o 4 metry. Jakou práci vykoná?",
    answers: ["200 J", "12,5 J", "54 J", "2 000 J"],
    correctIndex: 0
  },
  {
    id: "prace-4",
    topic: "prace",
    difficulty: 2,
    question: "Kdy mechanická práce není konána?",
    answers: [
      "Když se těleso nepohybuje",
      "Když je síla kolmá na směr pohybu",
      "Když je síla nulová",
      "Ve všech těchto případech"
    ],
    correctIndex: 3
  },
  {
    id: "prace-5",
    topic: "prace",
    difficulty: 3,
    question: "Těleso se posouvá po vodorovné rovině třením s třecí silou 20 N na dráze 15 m. Jakou práci vykoná tření?",
    answers: ["–300 J", "0 J", "+300 J", "–1 300 J"],
    correctIndex: 0
  },

  // --- KLADKY (PULLEYS) ---

  {
    id: "kladky-1",
    topic: "kladky",
    difficulty: 1,
    question: "K čemu slouží pohyblivá kladka v jednoduchém stroji?",
    answers: [
      "Ke změně směru síly bez změny velikosti",
      "Ke zmenšení potřebné síly při zvedání břemene",
      "K měření rychlosti tělesa",
      "Ke zvýšení tření"
    ],
    correctIndex: 1
  },
  {
    id: "kladky-2",
    topic: "kladky",
    difficulty: 1,
    question: "Jak se ideálně změní potřebná síla při použití jedné pohyblivé kladky (zanedbáme tření)?",
    answers: [
      "Síla je dvakrát menší",
      "Síla je dvakrát větší",
      "Síla se nezmění",
      "Síla je čtyřikrát menší"
    ],
    correctIndex: 0
  },
  {
    id: "kladky-3",
    topic: "kladky",
    difficulty: 2,
    question: "Při použití ideální pohyblivé kladky zvedáme břemeno o hmotnosti 200 kg. Jak velkou tažnou sílu přibližně potřebujeme (g ≈ 10 m/s²)?",
    answers: ["1 000 N", "2 000 N", "400 N", "100 N"],
    correctIndex: 0
  },
  {
    id: "kladky-4",
    topic: "kladky",
    difficulty: 2,
    question: "Jak se změní dráha, kterou musíš potáhnout volný konec lana u pohyblivé kladky oproti dráze zdvihu břemene (ideálně)?",
    answers: [
      "Je dvakrát delší",
      "Je dvakrát kratší",
      "Je stejná",
      "Je čtyřikrát delší"
    ],
    correctIndex: 0
  },
  {
    id: "kladky-5",
    topic: "kladky",
    difficulty: 3,
    question: "V kladkostroji je ideální převod takový, že tažná síla je čtyřikrát menší než tíha břemene. Kolik nosných úseků lana nese břemeno?",
    answers: ["2", "3", "4", "8"],
    correctIndex: 2
  },

  // --- VÝKON (POWER) ---

  {
    id: "vykon-1",
    topic: "vykon",
    difficulty: 1,
    question: "Jaká je základní jednotka výkonu v soustavě SI?",
    answers: ["Watt (W)", "Joul (J)", "Newton (N)", "Volt (V)"],
    correctIndex: 0
  },
  {
    id: "vykon-2",
    topic: "vykon",
    difficulty: 1,
    question: "Který vztah správně vyjadřuje výkon?",
    answers: ["P = W / t", "P = F · s", "P = m · g", "P = U · I · t"],
    correctIndex: 0
  },
  {
    id: "vykon-3",
    topic: "vykon",
    difficulty: 2,
    question: "Motor vykoná práci 6 000 J za 30 s. Jaký má výkon?",
    answers: ["200 W", "180 W", "20 W", "5 000 W"],
    correctIndex: 0
  },
  {
    id: "vykon-4",
    topic: "vykon",
    difficulty: 2,
    question: "Dva žáci vyběhli stejné schodiště. Který má větší výkon?",
    answers: [
      "Ten, který má větší hmotnost",
      "Ten, který běžel rychleji",
      "Ten, který měl menší hmotnost",
      "Oba mají vždy stejný výkon"
    ],
    correctIndex: 1
  },
  {
    id: "vykon-5",
    topic: "vykon",
    difficulty: 3,
    question: "Žák o hmotnosti 60 kg vyběhne do 4. patra do výšky 12 m za 10 s (g ≈ 10 m/s²). Jaký je jeho průměrný výkon?",
    answers: ["720 W", "600 W", "72 W", "7,2 kW"],
    correctIndex: 0
  },

  // --- ÚČINNOST (EFFICIENCY) ---

  {
    id: "ucinnost-1",
    topic: "ucinnost",
    difficulty: 1,
    question: "Jak označujeme účinnost stroje?",
    answers: ["η (éta)", "μ (mí)", "λ (lambda)", "α (alfa)"],
    correctIndex: 0
  },
  {
    id: "ucinnost-2",
    topic: "ucinnost",
    difficulty: 1,
    question: "Který vztah vyjadřuje účinnost?",
    answers: [
      "η = W už / W dod",
      "η = W dod / W už",
      "η = P / t",
      "η = m · g · h"
    ],
    correctIndex: 0
  },
  {
    id: "ucinnost-3",
    topic: "ucinnost",
    difficulty: 2,
    question: "Stroj má účinnost 80 %. Co to znamená?",
    answers: [
      "80 % dodané energie se přemění na užitečnou",
      "Stroj spotřebuje o 80 % méně energie",
      "Ztrátová energie je 80 % dodané energie",
      "Stroj pracuje jen 80 % času"
    ],
    correctIndex: 0
  },
  {
    id: "ucinnost-4",
    topic: "ucinnost",
    difficulty: 2,
    question: "Stroji dodáme energii 1 000 J, užitečná práce je 600 J. Jaká je účinnost stroje?",
    answers: ["60 %", "40 %", "166 %", "6 %"],
    correctIndex: 0
  },
  {
    id: "ucinnost-5",
    topic: "ucinnost",
    difficulty: 3,
    question: "Které tvrzení o účinnosti je správné?",
    answers: [
      "Účinnost reálného stroje je vždy menší než 100 %",
      "Účinnost může být větší než 100 %, pokud je stroj velmi kvalitní",
      "Účinnost nezávisí na ztrátách",
      "Účinnost se nemění se zatížením stroje"
    ],
    correctIndex: 0
  },

  // --- POLOHOVÁ ENERGIE (EP) ---

  {
    id: "Ep-1",
    topic: "Ep",
    difficulty: 1,
    question: "Který vztah vyjadřuje polohovou (potenciální) energii tělesa u zemského povrchu?",
    answers: [
      "Ep = m · g · h",
      "Ep = 1/2 · m · v²",
      "Ep = F · s",
      "Ep = m / g"
    ],
    correctIndex: 0
  },
  {
    id: "Ep-2",
    topic: "Ep",
    difficulty: 1,
    question: "Jak se změní polohová energie tělesa, pokud zvýšíme jeho výšku nad zemí?",
    answers: [
      "Polohová energie roste",
      "Polohová energie klesá",
      "Polohá energie se nemění",
      "Polohová energie se stane zápornou"
    ],
    correctIndex: 0
  },
  {
    id: "Ep-3",
    topic: "Ep",
    difficulty: 2,
    question: "Kámen o hmotnosti 2 kg je ve výšce 5 m nad zemí (g ≈ 10 m/s²). Jakou má polohovou energii?",
    answers: ["100 J", "10 J", "25 J", "1 000 J"],
    correctIndex: 0
  },
  {
    id: "Ep-4",
    topic: "Ep",
    difficulty: 2,
    question: "Jak se změní polohová energie tělesa, pokud jeho hmotnost zdvojnásobíme a výška zůstane stejná?",
    answers: [
      "Ep se zdvojnásobí",
      "Ep se ztrojnásobí",
      "Ep zůstane stejná",
      "Ep klesne na polovinu"
    ],
    correctIndex: 0
  },
  {
    id: "Ep-5",
    topic: "Ep",
    difficulty: 3,
    question: "Míč ve výšce 4 m má polohovou energii 80 J. Jaká je jeho hmotnost? (g ≈ 10 m/s²)",
    answers: ["2 kg", "0,5 kg", "4 kg", "8 kg"],
    correctIndex: 0
  },

  // --- POHYBOVÁ ENERGIE (EK) ---

  {
    id: "Ek-1",
    topic: "Ek",
    difficulty: 1,
    question: "Který vztah vyjadřuje pohybovou (kinetickou) energii tělesa?",
    answers: [
      "Ek = 1/2 · m · v²",
      "Ek = m · g · h",
      "Ek = F · s",
      "Ek = P · t"
    ],
    correctIndex: 0
  },
  {
    id: "Ek-2",
    topic: "Ek",
    difficulty: 1,
    question: "Jak se změní pohybová energie tělesa, pokud zdvojnásobíme jeho rychlost?",
    answers: [
      "Ek se čtyřikrát zvětší",
      "Ek se zdvojnásobí",
      "Ek se ztrojnásobí",
      "Ek se nezmění"
    ],
    correctIndex: 0
  },
  {
    id: "Ek-3",
    topic: "Ek",
    difficulty: 2,
    question: "Auto o hmotnosti 1 000 kg jede rychlostí 10 m/s. Jakou má přibližně pohybovou energii?",
    answers: ["50 000 J", "5 000 J", "10 000 J", "500 J"],
    correctIndex: 0
  },
  {
    id: "Ek-4",
    topic: "Ek",
    difficulty: 2,
    question: "Jak se změní pohybová energie tělesa, pokud jeho hmotnost zůstane stejná, ale rychlost klesne na polovinu?",
    answers: [
      "Ek klesne na čtvrtinu",
      "Ek klesne na polovinu",
      "Ek se nezmění",
      "Ek klesne na osminu"
    ],
    correctIndex: 0
  },
  {
    id: "Ek-5",
    topic: "Ek",
    difficulty: 3,
    question: "Kámen o hmotnosti 0,5 kg má při dopadu pohybovou energii 80 J. Jaká je přibližně jeho rychlost? (g ≈ 10 m/s²)",
    answers: ["≈ 18 m/s", "≈ 40 m/s", "≈ 8 m/s", "≈ 4 m/s"],
    correctIndex: 0
  }
];

// aby byl přístupný i z konzole / jiných skriptů
if (typeof window !== "undefined") {
  window.QUESTIONS_8 = QUESTIONS_8;
}
