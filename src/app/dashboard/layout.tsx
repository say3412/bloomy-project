'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

import { AuthGuard } from '@/components/auth/auth-guard';
import { MainNav } from '@/components/dashboard/layout/main-nav';
import { SideNav } from '@/components/dashboard/layout/side-nav';
import VisionboardImageContext from '@/contexts/visionboardImageContext';
import useVisionboardImage from '@/hooks/useVisionboardImage';
import TodoListContext from '@/contexts/todoListContext';
import useTodoList from '@/hooks/useTodoList';
import HabitListContext from '@/contexts/habitListContext';
import useHabitList from '@/hooks/useHabitList';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const visionboardImage = useVisionboardImage();
  const TodoList = useTodoList();
  const HabitList = useHabitList();

  return (
    <AuthGuard>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <SideNav />
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', pl: { lg: 'var(--SideNav-width)' } }}>
          <MainNav />
          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              <VisionboardImageContext.Provider value={visionboardImage}>
                <TodoListContext.Provider value={TodoList}>
                <HabitListContext.Provider value={HabitList}>
                {children}
                </HabitListContext.Provider>
                </TodoListContext.Provider>
              </VisionboardImageContext.Provider>
            </Container>
          </main>
        </Box>
      </Box>
    </AuthGuard>
  );
}
