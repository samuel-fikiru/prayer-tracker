export type Prayer = {
  id: string;
  title: string;
  prayerDescription?: string;
  whoItsFor?: string;
  category?: string;
  status: "answered" | "unanswered" | "ongoing";
  createdAt: string;
  updatedAt: string;
  answeredAt?: string;
  answeredDescription?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Category = {
  id: string;
  name: string;
  isDefault: boolean;
};
