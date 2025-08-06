import { useContext, useEffect } from "react";
import { Card } from "../Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { CatContext } from "../../context/CatContext";
import { CardSkeleton } from "../CardSkeleton";

export default function Gallery() {
  const { cats, vote, hasVoted, fetchCats, loading } = useContext(CatContext)

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    loading ?
      <CardSkeleton />
      :
      <Carousel className="w-full">
        <CarouselContent className="flex" >
          {cats.map((cat) => (
            <CarouselItem key={cat.id} className="flex justify-center">
              <Card
                cat={cat}
                onVote={vote}
                voted={hasVoted(cat.id)}
              />
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
  