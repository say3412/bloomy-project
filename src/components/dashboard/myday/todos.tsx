'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

export function Todos(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={2} sx={{ flex: '1 1 auto', justifyContent: 'space-between', alignItems: 'center', }}>
            <CardHeader
              title="오늘의 아주 작은 계획"
              subheader="매일 1% 성장하는 나를 기대해요."
              slotProps={{
                title: {
                  sx: {
                    fontWeight: 700,
                    fontSize: '1.3rem',
                  },
                },
                subheader: {
                  sx: {
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                  },
                },
              }} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">Add</Button>
            </CardActions>
          </Stack>
        </Stack>
        <Divider />
        <CardContent>
          <Stack spacing={1}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                id={'1'}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontWeight: 600,
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                  },
                }}
                label={<Typography>사업계획서 작성법 검색</Typography>}
                value={"사업계획서 작성법 검색"} />
              <FormControlLabel control={<Checkbox />}
                id={'2'}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontWeight: 600,
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                  },
                }}
                label={<Typography>나만의 긍정확언 3개 작성</Typography>}
                value={"나만의 긍정확언 3개 작성"} />
              <FormControlLabel
                control={<Checkbox />}
                id={'3'}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontWeight: 600,
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                  },
                }}
                label={<Typography>감사일기 3개 쓰고 하루 회고</Typography>}
                value={"감사일기 3개 쓰고 하루 회고"} />
            </FormGroup>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}
