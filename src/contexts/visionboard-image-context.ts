import { createContext } from 'react';
import { type VisionBoardImage } from '@/types/visionboard-image';

type VisionboardImageContextType = {
    images: VisionBoardImage[];
    addBoard: boolean;
    editBoard: boolean;
    handleEditClick: () => void;
    handleAddOpen: () => void;
    handleAddClose: () => void;
    handleAddSave: (selectedImages: VisionBoardImage[]) => void;
    handleDelete: (id: number) => void;
}

const VisionboardImageContext = createContext<VisionboardImageContextType | null>(null);
VisionboardImageContext.displayName = 'VisionboardMasonryContext';

export default VisionboardImageContext;