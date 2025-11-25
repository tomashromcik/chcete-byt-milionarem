// config-topics-8.js

// Konfigurace témat pro 8. ročník
// id = hodnota pole "topic" u otázky v QUESTIONS_8
// label = jak se téma jmenuje lidsky
// enabled = jestli se má téma aktuálně používat

const TOPIC_CONFIG_8 = {
  schoolYear: "2024/2025",
  topics: [
    { id: "prace",    label: "Práce",                     enabled: true  },
    { id: "kladky",   label: "Kladky a kladkostroj",      enabled: true  },
    { id: "vykon",    label: "Výkon",                     enabled: true  },
    { id: "ucinnost", label: "Účinnost",                  enabled: false },
    { id: "Ep",       label: "Polohová energie",          enabled: false },
    { id: "Ek",       label: "Pohybová energie",          enabled: false }
  ]
};

// Vrátí pole ID témat, která jsou povolená (enabled: true)
function getEnabledTopicsFor8() {
  return TOPIC_CONFIG_8.topics
    .filter(t => t.enabled)
    .map(t => t.id);
}
