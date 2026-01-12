import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useWindowSize from "../hooks/useWindowSize";
import { H2 } from "../components/Typography";
import { FlexBetween } from "../components/flex-box";
import Carousel from "./carousel/Carousel";
import { Link } from "react-router-dom";
import ProductsCard2 from "./productsCard/ProductCard2";

const Section4 = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else if (width < 1200) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <div>
      <FlexBetween mb={3}>
        <H2 fontSize={20}>Deals Of The Day</H2>
        <Link to="/products">More Products</Link>
      </FlexBetween>

      <Carousel visibleSlides={visibleSlides} showBtns={true}>
        {products.map((product) => (
          <ProductsCard2 product={product} key={product.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Section4;
