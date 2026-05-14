'use client'
import dayjs from 'dayjs';
import styles from '@/components/dashboard/calendar/calendar.module.css'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalendarPage() {
    const habbits = [
        {
            id: 'HL-20260514-005',
            content: '점심 이후 10분 산책',
            updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
            status: true,
        },
        {
            id: 'VL-20260514-004',
            content: '아침에 물 한잔 마시기',
            updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
            status: false,
        },
        {
            id: 'VL-20260514-003',
            content: '독서 30분',
            updatedAt: dayjs().subtract(1, 'hour').toDate(),
            status: true,
        },
    ];

    /**
     * 완료된 habit만 날짜별로 개수 집계
     */
    const grouped = habbits.reduce((acc, habbit) => {
        if (!habbit.status) {
            return acc;
        }

        const date = dayjs(habbit.updatedAt).format('YYYY-MM-DD');
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const events = Object.entries(grouped).map(([date, count]) => ({
        title: `${count}`,
        date,
    }));

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

            eventContent={(eventInfo) => (
                <div>
                    <div className={styles.count} style={{ backgroundColor: "#ea88b0", }}>
                        {eventInfo.event.title}
                    </div>
                    <div className={styles.count} style={{ backgroundColor: "#9088ea", }}>
                        {eventInfo.event.title}
                    </div>
                </div>
            )}
        />
    );
}