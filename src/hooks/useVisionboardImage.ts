import { VisionBoardImage } from "@/types/visionboard-image";
import { useState } from "react";
import v_images from '@/mock/image.json';

export default function useVisionboardImage() {
  const [images, setImages] = useState<VisionBoardImage[]>([]); // v_images: 개발 이후에 []로 수정
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [editBoard, setEditBoard] = useState<boolean>(false);
  const [addBoard, setAddBoard] = useState(false);

  const handleAlert = () => {
    setOpenAlert(false);
  }

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

  const clearSelectIds = () => {
    setSelectedIds([]);
  }

  const handleSelectIds = (id: number) => {
    const imageIdSet = new Set(images.map((img) => img.id));

    setSelectedIds((prev) => {
      // 이미 저장되어있다면 추가 금지
      if (imageIdSet.has(id)) {
        setOpenAlert(true);
        return prev;
      }
      // 이미 선택되었다면 제거
      if (prev.includes(id)) {
        return prev.filter((imgId) => imgId !== id);
      }
      // 신규 추가
      return [...prev, id]
    });
  };

  const handleAddSave = (selectedImages: VisionBoardImage[]) => {
    setImages((prev) => {
      // 이미 저장되어있다면 추가 금지
      const prevIdSet = new Set(prev.map((img) => img.id));
      const filtered = selectedImages.filter((img) => !prevIdSet.has(img.id));
      return [...prev, ...filtered]
    });
  }

  // 이미지 삭제, 로컬스토리지 저장
  const handleDelete = (id: number) => {
    setImages((prev) => prev.filter((img) => (id !== img.id)));
    // localStorage.setItem("images", JSON.stringify(images));
  }

  return { images, selectedIds, editBoard, addBoard, openAlert, handleAlert, handleEditClick, handleAddOpen, handleAddClose, clearSelectIds, handleSelectIds, handleAddSave, handleDelete };
}