import { Box, Rating } from "@mui/material";
import { Favorite, FavoriteBorder, RemoveRedEye } from "@mui/icons-material";
import { FlexRowCenter } from "../../components/flex-box";
import { H4, Paragraph, Small } from "../../components/Typography";
import { Link } from "react-router-dom";
import ProductViewDialog from "./ProductViewDialog";
import { currency } from "../../lib";
import { useProductCard2 } from "./useProductCard2";

const ProductCard2 = ({ product }) => {
  const {
    handleFavorite,
    isFavorite,
    openDialog,
    setOpenDialog,
    AddToCartButton,
    Card,
    CardMedia,
    FavouriteButton,
  } = useProductCard2();
  return (
    <Card height="100%">
      <CardMedia>
        <Link to={`/product/${product.id}`} state={{ ...product }}>
          <img
            width={300}
            height={300}
            alt={product.name}
            className="w-full h-full object-cover"
            src={product.images[0]?.url}
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

        <button className="flex justify-center text-sm cursor-pointer items-center mx-auto border border-black/60 px-8 lg:py-2 py-3 rounded-sm w-full hover:bg-black hover:text-white mt-3">
          Add To Cart
        </button>
      </Box>
    </Card>
  );
};

export default ProductCard2;
