import { useState, useEffect } from "react";
import { type ContentItem } from '@/types/daytype';

export default function useHabbitList() {
  // 1. 초기값 로드: 로컬스토리지에 데이터가 있으면 가져오고, 없으면 빈 배열
  const [contents, setContents] = useState<ContentItem[]>(() => {
    if (typeof window !== 'undefined') { // Next.js 환경 대응
      const saved = localStorage.getItem("habbits");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 2. 동기화: contents 상태가 변할 때마다 자동으로 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("habbits", JSON.stringify(contents));
  }, [contents]);

  // 추가
  const addHabbit = (text: string) => {
    const newTodo: ContentItem = {
      id: crypto.randomUUID(),
      content: text,
      done: false,
      createdAt: new Date().toISOString().split("T")[0], // 날짜의 20160505 까지만 저장, 시간 데이터가 필요없기 때문
    };

    setContents((prev) => [...prev, newTodo]);
  };

  // 상태 변경
  const checkDone = (id: string) => {
    setContents((prev) =>
      prev.map((habbit) =>
        habbit.id === id ? { ...habbit, done: !habbit.done } : habbit
      )
    );
  };

  // 삭제
  const removeHabbit = (id: string) => {
    setContents((prev) => prev.filter((habbit) => habbit.id !== id));
  };

  // 날짜로 찾기
  const findHabbitsByDate = (date: string) => {
    return contents.filter((habbit) => habbit.createdAt === date);
  };

  // 해당 날짜에 완료한(done) 습관 (달력에 표시용)
  const findDoneHabbitsByDate = (date: string) => {
    return contents.filter((habbit) => habbit.createdAt === date && habbit.done);
  };

  return { contents, addHabbit, checkDone, findHabbitsByDate, findDoneHabbitsByDate, removeHabbit };
}