'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '@mui/material/Button';
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import CardActions from '@mui/material/CardActions';
import EventNoteIcon from '@mui/icons-material/EventNote';

const quotes = [
  { text: '불가능이라는 단어는 단지 이 세상에 있는 단어일 뿐, 내 사전에 없다.', author: '나폴레옹 보나파르트' },
  { text: '작은 기회로부터 종종 위대한 업적이 시작된다.', author: '데모스테네스' },
  { text: '오늘 할 수 있는 일을 내일로 미루지 말라.', author: '벤자민 프랭클린' },
  { text: '천 리 길도 한 걸음부터 시작된다.', author: '노자' },
  { text: '성공은 매일의 작은 노력들이 모여 만들어진다.', author: '로버트 콜리어' },
  { text: '습관이 바뀌면 인생이 바뀐다.', author: '아리스토텔레스' },
  { text: '매일 조금씩 나아지면 결국 큰 변화가 된다.', author: '존 우든' },
];

const habits = [
  { title: '아침 3분 스트레칭', desc: '몸을 깨우는 가장 작은 시작' },
  { title: '긍정확언 3번 외치기', desc: '거울 속 나에게 자신감을 선물하세요' },
  { title: '감사일기 쓰기', desc: '하루를 감사로 마무리해요' },
];

export default function Page(): React.JSX.Element {
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [dateStr, setDateStr] = React.useState('');

  React.useEffect(() => {
    setDateStr(
      new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      })
    );
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, 500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // backgroundImage: 'url()',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack spacing={5} sx={{ maxWidth: 840, mx: 'auto', paddingTop: '50px'}}>
        <Stack spacing={1}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            나를 피워내는 가장 쉬운 방법,
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            지금 Bloomy와 시작하세요.
          </Typography>
        </Stack>

        {/* Suggestion + Contents */}
        <Stack spacing={2.5}>
          <Stack id="contents" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Card
              elevation={0}
              sx={{
                flex: 1,
                borderRadius: '20px',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(-6px)',
                boxShadow: '0 12px 24px rgba(161, 140, 209, 0.15)',
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Fade in={visible} timeout={500}>
                  <Stack spacing={1.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', textAlign: 'center', }}>
                      &ldquo;{quotes[quoteIndex].text}&rdquo;
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, textAlign: 'center', }}>
                      — {quotes[quoteIndex].author} —
                    </Typography>
                  </Stack>
                </Fade>
              </CardContent>
            </Card>
          </Stack>
          {/* 버튼 */}
          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} spacing={1}>
            <CardActions sx={{ gap: '30px' }}>
              <Button sx={{
                width: '100px',
                borderRadius: '24px',
                background: '#ea88b0',
                color: '#fff',
                textShadow: '0 1px 4px rgba(0,0,0,0.1)',
                fontSize: '1rem',
              }}>
                회원가입
              </Button>
              <Button sx={{
                width: '100px',
                borderRadius: '24px',
                // background: 'linear-gradient(135deg, #ea88b0, #f8bfd4)',
                background: '#ea88b0',
                color: '#fff',
                textShadow: '0 1px 4px rgba(0,0,0,0.1)',
                fontSize: '1rem',
              }} >
                로그인
              </Button>
            </CardActions>
          </Stack>
          {/* <Stack id="suggestion" spacing={0.5}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              오늘의 작은 성장 제안
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              매일 1%씩 성장하는 습관을 만들어보세요
            </Typography>
          </Stack> */}
        </Stack>
      </Stack >
    </Box >
  );
}
