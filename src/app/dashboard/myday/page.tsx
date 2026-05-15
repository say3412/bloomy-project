import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Todos } from '@/components/dashboard/myday/todos';
import { Habbits } from '@/components/dashboard/myday/habbits';
import { Vision } from '@/components/dashboard/vision/vision-list';


export const metadata = { title: `Settings | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">My Day</Typography>
      </div>
      <div >
        <Grid container spacing={3}>
          <Grid
            size={{
              lg: 6,
              md: 6,
              xs: 12,
            }}
          >
            <Todos />
          </Grid>
          <Grid
            size={{
              lg: 6,
              md: 6,
              xs: 12,
            }}
          >
            <Habbits />
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}
