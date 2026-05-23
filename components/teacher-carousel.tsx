"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/giang-vien/minavatar.JPG",
    caption: "Cô Lê Minh Hương",
  },
  {
    id: 2,
    image: "/giang-vien/minaodai.JPG",
    caption: "Cô Lê Minh Hương",
  },
  
  {
    id: 3,
    image: "/giang-vien/mingraduate.jpg",
    caption: "Tốt nghiệp Đại Học Ngôn ngữ Trung Quốc Tại Đại Học Hà Nội",
  },
  {
    id: 4,
    image: "/giang-vien/minmeeting.png",
    caption: "Theo học Thạc Sỹ Ngôn Ngữ Trung Quốc tại Đại Học Hà Nội",
  },
  {
    id: 5,
    image: "/giang-vien/minteaching.png",
    caption: "Giờ Học Thực Tế Cùng Học Viên",
  },
]

export function TeacherCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  const scrollTo = React.useCallback(
    (index: number) => { if (emblaApi) emblaApi.scrollTo(index) },
    [emblaApi]
  )

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-105 md:h-125 bg-primary/5 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-xl rounded-2xl block"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 pb-5 pt-8 bg-linear-to-t from-black/40 to-transparent text-center">
                  <p className="text-sm font-medium text-white/90 drop-shadow">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
