"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface GameGalleryProps {
  title: string;
  images: string[];
  hints: string[];
}

export function GameGallery({ title, images, hints }: GameGalleryProps) {
  return (
    <Carousel className="w-full max-w-3xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                        src={src}
                        alt={`${title} screenshot ${index + 1}`}
                        width={1280}
                        height={720}
                        className="object-cover w-full h-full"
                        data-ai-hint={hints[index] || ''}
                    />
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
