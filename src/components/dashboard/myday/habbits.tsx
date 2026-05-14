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
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

export function Habbits(): React.JSX.Element {
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
              title="아주 작은 습관의 힘"
              subheader="성공하는 습관이 몸에 기억되요"
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
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
                label={<Typography>사업계획서 작성법 검색</Typography>}
                value={"사업계획서 작성법 검색"} />
              <FormControlLabel control={<Checkbox />}
                id={'2'}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
                label={<Typography>나만의 긍정확언 3개 작성</Typography>}
                value={"나만의 긍정확언 3개 작성"} />
              <FormControlLabel
                control={<Checkbox />}
                id={'3'} sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
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
