import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { currency } from "../../lib";
import Carousel from "../carousel/Carousel";

const ProductViewDialog = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Carousel visibleSlides={1} showBtns={true} className="h-full">
            {[
              <img
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-contain rounded-md"
              />,
            ]}
          </Carousel>
          <Box marginTop={8}>
            <h4 className="text-2xl font-bold text-black/80">{product.name}</h4>
            <div className="flex gap-x-3 items-center mt-2 font-semibold text-gray-300 text-sm">
              <p className="uppercase">Category: </p>
              <p>Fashion</p>
            </div>
            <p className="mt-4 font-bold text-3xl text-red-700">
              {currency(product.price)}
            </p>
            <div className="flex items-center gap-x-2 my-4">
              <Rating value={4} readOnly sx={{ fontSize: 18 }} />
              <p className="text-sm">(50)</p>
            </div>
            <p className="text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nemo blanditiis voluptatum harum? Itaque expedita numquam
              voluptates possimus quaerat quo obcaecati et exercitationem,
              repellat, tenetur sed suscipit eligendi.
            </p>
            <div className="h-px w-full bg-gray-100 mt-4"></div>
            <button className="mt-6   py-2 hover:bg-red-700 hover:text-white mb-12 px-8 bg-red-800 text-white rounded-sm font-semibold">
              Add To Cart
            </button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
