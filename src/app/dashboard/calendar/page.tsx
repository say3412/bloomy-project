import CalendarView from "@/components/dashboard/calendar/CalendarView";
import Box from '@mui/material/Box';

export default function Page() {
  return (
    <Box sx={{ p: 3, borderRadius: 4, backgroundColor: 'background.paper', }}>
      <CalendarView />
    </Box>
  );
}