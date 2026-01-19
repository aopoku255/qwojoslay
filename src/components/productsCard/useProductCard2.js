import { styled, Box, IconButton } from "@mui/material";
import { useState } from "react";

export function useProductCard2() {
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => setIsFavorite((fav) => !fav);

  const Card = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    transition: "all 0.3s",
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[100]}`,
    ":hover": {
      "& .product-actions": {
        right: 5,
      },
      "& img": {
        transform: "scale(1.1)",
      },
      border: `1px solid gray`,
    },
  }));
  const CardMedia = styled(Box)({
    width: "100%",
    maxHeight: 300,
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    "& img": {
      transition: "0.3s",
    },
  });
  const AddToCartButton = styled(IconButton)({
    top: 10,
    right: -40,
    position: "absolute",
    transition: "right 0.3s .1s",
  });
  const FavouriteButton = styled(IconButton)({
    top: 45,
    right: -40,
    position: "absolute",
    transition: "right 0.3s .2s",
  });

  // ==============================================================

  // ==============================================================

  return {
    openDialog,
    isFavorite,
    setOpenDialog,
    handleFavorite,
    Card,
    CardMedia,
    AddToCartButton,
    FavouriteButton,
  };
}
