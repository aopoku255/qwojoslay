import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Carousel = (
  {
    children,
    visibleSlides = 4,
    autoplay = true,
    interval = 3000,
    pauseOnHover = true,
    showBtns,
    className,
  },
  props
) => {
  const autoplayRef = useRef(
    autoplay
      ? Autoplay({
          delay: interval,
          stopOnInteraction: false,
          stopOnMouseEnter: pauseOnHover,
        })
      : null
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    autoplayRef.current ? [autoplayRef.current] : []
  );

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
    <div className={`relative ${className}`}>
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
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
      {showBtns ? (
        <>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 disabled:opacity-30 bg-black text-white flex justify-center items-center py-2 disabled:bg-gray-300 disabled:text-gray-600 px-1 disabled:cursor-not-allowed"
          >
            <ArrowBack fontSize="small" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 disabled:opacity-30 bg-black text-white flex justify-center items-center py-2 disabled:bg-gray-300 disabled:text-gray-600 px-1 disabled:cursor-not-allowed"
          >
            <ArrowForward fontSize="small" />
          </button>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Carousel;
