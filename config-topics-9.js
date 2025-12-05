const TOPIC_CONFIG_9 = {
  schoolYear: "2024/2025",
  topics: [
    { id: "magnetismus",            label: "Magnetismus",                    enabled: true },
    { id: "elektromagneticke_jevy", label: "Elektromagnetické jevy",         enabled: true },
    { id: "stridavy_proud",         label: "Střídavý proud a transformátor", enabled: true }
  ]
};

function getEnabledTopicsFor9() {
  return TOPIC_CONFIG_9.topics
    .filter(t => t.enabled)
    .map(t => t.id);
}
