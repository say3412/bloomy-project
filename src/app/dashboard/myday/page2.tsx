import * as React from 'react';
import type { Metadata } from 'next';
import { Stack, Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

import { config } from '@/config';
// import CardTodos  from '@/components/dashboard/myday/CardTodos';
// import CardHabits  from '@/components/dashboard/myday/CardHabits';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={5} sx={{ p: 3, minHeight: '100vh' }}>

      {/* PAGE HEADER: Vision 페이지와 동일한 위계 */}
      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: '#19191B' }}>
          My Day
        </Typography>
        <Typography variant="body2" color="text.secondary">
          오늘의 할 일과 습관을 체크하며 <Box component="span" sx={{ fontFamily: '"Cascadia Mono", monospace', fontWeight: 600, color: 'primary.main' }}>Bloomy</Box>한 하루를 만드세요.
        </Typography>
      </Stack>

      {/* 메인 컨텐츠 영역 */}
      <Box>
        <Grid container spacing={4}> {/* 섹션 사이 간격을 4로 넓혀 쾌적함 부여 */}

          {/* 할 일 섹션 */}
          <Grid size={{ lg: 6, md: 6, xs: 12 }}>
            <Box>
              <Box sx={{ pt: 3, pb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#313749', }}>
                  나를 위한 일정
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mt: 0.7, }}>
                  매일 1% 성장하는 나를 기대해요.
                </Typography>
              </Box>
              <Card sx={{ borderRadius: '24px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                {/* <CardTodos /> */}
              </Card>
            </Box>
          </Grid>

          {/* 습관 섹션 */}
          <Grid size={{ lg: 6, md: 6, xs: 12 }}>
            <Box>
              <Box sx={{ pt: 3, pb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#313749', }}>
                  아주 작은 습관의 힘
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mt: 0.7, }}>
                  성공하는 습관이 몸에 기억되요.
                </Typography>
              </Box>
              <Card sx={{ borderRadius: '24px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                {/* <CardHabits /> */}
              </Card>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Stack>
  );
}
