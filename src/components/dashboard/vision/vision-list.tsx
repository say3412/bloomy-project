import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
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

    <Card sx={sx}>
      <CardHeader
        title="Vision Writing"
        subheader="이미 이룬 것처럼 완료형으로 적어주세요."
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
      <Divider />
      <List>
        {visions.map((vision, index) => {
          return (

            <ListItem divider={index < visions.length - 1} key={vision.id}>
              <ListItemText
                primary={vision.content}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Updated ${dayjs(vision.updatedAt).format('MMM D, YYYY')}`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <Chip
                label={vision.status}
                size="small"
                sx={statusMap[vision.status].sx}
                variant="filled"
              />
              <IconButton edge="end">
                <DotsThreeVerticalIcon weight="bold" />
              </IconButton>
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
