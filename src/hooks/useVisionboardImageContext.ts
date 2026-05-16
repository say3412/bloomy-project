import VisionboardImageContext from "@/contexts/visionboardImageContext";
import { useContext } from "react";

export default function useVisionboardImageContext() {
  const context = useContext(VisionboardImageContext);

  if (!context) {
    throw new Error('VisionboardImageContext Provider is null.');
  }

  return context;
}