import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Carousel = ({ children, visibleSlides = 4 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <div className="relative">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: "1.5rem",
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${100 / visibleSlides}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => emblaApi.scrollPrev()}
        disabled={!canPrev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 disabled:opacity-30"
      >
        <ArrowBack fontSize="small" />
      </button>

      <button
        onClick={() => emblaApi.scrollNext()}
        disabled={!canNext}
        className="absolute -right-5 top-1/2 -translate-y-1/2 disabled:opacity-30"
      >
        <ArrowForward fontSize="small" />
      </button>
    </div>
  );
};

export default Carousel;
