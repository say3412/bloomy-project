import type { ColorSystemOptions } from '@mui/material/styles';

import { neonBlue, nevada, redOrange, stormGrey } from './colors';
import type { ColorScheme } from './types';

export const colorSchemes = {
  dark: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
      background: {
        default: 'var(--mui-palette-neutral-950)',
        defaultChannel: '9 10 11',
        paper: 'var(--mui-palette-neutral-900)',
        paperChannel: '19 78 72',
        level1: 'var(--mui-palette-neutral-800)',
        level2: 'var(--mui-palette-neutral-700)',
        level3: 'var(--mui-palette-neutral-600)',
      },
      common: { black: '#000000', white: '#ffffff' },
      divider: 'var(--mui-palette-neutral-700)',
      dividerChannel: '50 56 62',
      error: {
        ...redOrange,
        light: redOrange[300],
        main: redOrange[400],
        dark: redOrange[500],
        contrastText: 'var(--mui-palette-common-black)',
      },
      info: {
        light: '#b3a9c8',
        main: '#8f82aa',
        dark: '#756593',
        contrastText: 'var(--mui-palette-common-white)',
      },
      neutral: { ...nevada },
      primary: {
        light: '#fdeef5',
        main: '#eda9c4',
        dark: '#e07aaa',
        contrastText: 'var(--mui-palette-common-white)',
      },
      secondary: {
        light: '#f9f1fb',
        main: '#f3e5f5',
        dark: '#e3cde8',
        contrastText: 'var(--mui-palette-common-black)',
      },
      success: {
        ...neonBlue,
        light: '#ffe4d6',
        main: '#f7c8ae',
        dark: '#e6ab89',
        contrastText: 'var(--mui-palette-common-black)',
      },
      text: {
        primary: 'var(--mui-palette-neutral-100)',
        primaryChannel: '240 244 248',
        secondary: 'var(--mui-palette-neutral-400)',
        secondaryChannel: '159 166 173',
        disabled: 'var(--mui-palette-neutral-600)',
      },
      warning: {
        ...neonBlue,
        light: '#d9e2ff',
        main: '#9ca7ff',
        dark: '#7578ff',
        contrastText: 'var(--mui-palette-common-white)',
      },
    },
  },
  light: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.06)' },
      background: {
        default: '#fdfdfd',
        defaultChannel: '253 253 253',
        paper: 'var(--mui-palette-common-white)',
        paperChannel: '255 255 255',
        level1: 'var(--mui-palette-neutral-50)',
        level2: 'var(--mui-palette-neutral-100)',
        level3: 'var(--mui-palette-neutral-200)',
      },
      common: { black: '#000000', white: '#ffffff' },
      divider: 'var(--mui-palette-neutral-100)',
      dividerChannel: '241 241 244',
      error: {
        ...redOrange,
        light: redOrange[400],
        main: redOrange[500],
        dark: redOrange[600],
        contrastText: 'var(--mui-palette-common-white)',
      },
      info: {
        light: '#f3f0fa',
        main: '#c4b8dc',
        dark: '#9d8fc0',
        contrastText: 'var(--mui-palette-common-white)',
      },
      neutral: { ...stormGrey },
      primary: {
        light: '#fdf2f8',
        main: '#ea88b0',
        dark: '#d96f9a',
        contrastText: 'var(--mui-palette-common-white)',
      },
      secondary: {
        light: '#faf5fc',
        main: '#f3e5f5',
        dark: '#dcc6e2',
        contrastText: 'var(--mui-palette-common-black)',
      },
      success: {
        ...neonBlue,
        light: '#fff1f2',
        main: '#fbcfe8',
        dark: '#f9a8d4',
        contrastText: 'var(--mui-palette-neutral-800)',
      },
      text: {
        primary: 'var(--mui-palette-neutral-800)',
        primaryChannel: '49 55 73',
        secondary: 'var(--mui-palette-neutral-500)',
        secondaryChannel: '102 112 133',
        disabled: 'var(--mui-palette-neutral-400)',
      },
      warning: {
        ...neonBlue,
        light: '#eef2ff',
        main: '#c7d2fe',
        dark: '#a5b4fc',
        contrastText: 'var(--mui-palette-neutral-800)',
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
