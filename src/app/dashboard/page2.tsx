'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { type WiseSay } from '@/types/wise-saying';
import fetchData from '@/app/utils/fetchData';
import ENV from '@/env';

// const quotes = [
//   { text: '불가능이라는 단어는 단지 이 세상에 있는 단어일 뿐, 내 사전에 없다.', author: '나폴레옹 보나파르트' },
//   { text: '작은 기회로부터 종종 위대한 업적이 시작된다.', author: '데모스테네스' },
//   { text: '오늘 할 수 있는 일을 내일로 미루지 말라.', author: '벤자민 프랭클린' },
//   { text: '천 리 길도 한 걸음부터 시작된다.', author: '노자' },
//   { text: '성공은 매일의 작은 노력들이 모여 만들어진다.', author: '로버트 콜리어' },
//   { text: '습관이 바뀌면 인생이 바뀐다.', author: '아리스토텔레스' },
//   { text: '매일 조금씩 나아지면 결국 큰 변화가 된다.', author: '존 우든' },
// ];

// const habits = [
//   { title: '아침 3분 스트레칭', desc: '몸을 깨우는 가장 작은 시작' },
//   { title: '긍정확언 3번 외치기', desc: '거울 속 나에게 자신감을 선물하세요' },
//   { title: '감사일기 쓰기', desc: '하루를 감사로 마무리해요' },
// ];

export default function Page() {
  const [visible, setVisible] = useState(true);
  const [wisesay, setWiseSay] = useState<WiseSay>({ author: '', authorProfile: '', message: '' });

  const url = ENV.WISE_SAY_URL;
  useEffect(() => {
    const fetchWiseSay = async () => {
      setVisible(false);
      setTimeout(async () => {
        try {
          const data: WiseSay = await fetchData(url);
          setWiseSay(data);
        } catch (e) {
          setWiseSay({ author: '', authorProfile: '', message: 'loading...' });
        }
        setVisible(true);
      }, 500)
    };
    fetchWiseSay();
    const interval = setInterval(fetchWiseSay, 10000);
    return () => clearInterval(interval);
  }, [url]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Stack spacing={10} sx={{ maxWidth: 640, width: '100%' }}>

        {/* 상단: 브랜드 아이덴티티 */}
        <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{
              color: '#EA88B0',
              fontWeight: 800,
              letterSpacing: '0.2em',
              fontSize: '0.75rem'
            }}
          >
            BLOOMY PRESET
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#19191B',
              fontSize: { xs: '2.4rem', md: '3.2rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              wordBreak: 'keep-all'
            }}
          >
            나를 피워내는 <br />
            가장 쉬운 방법
          </Typography>
        </Stack>

        {/* 중단: 정갈한 명언 섹션 (선을 이용한 미니멀리즘) */}
        <Stack spacing={4} sx={{ width: '100%' }}>
          <Divider sx={{ width: '40px', height: '2px', bgcolor: '#EA88B0', mx: 'auto', border: 'none' }} />

          <Stack spacing={2} sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#3A3A3C',
                lineHeight: 1.6,
                letterSpacing: '-0.01em'
              }}
            >
              &ldquo;{wisesay.message}&rdquo;
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#8E8E93', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              {wisesay.author}
            </Typography>
          </Stack>

          <Divider sx={{ width: '40px', height: '1px', bgcolor: '#F2F2F7', mx: 'auto', border: 'none' }} />
        </Stack>

        {/* 하단: 직관적인 CTA 버튼 */}
        <Stack direction="column" spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: '100%',
              maxWidth: '280px',
              py: 1.8,
              borderRadius: '100px', // 완전 곡선으로 세련미 강조
              bgcolor: 'var(--mui-palette-primary-main)', // 블랙 버튼으로 핑크의 가벼움을 잡아줌
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { bgcolor: 'var(--mui-palette-primary-dark)', }
            }}
          >
            Get Started
          </Button>
          <Button
            variant="text"
            sx={{
              color: '#8E8E93',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              '&:hover': { color: '#19191B', bgcolor: 'transparent' }
            }}
          >
            이미 계정이 있으신가요? 로그인
          </Button>
        </Stack>

      </Stack>
    </Box>
  );
}