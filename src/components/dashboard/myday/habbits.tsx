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
import CardHabbitList from './card-habbit-list';

export function Habbits(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card sx={{ minHeight: 400, }}>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={2} sx={{ flex: '1 1 auto', justifyContent: 'space-between', alignItems: 'center', }}>
            <CardHeader
              title="아주 작은 습관의 힘"
              subheader="성공하는 습관이 몸에 기억되요"
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
        <CardHabbitList />
      </Card>
    </form>
  );
}
