import React, { useEffect } from "react";
import { Share } from "react-native";

export const handleShareLink = async () => {
  try {
    await Share.share({
      message:
        "Download JIGUU NCERT Solutions here:\nhttps://play.google.com/store/apps/details?id=com.jiguu.mathtool",
    });
  } catch (error: any) {
    console.log("Error sharing app link: ", error?.message);
  }
};

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      handleShareLink().finally(() => {
        onClose();
      });
    }
  }, [visible, onClose]);

  return null;
};
