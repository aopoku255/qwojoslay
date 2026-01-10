import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useWindowSize from "../hooks/useWindowSize";
import { H2 } from "../components/Typography";
import { FlexBetween } from "../components/flex-box";
import Carousel from "./carousel/Carousel";
import { Link } from "react-router-dom";
import ProductsCard1 from "./productsCard/ProductsCard1";

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
    <Container sx={{ py: 8 }}>
      <FlexBetween mb={3}>
        <H2 fontSize={20}>Deals Of The Day</H2>
        <Link to="/products">More Products</Link>
      </FlexBetween>

      <Carousel visibleSlides={visibleSlides}>
        {products.map((product) => (
          <ProductsCard1
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </Carousel>
    </Container>
  );
};

export default Section4;
