import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Liên hệ — Học Văn Cô Ngân",
  description:
    "Liên hệ với cô Hoàng Ngân để được tư vấn miễn phí về khoá học Ngữ văn THCS & THPT. Nhắn Zalo, email hoặc gặp trực tiếp tại Đà Nẵng.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <MessageCircle className="h-4 w-4" />
            Liên hệ &amp; tư vấn
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Liên hệ cô <span className="text-primary">Hoàng Ngân</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Nhắn tin để được tư vấn miễn phí — cô sẽ giúp bạn chọn khoá học phù hợp nhất với
            trình độ và mục tiêu học tập.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Zalo */}
            <a
              href="https://zalo.me/0359260520"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-10 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Zalo</div>
                <div className="text-primary font-medium mt-1">0359 260 520</div>
                <div className="text-sm text-muted-foreground mt-2">Phản hồi nhanh nhất</div>
                <div className="mt-4 text-sm font-medium text-primary group-hover:underline">
                  Nhắn tin ngay →
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:0359260520"
              className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-10 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Điện thoại</div>
                <div className="text-emerald-600 font-medium mt-1">0359 260 520</div>
                <div className="text-sm text-muted-foreground mt-2">Giờ làm việc: 8:00 – 21:00</div>
                <div className="mt-4 text-sm font-medium text-emerald-600 group-hover:underline">
                  Gọi ngay →
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hocvancongan@gmail.com"
              className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-10 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center sm:col-span-2 lg:col-span-1"
            >
              <div className="h-16 w-16 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-sky-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Email</div>
                <div className="text-sky-600 font-medium mt-1 text-sm break-all">
                  hocvancongan@gmail.com
                </div>
                <div className="text-sm text-muted-foreground mt-2">Phản hồi trong 24 giờ</div>
                <div className="mt-4 text-sm font-medium text-sky-600 group-hover:underline">
                  Gửi email →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 pb-16 md:pb-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            <div className="bg-card border rounded-2xl p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">Địa điểm</div>
              <div className="text-sm text-muted-foreground">Đà Nẵng</div>
              <div className="text-xs text-primary mt-2 font-medium">Dạy online &amp; offline</div>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div className="font-semibold text-foreground mb-1">Giờ dạy</div>
              <div className="text-sm text-muted-foreground">Thứ 2 – Chủ nhật</div>
              <div className="text-xs text-amber-600 mt-2 font-medium">Linh hoạt theo học sinh</div>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="font-semibold text-foreground mb-1">Tư vấn</div>
              <div className="text-sm text-muted-foreground">Miễn phí 100%</div>
              <div className="text-xs text-emerald-600 mt-2 font-medium">Không ràng buộc</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto text-pretty">
            Nhắn Zalo ngay để được tư vấn miễn phí và đăng ký khoá học phù hợp.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo ngay
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              asChild
            >
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
