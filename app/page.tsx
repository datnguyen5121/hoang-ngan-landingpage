import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HoangNganCarousel } from "@/components/hoang-ngan-carousel"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageCircle,
  MapPin,
  Mail,
  Trophy,
  Target,
  Heart,
  NotebookPen,
  Feather,
  UsersRound,
  Mic,
  FileText,
  Lightbulb,
  Facebook,
} from "lucide-react"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[3fr_3fr] gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Giáo viên Ngữ văn THCS &amp; THPT
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground ">
                <span>Học Văn </span><span className="text-primary"> Cô Ngân</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
                <strong>Thạc sĩ Văn học Việt Nam</strong> — hơn 6 năm kinh nghiệm giảng dạy và phát triển chương trình Ngữ Văn tại các trường THCS, THPT Quốc tế tại Đà Nẵng.
                Là người phát triển học liệu và các phương pháp học, nghiên cứu bộ môn Ngữ Văn trong trường học. Với cô, Ngữ văn không chỉ là một môn thi bắt buộc, đó còn là: 
              </p>
               <blockquote className="mt-5 border-l-4 border-primary pl-4 text-md text-muted-foreground italic max-w-lg mx-auto lg:mx-0">
                  Tiếng nói của cảm xúc.
                  <br/>Hơi thở của thời đại.
                  <br/>Bức tranh cuộc sống.
                  <br/>Vũ khí của chính nghĩa.
               </blockquote>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2 font-semibold" asChild>
                  <a href="/courses" >
                    Xem khoá học ngay
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Liên hệ qua Zalo
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Thạc sĩ Văn học
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Khối 6 – 12 &amp; Luyện thi
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Online
                </span>
              </div>
            </div>

            {/* Right Carousel */}
            <div>
              <HoangNganCarousel />
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6+", label: "Năm kinh nghiệm", icon: Award },
              { value: "1000+", label: "Học sinh đã dạy", icon: Users },
              { value: "96%", label: "Học sinh hài lòng", icon: Star },
              { value: "800+", label: "Feedback tích cực", icon: Heart },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-card border border-border p-6">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Các khoá học của cô Hoàng Ngân
            </h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Chương trình giảng dạy bám sát chương trình mới của Bộ GD&amp;ĐT, kết hợp phương pháp hiện đại giúp học sinh hiểu sâu, nhớ lâu và yêu thích môn Văn.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Học sinh lớp 6-8 */}
            <div className="group h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 min-h-[56px]">Ngữ Văn lớp 6 - 8 </h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[72px]">
                Xây dựng nền tảng Ngữ văn cho các em học sinh THCS
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />Đọc hiểu văn bản theo đặc trưng thể loại</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />Viết đoạn văn, bài văn tự sự/miêu tả/biểu cảm/thuyết minh/nghị luận </li>
              </ul>

              <div className="mt-auto pt-4">
                <Button size="sm" className="w-full justify-center text-xs h-8 text-black" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Đăng ký qua Zalo
                  </a>
                </Button>
              </div>
            </div>

            {/* Luyện thi lớp 9 vào lớp 10 */}
            <div className="group h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 min-h-[56px]">Luyện thi Ngữ Văn lớp 9 lên lớp 10</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[72px]">
                Ôn luyện kiến thức Ngữ văn THCS, trang bị kĩ năng làm bài hiệu quả cho các em học sinh thi tuyển sinh lớp 9 lên lớp 10.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Đọc hiểu văn bản theo đặc trưng thể loại</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Viết đoạn văn, bài văn nghị luận xã hội & văn học</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Chiến thuật làm bài thi</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Luyện đề thi thử </li>
              </ul>

              <div className="mt-auto pt-4">
                <Button size="sm" className="w-full justify-center text-xs h-8 text-black" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Đăng ký qua Zalo
                  </a>
                </Button>
              </div>
            </div>

            {/* Học sinh THPT */}
            <div className="group h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <NotebookPen className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 min-h-[56px]">Ngữ Văn lớp 10-11</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[72px]">
                Chương trình Ngữ Văn chuyên sâu cho các em THPT
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0" />Đọc hiểu văn bản theo đặc trưng thể loại</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0" />Viết đoạn văn, bài văn nghị luận xã hội &amp; văn học</li>
              </ul>

              <div className="mt-auto pt-4">
                <Button size="sm" className="w-full justify-center text-xs h-8 text-black" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Đăng ký qua Zalo
                  </a>
                </Button>
              </div>
            </div>

            {/* Luyện thi THPT QG */}
            <div className="group h-full rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-rose-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 min-h-[56px]">Luyện thi THPT Quốc gia</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[72px]">
                Ôn luyện chuyên sâu 3 phần thi: Đọc hiểu, Nghị luận xã hội, Nghị luận văn học — bám sát cấu trúc đề thi thực tế.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Đọc hiểu văn bản theo đặc trưng thể loại</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Viết đoạn văn, bài văn nghị luận xã hội & văn học</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Luyện đề sát thi thử</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Chiến thuật làm bài thi</li>
              </ul>

              <div className="mt-auto pt-4">
                <Button size="sm" className="w-full justify-center text-xs h-8 text-black" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Đăng ký qua Zalo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <div className="relative bg-card rounded-2xl shadow-xl p-8 border border-border">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 mb-4">
                    <Star className="h-4 w-4" />
                    Thành tích nổi bật
                  </div>
                  <p className="text-muted-foreground text-sm">Một số kết quả học sinh đạt được</p>
                </div>
                <div className="space-y-3">
                  {[
                    { score: "9.0", label: "Điểm THPT QG Ngữ văn — Học sinh lớp 12", color: "bg-rose-100 text-rose-700" },
                    { score: "8.75", label: "Điểm thi vào 10 Ngữ văn — Học sinh lớp 9", color: "bg-amber-100 text-amber-700" },
                    { score: "8.5", label: "Điểm học kỳ Ngữ văn — Học sinh lớp 11", color: "bg-sky-100 text-sky-700" },
                    { score: "Top 3", label: "Học sinh đạt giải HSG cấp trường", color: "bg-emerald-100 text-emerald-700" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl bg-muted/40">
                      <span className={`text-lg font-bold px-3 py-1 rounded-lg shrink-0 ${item.color}`}>{item.score}</span>
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground">
                <Lightbulb className="h-4 w-4" />
                Tại sao chọn cô Hoàng Ngân?
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Học đúng — Hiểu sâu — Thi tốt
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Cô Hoàng Ngân mang đến phương pháp giảng dạy Ngữ văn khoa học, kết hợp kiến thức học thuật từ bậc Thạc sĩ
                với kinh nghiệm thực tiễn tại các trường THPT hàng đầu Đà Nẵng.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  Thạc sĩ Văn học Việt Nam — nền tảng học thuật vững chắc
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  Giảng dạy tại THPT FPT &amp; Quốc tế UKA Đà Nẵng
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  Bám sát chương trình mới của Bộ GD&amp;ĐT
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  Lớp học nhóm nhỏ, cá nhân hóa từng học sinh
                </li>
              </ul>
              <Button className="mt-8 gap-2" asChild>
                <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Tư vấn miễn phí qua Zalo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-primary" >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Liên hệ &amp; đăng ký học
            </h2>
            <p className="mt-4 text-lg  text-pretty text-gray-900">
              Nhắn tin cho cô Ngân để được tư vấn miễn phí về khoá học phù hợp với mục tiêu của bạn.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://zalo.me/0359260520"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Zalo</div>
                <div className="text-sm text-muted-foreground mt-1">0359 260 520</div>
                <div className="text-xs text-green-600 mt-2 font-semibold">Nhắn tin ngay →</div>
              </div>
            </a>
            <a
              href="mailto:hocvancongan@gmail.com"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-7 w-7 text-yellow-500" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground mt-1 break-all">hocvancongan@gmail.com</div>
                <div className="text-xs text-yellow-600 mt-2  font-semibold">Gửi email →</div>
              </div>
            </a>
            <div className="cursor-pointer flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="h-7 w-7 shrink-0 text-blue-500" />

              </div>
              <div>
                <div className="font-semibold text-foreground">Facebook</div>
                                <div className="text-sm text-muted-foreground mt-1 break-all">Hoàng Ngân</div>

                <div className="text-xs text-blue-500 mt-2 font-semibold">Nhắn tin ngay </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
