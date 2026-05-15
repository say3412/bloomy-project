'use client'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import { Masonry } from '@mui/lab';
import { Box } from "@mui/material";
import { type VisionBoardImage } from '@/types/visionboard-image';
import Checkbox from '@mui/material/Checkbox';
import { ADD_BUTTON_ID } from '@/config'
import useVisionboardImageContext from '@/hooks/useVisionboardImageContext';
import { useState } from 'react';

interface VBMasonryProps {
    images: VisionBoardImage[];
}

export default function VisionBoardMasonry({ images }: VBMasonryProps) {
    const { addBoard, editBoard, handleDelete, handleAddOpen } = useVisionboardImageContext();
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleSelect = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const displayImages = editBoard ? [...images, { id: ADD_BUTTON_ID, src: '/assets/logo_text.png', }] : images;

    return (
        <Card>
            <Box
                sx={{
                    maxHeight: '70vh',
                    overflowY: "auto",
                    px: 2,
                    pt: 2,
                    pb: 10,
                    bgcolor: "#fafafa",
                }}
            >
                <Masonry columns={4} spacing={2}>
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
                                    padding: '4px',
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    zIndex: 1,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                    },
                                }}
                            >
                                <CloseIcon sx={{ fontSize: 16 }} />
                            </IconButton>}

                            {!addBoard && editBoard && img.id === ADD_BUTTON_ID && <IconButton
                                onClick={handleAddOpen}
                                sx={{
                                    position: 'absolute',
                                    top: 50,
                                    right: 50,
                                    zIndex: 1,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                    },
                                }}
                            >
                                <CloseIcon sx={{ fontSize: 16 }} />
                            </IconButton>}

                            {addBoard && img.id !== ADD_BUTTON_ID && (
                                <Checkbox
                                    checked={selectedIds.includes(img.id)}
                                    onChange={() => handleSelect(img.id)}
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        zIndex: 1,
                                        padding: '4px',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 20,
                                            color: 'white',
                                        },
                                    }}
                                />
                            )}

                            {/* 이미지 출력, loading lazy로 화면에 보이는 것 부터 요청 */}
                            <img
                                loading="lazy"
                                src={img.src}
                                alt=""
                                style={{
                                    width: "100%",
                                    display: "block",
                                    borderRadius: 12,
                                }}
                            />
                        </Box>
                    ))}
                </Masonry>
            </Box>
        </Card>
    );
}