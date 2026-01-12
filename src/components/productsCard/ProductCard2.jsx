import { useState } from "react";
import { Box, Button, IconButton, Rating, styled } from "@mui/material";
import { Favorite, FavoriteBorder, RemoveRedEye } from "@mui/icons-material";
import { FlexRowCenter } from "../../components/flex-box";
import { H4, Paragraph, Small } from "../../components/Typography";
import { Link } from "react-router-dom";
import ProductViewDialog from "./ProductViewDialog";
import { currency } from "../../lib";
import LoginModal from "../Modal/LoginMaodal/LoginModal";

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

const ProductCard2 = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => setIsFavorite((fav) => !fav);

  return (
    <Card height="100%">
      <CardMedia>
        <Link to={`/product/${product.id}`}>
          <img
            width={300}
            height={300}
            alt={product.name}
            className="w-full h-full object-cover"
            src={product.image}
          />
        </Link>

        {/* QUICK VIEW */}
        <AddToCartButton
          className="product-actions"
          onClick={() => setOpenDialog(true)}
        >
          <RemoveRedEye color="disabled" fontSize="small" />
        </AddToCartButton>

        <FavouriteButton className="product-actions" onClick={handleFavorite}>
          {isFavorite ? (
            <Favorite className="text-red-700" />
          ) : (
            <FavoriteBorder color="disabled" fontSize="small" />
          )}
        </FavouriteButton>
      </CardMedia>

      {/* QUICK VIEW MODAL */}
      <ProductViewDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        product={product}
      />

      <Box p={2} textAlign="center">
        <Paragraph>{product.name}</Paragraph>
        <H4 fontWeight={700} py={0.5}>
          {currency(product.price)}
        </H4>

        <FlexRowCenter gap={1} mb={2}>
          <Rating value={4} readOnly sx={{ fontSize: 14 }} />
          <Small fontWeight={600} color="grey.500">
            ({product?.reviews?.length || 0})
          </Small>
        </FlexRowCenter>

        <button className="flex justify-center text-sm items-center mx-auto border border-black/60 px-8 lg:py-2 py-3 rounded-sm w-full hover:bg-black hover:text-white mt-3">
          Add To Cart
        </button>
      </Box>
    </Card>
  );
};

export default ProductCard2;
