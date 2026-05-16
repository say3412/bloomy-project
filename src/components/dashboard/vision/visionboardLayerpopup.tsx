'use client'
import { ChangeEvent, useState } from 'react';
import { Stack, Dialog, DialogActions, DialogContent, InputAdornment, OutlinedInput, IconButton, Tooltip } from '@mui/material';
import { SaveAs as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import VisionBoardMasonry from './visionboardMasonry';
import { ImageMeta, ImagePixa } from '@/types/image-pixa';
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';
import ENV from '@/env';
import fetchData from '@/app/utils/fetchData';

export default function VisionBoardLayerPopUP() {
  const [newImages, setNewImages] = useState<ImagePixa[]>([]);
  let searchedImages = newImages.map((img) => ({ id: img.id, src: img.webformatURL, }));
  const [query, setQuery] = useState<string>('');
  const { images, selectedIds, addBoard, handleAddClose, handleAddSave } = useVisionboardImageContext();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const handleSearch = async () => {
    if (!query) return;

    const url = `${ENV.IMAGE_PIXA_URL}?key=${ENV.IMAGE_PIXA_KEY}&q=${query}&lang=en&per_page=8`;
    try {
      const data: ImageMeta = await fetchData(url);
      setNewImages(data.hits);
    } catch (e) {
      setNewImages([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const onClickSave = () => {
    const selected = searchedImages.filter((img) =>
      selectedIds.includes(img.id)
    );

    handleAddSave(selected);
    setQuery('');
  }

  const handleCloseWithClear = () => {
    setQuery('');
    setNewImages([]); // 이미지 목록 초기화
    handleAddClose();
  };

  return (
    <Dialog
      open={addBoard}
      onClose={handleCloseWithClear}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: '70vw',
            height: '70vh',
            minWidth: '600px',
            minHeight: '400px',
          },
        },
      }}
    >
      {/* <DialogTitle>
          비전 이미지 찾기
        </DialogTitle> */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <DialogContent>
          <OutlinedInput
            fullWidth
            placeholder="어떤 이미지를 찾을까요?"
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
            value={query}
            endAdornment={
              <InputAdornment position="start">
                <IconButton edge="end" onClick={handleSearch}>
                  <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
                </IconButton>
              </InputAdornment>
            }
            sx={{ maxWidth: '500px' }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          {/* 저장 버튼 */}
          <Tooltip title="저장">
            <IconButton
              onClick={onClickSave}
              sx={{ color: 'var(--mui-palette-primary-main)', '&:hover': { color: 'var(--mui-palette-primary-dark)' } }}
            >
              <SaveIcon />
            </IconButton>
          </Tooltip>

          {/* 닫기 버튼 */}
          <Tooltip title="닫기">
            <IconButton
              onClick={handleCloseWithClear}
              sx={{ color: 'grey.500', '&:hover': { color: '#f48fb1' } }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Stack>
      {searchedImages.length > 0 && <VisionBoardMasonry images={searchedImages} readOnly={false}/>}
    </Dialog>
  )
}