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
import CardContentList from './card-todo-list';
import useTodoListContext from '@/hooks/useTodoListContext';

export function Todos(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card sx={{minHeight: 400,}}>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={2} sx={{ flex: '1 1 auto', justifyContent: 'space-between', alignItems: 'center', }}>
            <CardHeader
              title="오늘의 아주 작은 계획"
              subheader="매일 1% 성장하는 나를 기대해요."
              slotProps={{
                title: { sx: { fontWeight: 700, fontSize: '1.3rem', }, },
                subheader: { sx: { fontSize: '0.9rem', color: 'text.secondary', }, },
              }} />
            {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">Add</Button>
            </CardActions> */}
          </Stack>
        </Stack>
        <Divider />
        <CardContentList />
      </Card>
    </form>
  );
}
