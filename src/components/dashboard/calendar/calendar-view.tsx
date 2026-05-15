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
    ...todoEvents.map(e => ({ ...e, extendedProps: { type: 'todo' } })),
    ...habbitEvents.map(e => ({ ...e, extendedProps: { type: 'habbit' } })),
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: ''
      }}
      buttonText={{ today: 'Today' }}
      buttonIcons={{ prev: 'chevron-left', next: 'chevron-right' }}
      height="auto"
      fixedWeekCount={false}
      dayMaxEventRows={true}
      events={events}
      eventBackgroundColor="transparent"
      eventBorderColor="transparent"
      eventContent={(eventInfo) => {
        const isHabbit = eventInfo.event.extendedProps.type === 'habbit';

        // 새 팔레트 적용: Primary(Habbit) & Secondary(Todo)
        const themeColor = isHabbit ? {
          bg: 'rgba(228, 123, 166, 0.12)', // primary.main의 투명 버전
          text: '#E47BA6',                 // primary.main
          border: '#E47BA6'
        } : {
          bg: 'rgba(216, 180, 226, 0.15)', // secondary.main의 투명 버전
          text: '#B189BE',                 // secondary.dark (가독성을 위해 한 톤 낮춤)
          border: '#D8B4E2'                // secondary.main
        };

        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px 8px',
            margin: '1px 2px',
            borderRadius: '6px',
            backgroundColor: themeColor.bg,
            borderLeft: `3px solid ${themeColor.border}`,
            transition: 'all 0.2s ease',
          }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: '800',
              color: themeColor.text,
              opacity: 0.8
            }}>
              {isHabbit ? 'H' : 'T'}
            </span>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              color: '#313749', // 팔레트의 text.primary
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {eventInfo.event.title}
            </span>
          </div>
        );
      }}
    />
  );
}