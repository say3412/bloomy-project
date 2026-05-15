'use client'
import { ChangeEvent, useEffect, useState } from 'react';
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
import { ImageMeta, ImagePixa } from '@/types/image-pixa';
import { ADD_BUTTON_ID } from '@/config'
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';
import ENV from '@/env';
import fetchData from '@/app/utils/fetchData';

export default function VisionBoardLayerPopUP() {
    const [newImages, setNewImages] = useState<ImagePixa[]>([]);
    const searchedImages = newImages.map((img) => ({ id: img.id, src: img.webformatURL,}));
    const [selectedImages, setSelectedImages] = useState<VisionBoardImage[]>([]);
    const [query, setQuery] = useState<string>('');
    const { images, addBoard, handleAddClose, handleAddSave} = useVisionboardImageContext();

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
        handleAddSave(selectedImages);
    }

    return (
        <Dialog
            open={addBoard}
            onClose={handleAddClose}
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
                <DialogActions>
                    <Button onClick={onClickSave}>
                        save
                    </Button>
                    <Button onClick={handleAddClose}>
                        닫기
                    </Button>
                </DialogActions>
            </Stack>
            {searchedImages.length > 0 && <VisionBoardMasonry images={searchedImages} />}
        </Dialog>
    )
}