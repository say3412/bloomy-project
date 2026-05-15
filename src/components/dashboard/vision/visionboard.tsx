'use client'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { IconButton, Tooltip } from '@mui/material';
import { PencilLine as EditIcon, Share as ExportIcon } from '@phosphor-icons/react';
import VisionBoardMasonry from './visionboard-masonry';
import VisionBoardLayerPopUP from './visionboard-layerpopup';
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'; // 혹은 기존 느낌과 비슷한 ExitToAppOutlinedIcon
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'; // 혹은 IosShareOutlinedIcon

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
            <Stack direction='row' spacing={1} justifyContent='center'>
              <Tooltip title="수정">
                <IconButton
                  onClick={handleEditClick}
                  sx={{
                    color: 'neutral.400',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="내보내기">
                <IconButton
                  sx={{
                    color: 'neutral.400',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <FileUploadOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Stack>
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
