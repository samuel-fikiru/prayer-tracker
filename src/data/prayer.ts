import { Prayer } from "@/types";

const mockPrayers: Prayer[] = [
  {
    id: "00",
    title: "help me grow",
    createdAt: "2026-09-15",
    updatedAt: "2026-09-15",
    status: "unanswered",
  },
  {
    id: "01",
    title: "finance",
    createdAt: "2026-09-15",
    updatedAt: "2026-09-15",
    status: "ongoing",
    category: "family",
    prayerDescription: "asking God for financial support",
  },
  {
    id: "02",
    title: "gratitude",
    createdAt: "2026-09-15",
    updatedAt: "2026-09-15",
    status: "answered",
    category: "family",
    prayerDescription:
      "okay i am grateful that you God helped me to develop my connection with the family",
    whoItsFor: "myself",
    answeredAt: "2026-10-15",
    answeredDescription:
      "i actually don't remember how it was answered but was amazing",
  },
];
