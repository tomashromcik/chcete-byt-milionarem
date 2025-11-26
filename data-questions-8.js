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

// nové otázky – obtížnost 1
{
  id: "prace-1-new-1",
  topic: "prace",
  difficulty: 1,
  question: "Která veličina popisuje, jak velká síla působí po určitou dráhu?",
  answers: ["Práce", "Energie", "Výkon", "Tlak"],
  correctIndex: 0
},
{
  id: "prace-1-new-2",
  topic: "prace",
  difficulty: 1,
  question: "Jakou práci vykonáme, pokud nepůsobí žádná síla?",
  answers: ["0 J", "1 J", "Záleží na dráze", "Záleží na hmotnosti"],
  correctIndex: 0
},
{
  id: "prace-1-new-3",
  topic: "prace",
  difficulty: 1,
  question: "Kdy se koná práce?",
  answers: [
    "Když působí síla a těleso se pohybuje",
    "Když jen působí síla",
    "Když se těleso pohybuje bez síly",
    "Když těleso stojí"
  ],
  correctIndex: 0
},

// původní obtížnost 2
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

// nové otázky – obtížnost 2
{
  id: "prace-2-new-1",
  topic: "prace",
  difficulty: 2,
  question: "Síla 30 N působí na těleso a posune jej o 3 m. Jaká práce se vykoná?",
  answers: ["90 J", "33 J", "10 J", "300 J"],
  correctIndex: 0
},
{
  id: "prace-2-new-2",
  topic: "prace",
  difficulty: 2,
  question: "Ve kterém případě vykonáme větší práci?",
  answers: [
    "Zvedneme těžší bednu do stejné výšky",
    "Zvedneme lehčí bednu do stejné výšky",
    "Držíme bednu v klidu nad hlavou",
    "Tlačíme bednu silou, ale nepohne se"
  ],
  correctIndex: 0
},
{
  id: "prace-2-new-3",
  topic: "prace",
  difficulty: 2,
  question: "Jak se změní práce, pokud se dráha působení síly zdvojnásobí a síla se nemění?",
  answers: [
    "Práce se zdvojnásobí",
    "Práce zůstane stejná",
    "Práce se zmenší na polovinu",
    "Práce se ztrojnásobí"
  ],
  correctIndex: 0
},

// původní obtížnost 3
{
  id: "prace-7",
  topic: "prace",
  difficulty: 3,
  question: "Těleso se posouvá po vodorovné rovině třením s třecí silou 20 N na dráze 15 m. Jakou práci vykoná tření?",
  answers: ["–300 J", "0 J", "+300 J", "–1 300 J"],
  correctIndex: 0
},

// nové otázky – obtížnost 3
{
  id: "prace-3-new-1",
  topic: "prace",
  difficulty: 3,
  question: "Síla 30 N působí na těleso, ale pouze složka 20 N je ve směru pohybu. Těleso se posune o 5 m. Jaká práce se vykoná?",
  answers: ["100 J", "150 J", "600 J", "30 J"],
  correctIndex: 0
},
{
  id: "prace-3-new-2",
  topic: "prace",
  difficulty: 3,
  question: "Jak se změní práce, pokud působíme stejnou silou na dvojnásobnou dráhu?",
  answers: [
    "Práce se zdvojnásobí",
    "Práce se nezmění",
    "Práce bude poloviční",
    "Práce klesne na nulu"
  ],
  correctIndex: 0
},
{
  id: "prace-3-new-3",
  topic: "prace",
  difficulty: 3,
  question: "Na těleso působí síla 40 N pod úhlem tak, že ve směru pohybu působí složka 25 N. Dráha pohybu je 6 m. Jaká práce se vykoná?",
  answers: ["150 J", "240 J", "100 J", "65 J"],
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

// ---------------------------
// Nové otázky – obtížnost 1
// ---------------------------

{
  id: "kladky-1-new-1",
  topic: "kladky",
  difficulty: 1,
  question: "K čemu slouží volná kladka?",
  answers: [
    "Ke zmenšení potřebné síly, ale za cenu větší dráhy lana",
    "Ke změně směru síly, velikost síly se nemění",
    "Ke zvětšení tření",
    "K měření rychlosti břemene"
  ],
  correctIndex: 0
},
{
  id: "kladky-1-new-2",
  topic: "kladky",
  difficulty: 1,
  question: "Které tvrzení o kladce pevné a volné je správné?",
  answers: [
    "Pevná kladka mění směr síly, volná kladka zmenšuje potřebnou sílu",
    "Pevná i volná kladka vždy zmenšují potřebnou sílu",
    "Volná kladka mění směr síly, pevná kladka zmenšuje sílu",
    "Ani pevná ani volná kladka nepomáhá při zvedání břemen"
  ],
  correctIndex: 0
},
{
  id: "kladky-1-new-3",
  topic: "kladky",
  difficulty: 1,
  question: "Ve kterém z uvedených případů je nejvýhodnější použít kladku?",
  answers: [
    "Když chceme zvednout těžké břemeno do výšky",
    "Když chceme jen měřit hmotnost tělesa",
    "Když chceme těleso pouze zahřát",
    "Když chceme snížit hmotnost tělesa"
  ],
  correctIndex: 0
},

// ---------------------------
// Nové otázky – obtížnost 2
// ---------------------------

{
  id: "kladky-2-new-1",
  topic: "kladky",
  difficulty: 2,
  question: "Břemeno je zavěšeno na volné kladce tak, že jej nesou dva nosné úseky lana. Jak se změní potřebná tažná síla oproti tíze břemene (ideálně)?",
  answers: [
    "Tažná síla je přibližně poloviční",
    "Tažná síla je přibližně dvojnásobná",
    "Tažná síla je stejná jako tíha břemene",
    "Tažná síla je čtyřikrát menší"
  ],
  correctIndex: 0
},
{
  id: "kladky-2-new-2",
  topic: "kladky",
  difficulty: 2,
  question: "Pomocí ideální volné kladky zvedáme břemeno o tíze 600 N. Jak velkou tažnou sílu přibližně potřebujeme?",
  answers: ["300 N", "600 N", "150 N", "1 200 N"],
  correctIndex: 0
},
{
  id: "kladky-2-new-3",
  topic: "kladky",
  difficulty: 2,
  question: "Při použití volné kladky se břemeno zvedne o 1 m. Jak dlouhou dráhu přibližně potáhneme volný konec lana (ideálně)?",
  answers: ["2 m", "1 m", "0,5 m", "4 m"],
  correctIndex: 0
},

// ---------------------------
// Nové otázky – obtížnost 3
// ---------------------------

{
  id: "kladky-3-new-1",
  topic: "kladky",
  difficulty: 3,
  question: "Jednoduchý kladkostroj se skládá z jedné pevné a jedné volné kladky. Břemeno má tíhu 800 N. Jak velkou tažnou sílu přibližně potřebujeme při ideálním kladkostroji?",
  answers: ["400 N", "800 N", "200 N", "100 N"],
  correctIndex: 0
},
{
  id: "kladky-3-new-2",
  topic: "kladky",
  difficulty: 3,
  question: "V ideálním kladkostroji je tažná síla čtyřikrát menší než tíha břemene. Kolik nosných úseků lana nese břemeno?",
  answers: ["4", "2", "3", "8"],
  correctIndex: 0
},
{
  id: "kladky-3-new-3",
  topic: "kladky",
  difficulty: 3,
  question: "V ideálním kladkostroji břemeno nesou čtyři nosné úseky lana. O kolik se přibližně zvedne břemeno, pokud potáhneme volný konec lana o 2 m?",
  answers: ["0,5 m", "1 m", "2 m", "4 m"],
  correctIndex: 0
},


 // -------------------------------------------------------
// VÝKON – původní + NOVÉ otázky
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

// --- NOVÉ OBTÍŽNOST 1 ---
{
  id: "vykon-new-1",
  topic: "vykon",
  difficulty: 1,
  question: "Které tvrzení nejlépe vystihuje výkon?",
  answers: [
    "Kolik práce se vykoná za 1 sekundu.",
    "Jak velkou silou působí těleso.",
    "Kolik energie má těleso v určité výšce.",
    "Jak dlouho trvá pohyb."
  ],
  correctIndex: 0
},
{
  id: "vykon-new-2",
  topic: "vykon",
  difficulty: 1,
  question: "Jak se změní výkon, pokud vykonáme stejnou práci za kratší čas?",
  answers: [
    "Výkon je větší",
    "Výkon se zmenší",
    "Výkon je stejný",
    "Výkon je nulový"
  ],
  correctIndex: 0
},
{
  id: "vykon-new-3",
  topic: "vykon",
  difficulty: 1,
  question: "Které zařízení má obvykle největší výkon?",
  answers: [
    "Motor osobního auta",
    "Stolní lampa",
    "Kalkulačka",
    "Baterka do kapsy"
  ],
  correctIndex: 0
},

// -------------------------------------------------------
//  OBTÍŽNOST 2
// -------------------------------------------------------

{
  id: "vykon-4",
  topic: "vykon",
  difficulty: 2,
  question: "Motor vykoná práci 6 000 J za 30 s. Jaký má výkon?",
  answers: ["200 W", "180 W", "20 W", "5 000 W"],
  correctIndex: 0
},

// --- NOVÉ OBTÍŽNOST 2 ---
{
  id: "vykon-new-4",
  topic: "vykon",
  difficulty: 2,
  question: "Žák vykoná práci 900 J za 3 sekundy. Jaký je jeho výkon?",
  answers: ["300 W", "90 W", "3 000 W", "30 W"],
  correctIndex: 0
},
{
  id: "vykon-new-5",
  topic: "vykon",
  difficulty: 2,
  question: "Kdy je výkon větší?",
  answers: [
    "Když uděláme stejnou práci za kratší čas",
    "Když uděláme stejnou práci za delší čas",
    "Když práci vůbec nekonáme",
    "Když práci konáme bez použití síly"
  ],
  correctIndex: 0
},
{
  id: "vykon-new-6",
  topic: "vykon",
  difficulty: 2,
  question: "Motor zvedne břemeno o práci 5 000 J za 20 sekund. Jaký je výkon motoru?",
  answers: ["250 W", "100 W", "5 000 W", "2 500 W"],
  correctIndex: 0
},

// -------------------------------------------------------
//  OBTÍŽNOST 3
// -------------------------------------------------------

{
  id: "vykon-5",
  topic: "vykon",
  difficulty: 3,
  question: "Žák o hmotnosti 60 kg vyběhne do výšky 12 m za 10 s. Jaký je jeho průměrný výkon? (g =̇ 10 m/s²)",
  answers: ["720 W", "600 W", "72 W", "7,2 kW"],
  correctIndex: 0
},

// --- NOVÉ OBTÍŽNOST 3 ---
{
  id: "vykon-new-7",
  topic: "vykon",
  difficulty: 3,
  question: "Žák o hmotnosti 50 kg vyběhne do výšky 8 m za 5 s. Jaký je jeho přibližný výkon? (g =̇ 10 m/s²)",
  answers: ["800 W", "500 W", "80 W", "50 W"],
  correctIndex: 0
},
{
  id: "vykon-new-8",
  topic: "vykon",
  difficulty: 3,
  question: "Dva žáci vykonají stejnou práci 1 200 J, ale první za 4 s a druhý za 6 s. Které tvrzení je správné?",
  answers: [
    "První má větší výkon",
    "Druhý má větší výkon",
    "Mají stejný výkon",
    "Nelze určit"
  ],
  correctIndex: 0
},
{
  id: "vykon-new-9",
  topic: "vykon",
  difficulty: 3,
  question: "Motor má výkon 500 W. Kolik práce vykoná za 10 sekund?",
  answers: ["5 000 J", "500 J", "50 J", "50 000 J"],
  correctIndex: 0
},


  // -------------------------------------------------------
// ÚČINNOST — NOVÉ OTÁZKY + staré
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


// ---------- Obtížnost 1 ----------
{
  id: "ucinnost-n1",
  topic: "ucinnost",
  difficulty: 1,
  question: "Co vyjadřuje účinnost stroje?",
  answers: [
    "Kolik procent dodané energie se přemění na užitečnou",
    "Jak velký výkon má stroj",
    "Jak rychle stroj pracuje",
    "Jak velkou silou stroj působí"
  ],
  correctIndex: 0
},
{
  id: "ucinnost-n2",
  topic: "ucinnost",
  difficulty: 1,
  question: "Jak se značí účinnost ve fyzice?",
  answers: ["η", "α", "λ", "ω"],
  correctIndex: 0
},
{
  id: "ucinnost-n3",
  topic: "ucinnost",
  difficulty: 1,
  question: "Jakou hodnotu může mít účinnost reálného stroje?",
  answers: [
    "Méně než 100 %",
    "Přesně 100 %",
    "Více než 200 %",
    "Jakoukoli hodnotu"
  ],
  correctIndex: 0
},

// ---------- Obtížnost 2 ----------
{
  id: "ucinnost-n4",
  topic: "ucinnost",
  difficulty: 2,
  question: "Stroj má užitečný výkon 400 W a celkový výkon dodaný P₀ je 500 W. Jaká je účinnost stroje?",
  answers: ["80 %", "50 %", "125 %", "8 %"],
  correctIndex: 0
},
{
  id: "ucinnost-n5",
  topic: "ucinnost",
  difficulty: 2,
  question: "Co znamená účinnost 50 %?",
  answers: [
    "Polovina dodané energie se přemění na užitečnou",
    "Stroj pracuje na poloviční otáčky",
    "Stroj spotřebuje polovinu elektrické energie",
    "Vzniká poloviční tření"
  ],
  correctIndex: 0
},
{
  id: "ucinnost-n6",
  topic: "ucinnost",
  difficulty: 2,
  question: "Dodaná energie je 800 J, užitečná práce 600 J. Jaká je účinnost?",
  answers: ["75 %", "60 %", "25 %", "133 %"],
  correctIndex: 0
},

// ---------- Obtížnost 3 ----------
{
  id: "ucinnost-n7",
  topic: "ucinnost",
  difficulty: 3,
  question: "Stroj má účinnost 70 %. Dodali jsme mu 2 000 J energie. Kolik užitečné práce vykoná?",
  answers: ["1 400 J", "700 J", "2 700 J", "600 J"],
  correctIndex: 0
},
{
  id: "ucinnost-n8",
  topic: "ucinnost",
  difficulty: 3,
  question: "Motor má výkon 900 W, ale jeho užitečný výkon je pouze 600 W. Jaká je účinnost motoru?",
  answers: ["67 %", "150 %", "33 %", "6,7 %"],
  correctIndex: 0
},
{
  id: "ucinnost-n9",
  topic: "ucinnost",
  difficulty: 3,
  question: "Dva stroje mají stejnou užitečnou práci, ale první má menší účinnost. Co to znamená?",
  answers: [
    "Potřebuje více dodané energie",
    "Má větší tření",
    "Pracuje rychleji",
    "Pracuje pomaleji"
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
// POLOHOVÁ ENERGIE (Ep) — NOVÉ OTÁZKY
// -------------------------------------------------------

// ---------- Obtížnost 1 ----------
{
  id: "Ep-n1",
  topic: "Ep",
  difficulty: 1,
  question: "Který z následujících předmětů má největší polohovou energii?",
  answers: [
    "Kniha položená na polici 2 m nad zemí",
    "Kniha položená na stole 1 m nad zemí",
    "Kniha položená na podlaze",
    "Kniha položená 50 cm nad zemí"
  ],
  correctIndex: 0
},
{
  id: "Ep-n2",
  topic: "Ep",
  difficulty: 1,
  question: "Jak se změní polohová energie, když těleso spustíme níže k zemi?",
  answers: [
    "Polohová energie klesne",
    "Polohová energie stoupne",
    "Polohová energie zůstane stejná",
    "Polohová energie se změní na zvukovou energii"
  ],
  correctIndex: 0
},
{
  id: "Ep-n3",
  topic: "Ep",
  difficulty: 1,
  question: "Co potřebujeme znát k výpočtu polohové energie?",
  answers: [
    "Hmotnost, výšku a tíhové zrychlení g",
    "Objem a hustotu tělesa",
    "Elektrické napětí a proud",
    "Rychlost tělesa"
  ],
  correctIndex: 0
},

// ---------- Obtížnost 2 ----------
{
  id: "Ep-n4",
  topic: "Ep",
  difficulty: 2,
  question: "Těleso o hmotnosti 3 kg je ve výšce 4 m. Jaká je jeho polohová energie? (g =̇ 10 m/s²)",
  answers: ["120 J", "40 J", "300 J", "12 J"],
  correctIndex: 0
},
{
  id: "Ep-n5",
  topic: "Ep",
  difficulty: 2,
  question: "Dvě tělesa mají stejnou hmotnost. Které má větší polohovou energii?",
  answers: [
    "Těleso položené ve výšce 5 m",
    "Těleso položené ve výšce 2 m",
    "Těleso položené na zemi",
    "Těleso položené 10 cm nad zemí"
  ],
  correctIndex: 0
},
{
  id: "Ep-n6",
  topic: "Ep",
  difficulty: 2,
  question: "Polohová energie tělesa je 150 J, výška je 5 m. Jaká je hmotnost tělesa? (g =̇ 10 m/s²)",
  answers: ["3 kg", "15 kg", "30 kg", "0,3 kg"],
  correctIndex: 0
},

// ---------- Obtížnost 3 ----------
{
  id: "Ep-n7",
  topic: "Ep",
  difficulty: 3,
  question: "Dvě tělesa mají různé hmotnosti i výšky. Které má největší polohovou energii?",
  answers: [
    "Těleso 4 kg ve výšce 12 m",
    "Těleso 8 kg ve výšce 5 m",
    "Těleso 2 kg ve výšce 20 m",
    "Těleso 1 kg ve výšce 25 m"
  ],
  correctIndex: 0
},
{
  id: "Ep-n8",
  topic: "Ep",
  difficulty: 3,
  question: "Věž má výšku 30 m. Jakou polohovou energii má turista o hmotnosti 70 kg na jejím vrcholu? (g =̇ 10 m/s²)",
  answers: ["21 000 J", "2 100 J", "210 J", "7 000 J"],
  correctIndex: 0
},
{
  id: "Ep-n9",
  topic: "Ep",
  difficulty: 3,
  question: "Těleso má polohovou energii 600 J ve výšce 15 m. Jaká je jeho hmotnost? (g =̇ 10 m/s²)",
  answers: ["4 kg", "40 kg", "0,4 kg", "6 kg"],
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
