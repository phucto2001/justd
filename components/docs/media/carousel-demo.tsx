'use client'

import * as React from 'react'

import Image from 'next/image'
import { Carousel, CarouselButton, CarouselContent, CarouselHandler, CarouselItem } from 'ui'

export default function CarouselDemo() {
  return (
    <Carousel className="w-full [&_.xrkr]:h-56 [&_.xrkr]:overflow-hidden [&_.xrkr]:flex [&_.xrkr]:flex-col max-w-xs">
      <CarouselContent>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-1.jpg" alt="image 1" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-2.jpg" alt="image 2" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-3.jpg" alt="image 3" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-4.jpg" alt="image 4" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-5.jpg" alt="image 5" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-6.jpg" alt="image 6" width={400} height={300} />
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Image className="rounded-xl" src="/slides/slide-7.jpg" alt="image 7" width={400} height={300} />
        </CarouselItem>
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton slot="previous" />
        <CarouselButton slot="next" />
      </CarouselHandler>
    </Carousel>
  )
}