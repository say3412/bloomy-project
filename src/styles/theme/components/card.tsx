import { paperClasses } from '@mui/material/Paper';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: '20px',
        [`&.${paperClasses.elevation1}`]: {
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 5px 22px 0 rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(255, 255, 255, 0.12)'
              : '0 10px 28px rgba(234, 136, 176, 0.05), 0 0 0 1px rgba(233, 30, 99, 0.06)',
        },
      };
    },
  },
} satisfies Components<Theme>['MuiCard'];
