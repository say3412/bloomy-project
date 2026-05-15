'use client'
import { ChangeEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Masonry } from '@mui/lab';
import { Box } from "@mui/material";
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { type VisionBoardImage } from '@/types/visionboard-image';
import VisionBoardMasonry from './visionboard-masonry';
import VisionBoardLayerPopUP from './visionboard-layerpopup';
import useFetch from '@/app/utils/fetchData';
import { ADD_BUTTON_ID } from '@/config'
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';

export function VisionBoard(): React.JSX.Element {
  const {images, handleEditClick } = useVisionboardImageContext();

  // const [images, setImages] = useState<VisionBoardImage[]>(v_images);
  // const [editBoard, setEditBoard] = useState<boolean>(false);
  // const [addBoard, setAddBoard] = useState(false);

  // const handleEditClick = () => {
  //   setEditBoard((prev) => !prev);

  //   if (!editBoard) {
  //     setImages([...images, { id: ADD_BUTTON_ID, src: '/assets/logo_text.png' }]);
  //   } else {
  //     setImages((prev) =>
  //       prev.filter((img) => img.id !== ADD_BUTTON_ID)
  //     );
  //   }
  // }

  // const handleAddClick = () => {
  //   setAddBoard(true);
  // }
  // const handleAddClose = () => {
  //   setAddBoard(false);
  // };

  // const handleDelete = (id: number) => {
  //   setImages(images.filter((img) => (id !== img.id)))
  // }

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', }}>나만의 비전보드</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <CardActions sx={{ gap: '10px' }}>
            <Button id="edit-visionboard" fullWidth startIcon={<EventNoteIcon />}>
              나만의 비전보드 만들기
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Add
            </Button>
            <Button color="inherit" onClick={handleEditClick} startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Edit
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </CardActions>
        </Stack>
      </Stack>
      {/* 비전보드 이미지 */}
      <VisionBoardMasonry images={images}/>
      {/* 레이어 팝업 */}
      <VisionBoardLayerPopUP />
    </div>
  );
}
