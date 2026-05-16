import React from 'react';
import { Card, CardActions, CardHeader, Box, Typography, Stack, Button, IconButton, Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { SxProps } from '@mui/material/styles';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { DotsThreeVerticalIcon } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import dayjs from 'dayjs';

export interface VisionListStatus {
  id: string;
  content: string;
  updatedAt: Date;
  status: 'processing' | 'achieved' | 'removed';
}

export interface VisionListStatusProps {
  visions?: VisionListStatus[];
  sx?: SxProps;
}

const statusMap = {
  processing: {
    label: 'processing',
    sx: {
      backgroundColor: 'var(--mui-palette-primary-light)',
      color: 'var(--mui-palette-text-primary)',
    },
  },
  achieved: {
    label: 'achieved',
    sx: {
      backgroundColor: 'var(--mui-palette-primary-main)',
      color: 'var(--mui-palette-primary-contrastText)',
    },
  },
  removed: {
    label: 'removed',
    sx: {
      backgroundColor: 'var(--mui-palette-neutral-600)',
      color: 'var(--mui-palette-common-white)',
    },
  },
} as const;

export function VisionList({ visions = [], sx }: VisionListStatusProps): React.JSX.Element {
  const vision = []
  return (

    <Card sx={{ borderRadius: '24px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      <List disablePadding> {/* disablePadding으로 카드 내부 불필요한 위아래 여백 제거 */}
        {visions.map((vision, index) => {
          return (
            <ListItem 
  divider={index < visions.length - 1} 
  key={vision.id}
  sx={{
    py: { xs: 2, md: 1.5 }, // 모바일에서는 터치 영역 확보를 위해 위아래 패딩을 살짝 늘림
    px: { xs: 2, md: 3 },   // 화면이 좁아지면 좌우 여백을 줄여 공간 확보
  }}
>
  {/* 최상위 컨테이너: 모바일(xs)에서는 세로, PC(md)에서는 가로 배열 */}
<Stack 
  direction={{ xs: 'column', sm: 'row' }} 
  alignItems={{ xs: 'flex-start', sm: 'center' }} 
  spacing={{ xs: 1.5, sm: 3 }} // 간격을 살짝 넓혀 가독성 확보
  sx={{ width: '100%', position: 'relative' }}
>
  
  {/* [핵심 수정] 1. Content 영역: flexGrow를 1로 설정하여 남은 공간을 꽉 채우게 합니다 */}
  <Box sx={{ 
    flexGrow: 1, 
    width: { xs: '100%', sm: 0 }, // sm 이상일 때 0으로 설정하면 flexGrow가 남은 공간을 정확히 계산합니다.
    minWidth: 0, 
    pr: { xs: 4, sm: 2 } 
  }}>
    <Typography 
      variant="body1" 
      sx={{ 
        fontWeight: 500, 
        color: 'text.primary',
        whiteSpace: 'normal',
        wordBreak: 'keep-all',
        lineHeight: 1.5
      }}
    >
      {vision.content}
    </Typography>
  </Box>

  {/* 2. 하단 메타 정보 그룹: 너비를 고정하지 말고 내용에 맞게 조절 */}
  <Stack 
    direction="row" 
    alignItems="center" 
    spacing={1}
    sx={{ 
      width: { xs: '100%', sm: 'auto' },
      justifyContent: { xs: 'space-between', sm: 'flex-end' }, // PC에선 오른쪽으로 밀착
      flexShrink: 0, // 내용이 길어져도 날짜/상태 영역이 줄어들지 않도록 보호
      ml: { sm: 'auto' } // PC에서 좌측 콘텐츠와 간격을 최대한 벌림
    }}
  >
    {/* 날짜 Box: 고정 너비를 조금 더 타이트하게 잡거나 auto로 설정 */}
    <Box sx={{ width: { xs: 'auto', sm: '80px' }, flexShrink: 0 }}>
      <Typography variant="caption" color="text.secondary">
        {dayjs(vision.updatedAt).format('MMM D, YYYY')}
      </Typography>
    </Box>

    {/* 상태 Chip Box */}
    <Box sx={{ width: { xs: 'auto', sm: '80px' }, display: 'flex', justifyContent: 'center' }}>
      <Chip
        label={vision.status}
        size="small"
        sx={{ ...statusMap[vision.status].sx, fontSize: '0.7rem' }}
      />
    </Box>
  </Stack>

    {/* 4. Action Button (모바일이든 PC든 언제나 우측 상단/중앙에 깔끔하게 고정) */}
    <Box 
      sx={{ 
        position: { xs: 'absolute', md: 'static' },
        top: { xs: 0, md: 'auto' },
        right: { xs: 0, md: 'auto' },
        flexShrink: 0 
      }}
    >
      {/* <IconButton edge="end" size="small" sx={{ color: 'text.secondary', p: 0.5 }}>
        <DotsThreeVerticalIcon weight="bold" />
      </IconButton> */}
    </Box>

  </Stack>
</ListItem>
          )
        })}
      </List>
      {/* <Divider /> 
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
}
