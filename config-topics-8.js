const TOPIC_CONFIG_8 = {
  schoolYear: "2024/2025",
  topics: [
    { id: "prace", label: "Práce", enabled: true },
    { id: "kladky", label: "Kladky a kladkostroj", enabled: true },
    { id: "vykon", label: "Výkon", enabled: true },
    { id: "ucinnost", label: "Účinnost", enabled: true },
    { id: "Ep", label: "Polohová energie", enabled: true },
    { id: "Ek", label: "Pohybová energie", enabled: true }
  ]
};

function getEnabledTopicsFor8() {
  return TOPIC_CONFIG_8.topics
    .filter(t => t.enabled)
    .map(t => t.id);
}
