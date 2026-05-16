'use client'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Masonry } from '@mui/lab';
import { Box, Snackbar } from "@mui/material";
import { type VisionBoardImage } from '@/types/visionboard-image';
import Checkbox from '@mui/material/Checkbox';
import { ADD_BUTTON_ID } from '@/config'
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';
import Alert from '@mui/material/Alert';
import { Paper, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/AddOutlined';

interface VisionBoardMasonryProps {
  images: VisionBoardImage[];
  readOnly?: boolean; // 체크박스 표시 여부를 결정하는 flag
}

export default function VisionBoardMasonry({ images, readOnly = true }: VisionBoardMasonryProps) {
  const { openAlert, selectedIds, addBoard, editBoard, handleDelete, handleAddOpen, handleSelectIds, handleAlert } = useVisionboardImageContext();

  const handleSelect = (id: number) => {
    handleSelectIds(id);
  };

  const onClickMake = () => {
    handleAddOpen();
  }

  return (
    <div>
      <Snackbar
        open={openAlert}
        autoHideDuration={1500}
        onClose={handleAlert}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <Alert severity="warning" >이미 비전보드에 포함된 이미지입니다.</Alert>
      </Snackbar>
      <Card>
        <Box
          sx={{
            maxHeight: '70vh',
            overflowY: "auto",
            px: 2,
            pt: 2,
            pb: 5,
            bgcolor: "#fafafa",
          }}
        >
          {images.length === 0 &&
            (<Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardActions>
                <Button onClick={onClickMake} fullWidth startIcon={<EventNoteIcon />}>
                  나만의 비전보드 만들기
                </Button>
              </CardActions>
            </Box>
            )}

          {images.length > 0 && <Masonry columns={4} spacing={2} sx={{
            // Masonry 내부 아이템들의 위치 이동 애니메이션 제거
            '& > *': {
              transition: 'none !important',
              animation: 'none !important',
            }
          }}>
            {images.map((img) => (
              <Box
                key={img.id}
                sx={{
                  position: 'relative',
                  overflow: "hidden",
                  borderRadius: 1.5,
                }}
              >
                {!addBoard && editBoard && img.id !== ADD_BUTTON_ID && <IconButton
                  onClick={() => handleDelete(img.id)}
                  size="small"
                  sx={{
                    padding: '4px', position: 'absolute', top: 8, right: 8, zIndex: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)', },
                  }}
                >
                  <CloseIcon sx={{ fontSize: 16 }} />
                </IconButton>}

                {!readOnly && img.id !== ADD_BUTTON_ID && (
                  <Checkbox
                    checked={selectedIds.includes(img.id)}
                    onChange={() => handleSelect(img.id)}
                    sx={{
                      position: 'absolute', top: 8, left: 8, zIndex: 1, padding: '4px', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '15%',
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)', },
                      '& .MuiSvgIcon-root': { fontSize: 20, color: 'white', },
                    }}
                  />
                )}

                {/* 이미지 출력, loading lazy로 화면에 보이는 것 부터 요청 */}
                <img
                  loading="lazy" src={img.src} alt=""
                  style={{ width: "100%", display: "block", borderRadius: 12, }}
                />
              </Box>
            ))}
            {!addBoard && editBoard && <Paper
              elevation={0}
              onClick={handleAddOpen}
              sx={{
                width: '100%',
                maxWidth: '200px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px', // 기존 이미지 카드와 곡률 통일
                border: '1.5px dashed',
                borderColor: 'rgba(228, 123, 166, 0.4)', // Primary Main(#E47BA6)의 옅은 버전
                bgcolor: 'rgba(255, 240, 246, 0.5)', // Primary Light(#FFF0F6)의 투명 버전
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: '#FFF0F6',
                  borderColor: '#E47BA6',
                  transform: 'scale(1.02)', // 아주 미세한 확대 효과로 인터랙션 강화
                  boxShadow: '0 8px 16px rgba(228, 123, 166, 0.1)'
                }
              }}
            >
              <Stack spacing={0.8} alignItems="center">
                {/* 아이콘을 원형 배경 안에 넣어 포인트 부여 */}
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: '#E47BA6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(228, 123, 166, 0.3)'
                  }}
                >
                  <AddIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: '#E47BA6',
                    fontSize: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Add Moment
                </Typography>
              </Stack>
            </Paper>}
          </Masonry>}
        </Box>
      </Card>
    </div>
  );
}