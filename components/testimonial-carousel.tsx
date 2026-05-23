"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Phụ huynh học sinh lớp 11",
    role: "THPT FPT Đà Nẵng",
    content: "Con tôi trước đây rất sợ môn Văn nhưng từ khi học với cô Hoàng Ngân, con chủ động đọc sách và viết nhật ký. Cô dạy rất tâm huyết và truyền cảm hứng thực sự.",
    avatar: "",
  },
  {
    id: 2,
    name: "Học sinh lớp 11",
    role: "THPT FPT Đà Nẵng",
    content: "Cô giải thích các tác phẩm văn học rất sinh động và gần gũi với cuộc sống. Nhờ cô mà em đạt điểm Giỏi môn Văn học kỳ II.",
    avatar: "",
  },
  {
    id: 3,
    name: "Học sinh lớp 10",
    role: "Quốc tế UKA Đà Nẵng",
    content: "Cô Hoàng Ngân không chỉ dạy kiến thức mà còn dạy chúng em cách cảm nhận cái đẹp trong văn học. Giờ Văn của cô luôn vui và đầy cảm hứng.",
    avatar: "",
  },
  {
    id: 4,
    name: "Phụ huynh học sinh lớp 12",
    role: "Đà Nẵng",
    content: "Con thi THPT Quốc gia được 9.0 điểm Văn — kết quả ngoài mong đợi. Cô Ngân dạy rất kiên nhẫn và nhiệt tình, cảm ơn cô rất nhiều!",
    avatar: "",
  },
  {
    id: 5,
    name: "Học sinh luyện thi vào 10",
    role: "THCS — Đà Nẵng",
    content: "Em đạt 8.75 điểm Văn trong kỳ thi vào lớp 10 nhờ được cô hướng dẫn chiến lược làm bài. Cô chữa bài rất kỹ và chỉ đúng chỗ cần sửa.",
    avatar: "",
  },
]

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_80%] lg:flex-[0_0_60%]"
            >
              <div className={cn(
                "relative rounded-2xl bg-card p-8 shadow-lg transition-all duration-500",
                selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-50"
              )}>
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center text-primary font-bold text-xl shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="rounded-full bg-card p-2 shadow-md transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="rounded-full bg-card p-2 shadow-md transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
