const QUESTIONS_8 = [

  // -------------------------------------------------------
  // PRÁCE
  // -------------------------------------------------------

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
    question: "Který vztah správně vyjadřuje práci stálou silou?",
    answers: ["W = F · s", "W = m · g", "W = F / s", "W = m · v"],
    correctIndex: 0
  },
  {
    id: "prace-3",
    topic: "prace",
    difficulty: 1,
    question: "Rozhodni, ve kterém případě se koná mechanická práce.",
    answers: [
      "Žák tlačí na nehybnou zeď a zeď se nepohybuje",
      "Žák drží činku v klidu nad hlavou",
      "Kniha leží v klidu na lavici",
      "Jeřáb zvedá břemeno stálou silou do výšky 5 m"
    ],
    correctIndex: 3
  },
  {
    id: "prace-4",
    topic: "prace",
    difficulty: 2,
    question: "Ve kterém z uvedených případů se mechanická práce nekoná?",
    answers: [
      "Chodec táhne sáně po cestě",
      "Žák zvedá činku nad hlavu",
      "Žák drží těžkou tašku v natažené ruce bez pohybu",
      "Motor táhne auto do kopce"
    ],
    correctIndex: 2
  },
  {
    id: "prace-5",
    topic: "prace",
    difficulty: 2,
    question: "Síla 50 N posune těleso o 4 metry. Jakou práci vykoná?",
    answers: ["200 J", "12,5 J", "54 J", "2 000 J"],
    correctIndex: 0
  },
  {
    id: "prace-6",
    topic: "prace",
    difficulty: 2,
    question: "V kterém případě je vykonána větší práce?",
    answers: [
      "Zvedáme stejnou bednu do výšky 2 m místo 1 m",
      "Zvedáme stejnou bednu do stejné výšky dvěma různě velkými silami",
      "Držíme bednu v klidu nad hlavou",
      "Posouváme bednu po vodorovné podlaze bez tření"
    ],
    correctIndex: 0
  },
  {
    id: "prace-7",
    topic: "prace",
    difficulty: 3,
    question: "Těleso se posouvá po vodorovné rovině třením s třecí silou 20 N na dráze 15 m. Jakou práci vykoná tření?",
    answers: ["–300 J", "0 J", "+300 J", "–1 300 J"],
    correctIndex: 0
  },

  // -------------------------------------------------------
  // KLADKY A KLADKOSTROJ
  // -------------------------------------------------------

  {
    id: "kladky-1",
    topic: "kladky",
    difficulty: 1,
    question: "K čemu se používá kladka pevná?",
    answers: [
      "Ke změně směru síly, velikost síly se ideálně nemění",
      "Ke zmenšení potřebné síly na polovinu",
      "Ke zvýšení třecí síly",
      "K měření rychlosti břemene"
    ],
    correctIndex: 0
  },
  {
    id: "kladky-2",
    topic: "kladky",
    difficulty: 1,
    question: "Jak se ideálně změní potřebná síla při použití jedné volné kladky?",
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
    question: "Při použití ideální volné kladky zvedáme břemeno o hmotnosti 200 kg. Jak velkou tažnou sílu přibližně potřebujeme? (g =̇ 10 m/s²)",
    answers: ["1 000 N", "2 000 N", "400 N", "100 N"],
    correctIndex: 0
  },
  {
    id: "kladky-4",
    topic: "kladky",
    difficulty: 2,
    question: "Jak se změní dráha, kterou musíš potáhnout volný konec lana u volné kladky oproti dráze zdvihu břemene?",
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
    difficulty: 2,
    question: "Z jakých kladek se skládá jednoduchý kladkostroj?",
    answers: [
      "Z jedné pevné a jedné volné kladky",
      "Ze dvou pevných kladek",
      "Ze dvou volných kladek",
      "Z jedné kladky a ozubeného kola"
    ],
    correctIndex: 0
  },
  {
    id: "kladky-6",
    topic: "kladky",
    difficulty: 3,
    question: "V kladkostroji je ideální převod takový, že tažná síla je čtyřikrát menší než tíha břemene. Kolik nosných úseků lana nese břemeno?",
    answers: ["4", "2", "3", "8"],
    correctIndex: 0
  },

  // -------------------------------------------------------
  // VÝKON
  // -------------------------------------------------------

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
    answers: ["P = W / t", "P = F · s", "P = m · g", "P = U · I"],
    correctIndex: 0
  },
  {
    id: "vykon-3",
    topic: "vykon",
    difficulty: 1,
    question: "Co označuje užitečná práce vykonaná za 1 sekundu?",
    answers: [
      "Užitečný výkon stroje",
      "Účinnost stroje",
      "Polohovou energii stroje",
      "Třenou sílu ve stroji"
    ],
    correctIndex: 0
  },
  {
    id: "vykon-4",
    topic: "vykon",
    difficulty: 2,
    question: "Motor vykoná práci 6 000 J za 30 s. Jaký má výkon?",
    answers: ["200 W", "180 W", "20 W", "5 000 W"],
    correctIndex: 0
  },
  {
    id: "vykon-5",
    topic: "vykon",
    difficulty: 3,
    question: "Žák o hmotnosti 60 kg vyběhne do výšky 12 m za 10 s. Jaký je jeho průměrný výkon? (g =̇ 10 m/s²)",
    answers: ["720 W", "600 W", "72 W", "7,2 kW"],
    correctIndex: 0
  },

  // -------------------------------------------------------
  // ÚČINNOST
  // -------------------------------------------------------

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
    question: "Který vztah vyjadřuje účinnost stroje?",
    answers: [
      "η = P / P₀",
      "η = P₀ / P",
      "η = P · t",
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
      "Účinnost může být větší než 100 %",
      "Účinnost nezávisí na ztrátách",
      "Účinnost se nemění"
    ],
    correctIndex: 0
  },

  // -------------------------------------------------------
  // POLOHOVÁ ENERGIE (Ep)
  // -------------------------------------------------------

  {
    id: "Ep-1",
    topic: "Ep",
    difficulty: 1,
    question: "Který vztah vyjadřuje polohovou energii tělesa?",
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
      "Polohová energia se nemění",
      "Polohová energie se stane nulovou"
    ],
    correctIndex: 0
  },
  {
    id: "Ep-3",
    topic: "Ep",
    difficulty: 2,
    question: "Kámen o hmotnosti 2 kg je ve výšce 5 m. Jakou má polohovou energii? (g =̇ 10 m/s²)",
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
    question: "Míč má ve výšce 4 m polohovou energii 80 J. Jaká je jeho hmotnost? (g =̇ 10 m/s²)",
    answers: ["2 kg", "0,5 kg", "4 kg", "8 kg"],
    correctIndex: 0
  },

  // -------------------------------------------------------
  // POHYBOVÁ ENERGIE (Ek)
  // -------------------------------------------------------

  {
    id: "Ek-1",
    topic: "Ek",
    difficulty: 1,
    question: "Který vztah vyjadřuje pohybovou energii tělesa?",
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
    question: "Které těleso má největší pohybovou energii, pokud se všechna pohybují rychlostí 50 km/h?",
    answers: [
      "Plně naložené nákladní auto jedoucí 50 km/h",
      "Osobní auto jedoucí 50 km/h",
      "Motocykl jedoucí 50 km/h",
      "Cyklista jedoucí 50 km/h"
    ],
    correctIndex: 0
  },
  {
    id: "Ek-3",
    topic: "Ek",
    difficulty: 2,
    question: "Které těleso má největší pohybovou energii?",
    answers: [
      "Auto o hmotnosti 1 000 kg jedoucí 90 km/h",
      "Auto o hmotnosti 1 500 kg jedoucí 50 km/h",
      "Motocykl o hmotnosti 200 kg jedoucí 50 km/h",
      "Cyklista o hmotnosti 80 kg jedoucí 30 km/h"
    ],
    correctIndex: 0
  },
  {
    id: "Ek-4",
    topic: "Ek",
    difficulty: 2,
    question: "Auto o hmotnosti 1 000 kg jede rychlostí 10 m/s. Jakou má přibližně pohybovou energii?",
    answers: ["50 000 J", "5 000 J", "10 000 J", "500 J"],
    correctIndex: 0
  },
  {
    id: "Ek-5",
    topic: "Ek",
    difficulty: 3,
    question: "Kámen o hmotnosti 0,5 kg má při dopadu pohybovou energii 80 J. Jaká je přibližně jeho rychlost?",
    answers: ["≈ 18 m/s", "≈ 40 m/s", "≈ 8 m/s", "≈ 4 m/s"],
    correctIndex: 0
  }

];
