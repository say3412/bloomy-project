import { useState, useEffect } from "react";
import { type HabitContent } from '@/types/daytype';

export default function useHabbitList() {
  // 1. 초기값 로드: 로컬스토리지에 데이터가 있으면 가져오고, 없으면 빈 배열
  const [contents, setContents] = useState<HabitContent[]>(() => {
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
  const addHabbit = (text: string, startDate?: string, endDate?: string) => {
    const dateStr = new Date().toISOString().split("T")[0];
    const newHabbit: HabitContent = {
      id: crypto.randomUUID(),
      content: text,
      done: false,
      createdAt: dateStr, // 날짜의 20160505 까지만 저장, 시간 데이터가 필요없기 때문
      startDate: startDate || dateStr,
      endDate: endDate || dateStr,
      doneDates: [],
    };

    setContents((prev) => [...prev, newHabbit]);
  };

  // 상태 변경
  // const checkDone = (id: string) => {
  //   setContents((prev) =>
  //     prev.map((habbit) =>
  //       habbit.id === id ? { ...habbit, done: !habbit.done } : habbit
  //     )
  //   );
  // };
  const checkDone = (id: string) => {
    const todayStr = new Date().toISOString().split("T")[0];

    setContents((prev) =>
      prev.map((habbit) => {
        if (habbit.id !== id) return habbit;
        
        const currentDoneDates = habbit.doneDates || []; // 안전장치: doneDates 배열이 없을 경우를 대비해 기본 배열 보장
        const isAlreadyDoneToday = currentDoneDates.includes(todayStr); // 오늘 날짜가 이미 완료 배열에 들어있는지 확인
        let updatedDoneDates: string[];

        if (isAlreadyDoneToday) {
          // 1. 이미 오늘 완료했다면, 배열에서 오늘 날짜를 제거 (체크 해제)
          updatedDoneDates = currentDoneDates.filter((date) => date !== todayStr);
        } else {
          // 2. 오늘 아직 완료 전이라면, 배열에 오늘 날짜를 추가 (체크 등록)
          updatedDoneDates = [...currentDoneDates, todayStr];
        }

        return {
          ...habbit,
          doneDates: updatedDoneDates,
          // 현재 리스트 컴포넌트(CardContentItem)의 취소선 애니메이션 및 
          // 체크박스 활성화 상태와 완벽히 호환되도록 done 값도 함께 토글
          done: !isAlreadyDoneToday,
        };
      })
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