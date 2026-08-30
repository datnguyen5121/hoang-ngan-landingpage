import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import {
  Star,
  MessageCircle,
  ArrowRight,
  Quote,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Đánh giá từ học sinh — Học Văn Cô Ngân",
  description:
    "Học sinh và phụ huynh nói gì về cô Hoàng Ngân? Xem đánh giá thực tế từ học sinh THCS & THPT đã học Ngữ văn cùng cô.",
}

const reviews = [
  {
    name: "Phụ huynh học sinh lớp 11",
    role: "THPT FPT Đà Nẵng",
    content:
      "Con tôi trước đây rất sợ môn Văn nhưng từ khi học với cô Hoàng Ngân, con chủ động đọc sách và viết nhật ký. Cô dạy rất tâm huyết và truyền cảm hứng thực sự.",
    rating: 5,
    grade: "Lớp 11",
  },
  {
    name: "Học sinh lớp 11",
    role: "THPT FPT Đà Nẵng",
    content:
      "Cô giải thích các tác phẩm văn học rất sinh động và gần gũi với cuộc sống. Nhờ cô mà em đạt điểm Giỏi môn Văn học kỳ II.",
    rating: 5,
    grade: "Lớp 11",
  },
  {
    name: "Học sinh lớp 10",
    role: "Quốc tế UKA Đà Nẵng",
    content:
      "Cô Hoàng Ngân không chỉ dạy kiến thức mà còn dạy chúng em cách cảm nhận cái đẹp trong văn học. Giờ Văn của cô luôn vui và đầy cảm hứng.",
    rating: 5,
    grade: "Lớp 10",
  },
  {
    name: "Học sinh luyện thi vào 10",
    role: "THCS — Đà Nẵng",
    content:
      "Em đạt 8.75 điểm Văn trong kỳ thi vào lớp 10 nhờ được cô hướng dẫn chiến lược làm bài. Cô chữa bài rất kỹ và chỉ đúng chỗ cần sửa.",
    rating: 5,
    grade: "Lớp 9",
  },
  {
    name: "Phụ huynh học sinh lớp 12",
    role: "Đà Nẵng",
    content:
      "Cô Ngân dạy con tôi rất kiên nhẫn và nhiệt tình. Con thi THPT Quốc gia được 9.0 điểm Văn — kết quả ngoài mong đợi. Cảm ơn cô rất nhiều!",
    rating: 5,
    grade: "Lớp 12",
  },
  {
    name: "Học sinh lớp 6-8",
    role: "Đà Nẵng",
    content:
      "Trước em không biết viết văn, cô dạy em từng bước từ lập dàn ý đến viết bài. Bây giờ em tự tin hơn rất nhiều và không còn sợ môn Văn nữa.",
    rating: 5,
    grade: "Lớp 8",
  },
]

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Star className="h-4 w-4" />
            Đánh giá học sinh
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Học sinh nói gì về <span className="text-primary">cô Hoàng Ngân?</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hàng trăm học sinh THCS &amp; THPT đã cải thiện điểm số và yêu thích môn Văn hơn sau khi học cùng cô.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Học sinh đã học</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Hài lòng</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="flex items-center gap-1 justify-center">
                <span className="text-3xl font-bold text-foreground">5.0</span>
                <Star className="h-6 w-6 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Cảm nhận nổi bật
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-8 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Tất cả đánh giá
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-card border rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground text-sm truncate">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground shrink-0">
                    {review.grade}
                  </span>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="relative flex-1">
                  <Quote className="absolute -top-1 -left-1 h-5 w-5 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Bạn muốn trải nghiệm không?
          </h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Liên hệ cô Hoàng Ngân để được tư vấn miễn phí và tìm khoá học phù hợp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo cô Ngân
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/courses">
                Xem khoá học
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
