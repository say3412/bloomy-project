import CalendarPage from "@/components/dashboard/calendar/calendar-view";
import Box from '@mui/material/Box';

export default function Page() {
  return (
    <Box sx={{ p: 3, borderRadius: 4, backgroundColor: 'background.paper', }}>
      <CalendarPage />
    </Box>
  );
}