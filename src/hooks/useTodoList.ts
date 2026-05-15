import { useState, useEffect } from "react";
import mocktodos from '@/mock/todo.json'
import { type ContentItem } from '@/types/daytype';

export default function useTodoList() {
  // 1. 초기값 로드: 로컬스토리지에 데이터가 있으면 가져오고, 없으면 빈 배열
  const [contents, setContents] = useState<ContentItem[]>(() => {
    if (typeof window !== 'undefined') { // Next.js 환경 대응
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 2. 동기화: contents 상태가 변할 때마다 자동으로 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(contents));
  }, [contents]);

  // 추가
  const addTodo = (text: string) => {
    const newTodo: ContentItem = {
      id: crypto.randomUUID(),
      content: text,
      done: false,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setContents((prev) => [...prev, newTodo]);
  };

  // 상태 변경 done
  const checkDone = (id: string) => {
    setContents((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 삭제
  const removeTodo = (id: string) => {
    setContents((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 날짜로 찾기
  const findTodosByDate = (date: string) => {
    return contents.filter((todo) => todo.createdAt === date);
  };

  // 해당 날짜에 완료한(done) 일정 (달력에 표시용)
  const findDoneTodosByDate = (date: string) => {
    return contents.filter((todo) => todo.createdAt === date && todo.done);
  };

  return { contents, addTodo, checkDone, findTodosByDate, findDoneTodosByDate, removeTodo };
}