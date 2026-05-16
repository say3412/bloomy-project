export interface ContentItem {
  id: string;
  content: string;
  done: boolean;
  createdAt: string;
}

export interface TodoContent extends ContentItem {}

export interface HabitContent extends ContentItem {
  startDate: string;
  endDate: string;
  doneDates: string[]; // ["2026-05-16", "2026-05-17", "2026-05-19"] 완료한 날짜들의 배열
}