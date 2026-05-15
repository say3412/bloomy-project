import { VisionBoardImage } from "@/types/visionboard-image";
import { useState } from "react";
import v_images from '@/mock/image.json';

export default function useVisionboardImage() {
    const [images, setImages] = useState<VisionBoardImage[]>([]); // v_images: 개발 이후에 []로 수정
    const [editBoard, setEditBoard] = useState<boolean>(false);
    const [addBoard, setAddBoard] = useState(false);

    // 비전보드 수정: 이미지 추가 버튼 표출, 삭제버튼 표출
    const handleEditClick = () => {
        setEditBoard((prev) => !prev);
    };

    // 레이어팝업 오픈
    const handleAddOpen = () => {
        setAddBoard(true);
    }

    // 레이어팝업 닫음
    const handleAddClose = () => {
        setAddBoard(false);
    };

    const handleAddSave = (selectedImages: VisionBoardImage[]) => {
        setImages((prev) => [...prev, ...selectedImages]);
    }

    // 이미지 삭제, 로컬스토리지 저장
    const handleDelete = (id: number) => {
        setImages((prev) => prev.filter((img) => (id !== img.id)));
        // localStorage.setItem("images", JSON.stringify(images));
    }

    return { images, editBoard, addBoard, handleEditClick, handleAddOpen, handleAddClose, handleAddSave, handleDelete };
}