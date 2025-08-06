import { Card } from "../Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Gallery() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex" >
        {[1, 2, 3].map((item) => (
          <CarouselItem key={item} className="flex justify-center">
            <Card />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-gray-900 w-11 h-11 text-[24px]"
      />
      <CarouselNext
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-gray-900 w-11 h-11 text-[24px]"
      />
    </Carousel>
  );
}
  