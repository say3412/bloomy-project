import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import CardActions from '@mui/material/CardActions';
import EventNoteIcon from '@mui/icons-material/EventNote';

import { config } from '@/config';
import { VisionList } from '@/components/dashboard/vision/vision-list';
import { VisionBoard } from '@/components/dashboard/vision/visionboard';
import { type VisionBoardImage } from '@/types/visionboard-image';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Vision</Typography>
        </Stack>
      </Stack>
      <VisionBoard />
      <Stack>
        <Grid size={12}>
          <VisionList
            visions={[
              {
                id: 'VL-005',
                content: '나는 매일 아침 6시에 일어나 규칙적인 생활 습관을 완성했다.',
                updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
                status: 'removed',
              },
              {
                id: 'VL-004',
                content: '나는 1년 안에 순자산 10억 원을 달성하고 경제적 자유를 얻었다.',
                updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
                status: 'processing',
              },
              {
                id: 'VL-003',
                content: '나는 전 세계 어디에서든 영어로 자유롭게 발표하고 소통하게 되었다.',
                updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
                status: 'achieved',
              },
              {
                id: 'VL-002',
                content: '나는 100만 명이 사용하는 자기계발 서비스를 성공적으로 만들었다.',
                updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
                status: 'processing',
              },
              {
                id: 'VL-001',
                content: '나는 건강한 식습관과 운동으로 체지방률 15%의 몸을 유지하게 되었다.',
                updatedAt: dayjs().subtract(10, 'minutes').toDate(),
                status: 'processing',
              },
            ]} />
        </Grid>
      </Stack>
    </Stack>
  );
}