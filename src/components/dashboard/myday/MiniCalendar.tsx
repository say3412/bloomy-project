import React from 'react';
import Calendar from 'react-calendar';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '@/styles/mini-calendar.css';
import { TodoContent, HabitContent } from '@/types/daytype';

// dayjs의 기간 비교 플러그인 활성화
dayjs.extend(isBetween);

interface MiniCalendarProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  contents: (TodoContent | HabitContent)[];
  isHabit?: boolean; // 습관 달력인지 일정 달력인지 구분하는 플래그
}

export function MiniCalendar({ value, onChange, contents, isHabit = false }: MiniCalendarProps) {

  // [습관 모드 전용] 상위 최대 3개의 습관만 추출하여 라인(레일) 배정
  const activeHabits = isHabit ? (contents as HabitContent[]).slice(0, 3) : [];

  // 1. [습관 모드] 타일별 스트릭 라인 클래스 동적 부여
  const getTileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month' || !isHabit) return '';

    const current = dayjs(date);
    const classes: string[] = [];

    // 🔥 중요: 함수가 실행되는 시점의 contents에서 최신 3개를 안전하게 가져옵니다.
    const activeHabits = (contents as HabitContent[]).slice(0, 3);

    activeHabits.forEach((habit, index) => {
      if (!habit.startDate || !habit.endDate) return;

      const todayStr = current.format('YYYY-MM-DD');
      const startStr = dayjs(habit.startDate).format('YYYY-MM-DD');
      const endStr = dayjs(habit.endDate).format('YYYY-MM-DD');

      const start = dayjs(startStr);
      const end = dayjs(endStr);

      const isWithinRange = current.isBetween(start, end, 'day', '[]');

      if (isWithinRange) {
        const isStart = todayStr === startStr;
        const isEnd = todayStr === endStr;

        if (isStart && isEnd) classes.push(`habit-${index}-single`);
        else if (isStart) classes.push(`habit-${index}-start`);
        else if (isEnd) classes.push(`habit-${index}-end`);
        else classes.push(`habit-${index}-middle`);
      }
    });

    return classes.join(' ');
  };

  // 2. [일정 모드] 해당 날짜에 완료된(done: true) 일정이 있는지 확인
  const getTodoCompletionStatus = (date: Date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    const hasDoneTodo = contents.some(
      (t) => t.done && dayjs(t.createdAt).format('YYYY-MM-DD') === formattedDate
    );
    return { hasDoneTodo };
  };

  return (
    <div className="bloomy-calendar-container">
      <Calendar
        key={`${isHabit ? 'habit' : 'todo'}-${contents.length}`}
        onChange={(date) => onChange(dayjs(date as Date))}
        value={value.toDate()}
        calendarType="gregory"
        formatDay={(locale, date) => date.getDate().toString()}
        prevLabel={<ChevronLeftIcon />}
        nextLabel={<ChevronRightIcon />}
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ date }) => dayjs(date).format('YYYY. MM')}

        // 습관 모드일 때만 라인을 그리기 위한 클래스 부여
        tileClassName={getTileClassName}

        // 일정 모드일 때만 날짜 밑에 완료 닷(Dot) 배치
        tileContent={({ date, view }) => {
          if (view === 'month' && !isHabit) {
            const { hasDoneTodo } = getTodoCompletionStatus(date);
            return (
              <div className="dot-wrapper">
                {hasDoneTodo && <div className="dot todo-done-dot" />}
              </div>
            );
          }
          return null;
        }}
      />
    </div>
  );
}