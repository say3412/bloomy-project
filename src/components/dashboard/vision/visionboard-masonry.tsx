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

  const displayImages = editBoard ? [...images, { id: ADD_BUTTON_ID, src: '/assets/logo_text.png', }] : images;

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
          {displayImages.length === 0 &&
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

          {displayImages.length > 0 && <Masonry columns={4} spacing={2}>
            {displayImages.map((img) => (
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

                {!addBoard && editBoard && img.id === ADD_BUTTON_ID && <IconButton
                  onClick={handleAddOpen}
                  sx={{
                    position: 'absolute', top: 50, right: 50, zIndex: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white',
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
          </Masonry>}
        </Box>
      </Card>
    </div>
  );
}