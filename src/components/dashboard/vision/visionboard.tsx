'use client'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import VisionBoardMasonry from './visionboard-masonry';
import VisionBoardLayerPopUP from './visionboard-layerpopup';
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';

export function VisionBoard(): React.JSX.Element {
  const { images, handleEditClick } = useVisionboardImageContext();

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', }}>나만의 비전보드</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <CardActions sx={{ gap: '5px' }}>
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
      <VisionBoardMasonry images={images} />
      {/* 레이어 팝업 */}
      <VisionBoardLayerPopUP />
    </div>
  );
}
