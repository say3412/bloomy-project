'use client'
import dayjs from 'dayjs';
import styles from '@/components/dashboard/calendar/calendar.module.css'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useHabbitListContext from '@/hooks/useHabbitListContext';
import useTodoListContext from '@/hooks/useTodoListContext';

export default function CalendarPage() {
  const { contents: habbits } = useHabbitListContext();
  const { contents: todos } = useTodoListContext();

  // 완료된 habit만 날짜별로 개수 집계
  const groupedHabbit = habbits.reduce((acc, habbit) => {
    if (!habbit.done) {
      return acc;
    }

    const date = dayjs(habbit.createdAt).format('YYYY-MM-DD');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const habbitEvents = Object.entries(groupedHabbit).map(([date, count]) => ({
    title: `${count}`,
    date,
  }));

  // 완료된 todos만 날짜별로 개수 집계
  const groupedTodo = todos.reduce((acc, todo) => {
    if (!todo.done) {
      return acc;
    }

    const date = dayjs(todo.createdAt).format('YYYY-MM-DD');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const todoEvents = Object.entries(groupedTodo).map(([date, count]) => ({
    title: `${count}`,
    date,
  }));

  const events = [
    ...habbitEvents.map(e => ({ ...e, extendedProps: { type: 'habbit' } })),
    ...todoEvents.map(e => ({ ...e, extendedProps: { type: 'todo' } }))
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="auto"
      fixedWeekCount={false}
      dayMaxEventRows={true}
      events={events}
      eventBackgroundColor="transparent"
      eventBorderColor="transparent"

      eventContent={(eventInfo) => {
        const type = eventInfo.event.extendedProps.type;
        const isHabbit = type === 'habbit';

        return (
          <div
            className={styles.count}
            style={{ backgroundColor: isHabbit ? "#ea88b0" : "#9088ea" }}
          >
            {eventInfo.event.title}
          </div>
        );
      }}
    />
  );
}