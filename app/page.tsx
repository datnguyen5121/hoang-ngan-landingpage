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
} from "lucide-react"

export default function HomePage() {
  const hanhtrinh = [
  { year: "2024", event: "Thạc sĩ Văn học Việt Nam (Tốt nghiệp loại Giỏi)" },
  { year: "2016 – 2020", event: "Cử nhân Sư phạm Ngữ văn – ĐH Sư phạm Đà Nẵng (Tốt nghiệp loại Giỏi, GPA: 3.49/4.0, nhận học bổngdành cho Sinh viên Xuất sắc)." },
  { year: "2003 – 2008", event: "Đạt giải cuộc thi Viết chữ đẹp & Học sinh giỏi Văn cấp Quận/Thành phố " },
]
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Giáo viên Ngữ văn THCS &amp; THPT
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
                Học Văn cùng
                <span className="text-primary"> Cô Hoàng Ngân</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
                <strong>Thạc sĩ Văn học Việt Nam</strong> — hơn 6 năm giảng dạy tại THPT FPT và Quốc tế UKA Đà Nẵng.
                Là người chuyên nghiên cứu phương pháp học hiện đại và phát triển học liệu Ngữ văn. Với cô, Ngữ văn không chỉ là một môn thi bắt buộc, đó còn là: 
              </p>
               <blockquote className="mt-5 border-l-4 border-primary pl-4 text-sm text-muted-foreground italic max-w-lg mx-auto lg:mx-0">
                  Tiếng nói của cảm xúc – Biết lắng nghe và thấu hiểu bản thân.
                  <br/>Hơi thở của thời đại – Kết nối văn học với dòng chảy lịch sử.
                  <br/>Bức tranh cuộc sống – Nhìn cuộc đời bằng lăng kính đa sắc màu.
                  <br/>Vũ khí của chính nghĩa – Nuôi dưỡng sự công bằng và lòng trắc ẩn.
               </blockquote>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/courses">
                    Xem khoá học
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Liên hệ ngay qua Zalo
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
                  Khối 8 – 12 &amp; Luyện thi
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Đà Nẵng &amp; Online
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
              { value: "500+", label: "Học sinh đã dạy", icon: Users },
              { value: "95%", label: "Học sinh hài lòng", icon: Star },
              { value: "100+", label: "Feedback tích cực", icon: Heart },
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
              Phù hợp cho mọi học sinh
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Dù bạn đang học THCS hay chuẩn bị cho kỳ thi quan trọng, cô Hoàng Ngân đều có lộ trình phù hợp.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Học sinh lớp 8 */}
            <div className="group rounded-2xl border border-border bg-card p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Học sinh lớp 8</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Nắm vững kiến thức Ngữ văn THCS, phát triển kỹ năng đọc hiểu và viết đoạn văn cảm thụ.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />Đọc hiểu văn bản</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />Viết đoạn văn nghị luận</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />Cảm thụ tác phẩm văn học</li>
              </ul>
            </div>

            {/* Luyện thi vào lớp 10 */}
            <div className="group rounded-2xl border border-border bg-card p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Luyện thi vào lớp 10</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ôn luyện toàn diện Ngữ văn THCS, chiến lược làm bài hiệu quả cho kỳ thi tuyển sinh lớp 10.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Hệ thống kiến thức toàn diện</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Luyện đề thi thử</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />Chiến thuật làm bài thi</li>
              </ul>
            </div>

            {/* Học sinh THPT */}
            <div className="group rounded-2xl border border-border bg-card p-6 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <NotebookPen className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Học sinh THPT</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Theo sát chương trình mới của Bộ GD&amp;ĐT lớp 10–11, rèn luyện kỹ năng nghị luận xã hội và văn học.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0" />Chương trình mới 2018</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0" />Nghị luận xã hội &amp; văn học</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0" />Kỹ năng viết bài hoàn chỉnh</li>
              </ul>
            </div>

            {/* Luyện thi THPT QG */}
            <div className="group rounded-2xl border border-border bg-card p-6 hover:border-rose-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Luyện thi THPT Quốc gia</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ôn luyện chuyên sâu 3 phần thi: Đọc hiểu, Nghị luận xã hội, Nghị luận văn học — sát cấu trúc thực tế.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Đọc hiểu &amp; nghị luận XH</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Phân tích tác phẩm văn học</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />Luyện đề sát đề thực tế</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 <section className="py-40 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
           <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Hành trình học thuật & Thành tích nổi bật của Cô Ngân</h3>
              <div className="relative space-y-5 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
                {hanhtrinh.map(({ year, event }) => (
                  <div key={year} className="relative">
                    <div className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="bg-card border rounded-xl px-4 py-3">
                      <span className="text-xs font-bold text-primary">{year}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
                <div>
                </div>
              {/* Skills */}
              
            </div>
        </div>
        </section>
      {/* Teaching Philosophy Highlight */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                Triết lý giảng dạy
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Văn không chỉ là môn thi — đó là ngôn ngữ của trái tim
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Cô Hoàng Ngân tin rằng mỗi học sinh đều có khả năng cảm nhận và diễn đạt vẻ đẹp của ngôn từ.
                Phương pháp giảng dạy của cô tập trung vào việc{" "}
                <strong>kết nối cảm xúc với tác phẩm</strong>, từ đó xây dựng kỹ năng viết tự nhiên và bền vững.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Phân tích tác phẩm từ cảm xúc đến kỹ thuật
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Xây dựng tư duy viết logic, mạch lạc
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Luyện tập qua phản hồi cá nhân hóa
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Tạo môi trường học tích cực, không áp lực
                </li>
              </ul>
              <Button className="mt-8 gap-2" asChild>
                <a href="/giang-vien">
                  Tìm hiểu thêm về cô Hoàng Ngân
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative bg-card rounded-2xl shadow-xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Feather className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Kỹ năng viết văn</h4>
                    <p className="text-sm text-muted-foreground">Writing Skills Framework</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Cảm nhận tác phẩm", desc: "Đọc, nghe và phân tích tầng sâu của văn bản" },
                    { step: "02", title: "Lập dàn ý tư duy", desc: "Xây dựng luận điểm mạch lạc, có hệ thống" },
                    { step: "03", title: "Viết & hoàn thiện", desc: "Diễn đạt linh hoạt, biểu cảm và chính xác" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-3 rounded-xl bg-muted/50">
                      <span className="text-2xl font-bold text-primary/40 w-8 shrink-0">{item.step}</span>
                      <div>
                        <div className="font-medium text-foreground text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
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

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Phương pháp giảng dạy toàn diện
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Học Văn Cô Ngân áp dụng phương pháp hiện đại, bám sát chương trình mới giúp học sinh học Ngữ văn hiệu quả và tự tin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={FileText}
              title="Bám sát chương trình mới"
              description="Nội dung giảng dạy bám chặt chương trình Ngữ văn 2018 của Bộ GD&ĐT, đảm bảo học sinh không bị lạc hướng."
              iconClassName="bg-cyan-100 text-cyan-600"
            />
            <FeatureCard
              icon={Feather}
              title="Luyện viết từng bước"
              description="Hướng dẫn chi tiết cách lập dàn ý, triển khai luận điểm và diễn đạt linh hoạt — từ cơ bản đến nâng cao."
              iconClassName="bg-teal-100 text-teal-600"
            />
            <FeatureCard
              icon={BookOpen}
              title="Phân tích tác phẩm chuyên sâu"
              description="Khám phá giá trị nội dung, nghệ thuật của từng tác phẩm văn học trong chương trình một cách hệ thống."
              iconClassName="bg-sky-100 text-sky-600"
            />
            <FeatureCard
              icon={Target}
              title="Luyện đề & chiến lược thi"
              description="Thực hành với đề thi các năm, nắm vững cấu trúc đề và chiến thuật phân bổ thời gian làm bài tối ưu."
              iconClassName="bg-amber-100 text-amber-600"
            />
            <FeatureCard
              icon={UsersRound}
              title="Học nhóm nhỏ & 1–1"
              description="Lớp học sĩ số nhỏ (tối đa 5 học sinh) hoặc kèm riêng, đảm bảo mỗi học sinh được chú ý đầy đủ."
              iconClassName="bg-orange-100 text-orange-600"
            />
            <FeatureCard
              icon={Mic}
              title="Diễn đạt & thuyết trình"
              description="Rèn luyện kỹ năng trình bày miệng, thuyết trình văn bản — phát triển tư duy ngôn ngữ toàn diện."
              iconClassName="bg-indigo-100 text-indigo-600"
            />
            <FeatureCard
              icon={Heart}
              title="Truyền cảm hứng yêu Văn"
              description="Tạo ra niềm yêu thích đọc sách và cảm thụ văn học để học sinh không chỉ học tốt mà còn yêu môn Văn."
              iconClassName="bg-purple-100 text-purple-600"
            />
            <FeatureCard
              icon={NotebookPen}
              title="Tài liệu cá nhân hóa"
              description="Học liệu bài tập và ghi chú được cô biên soạn riêng, phù hợp với từng cấp độ và mục tiêu học sinh."
              iconClassName="bg-emerald-100 text-emerald-600"
            />
            <FeatureCard
              icon={Trophy}
              title="Theo dõi tiến độ"
              description="Cô Ngân theo dõi sát sao sự tiến bộ của từng học sinh và điều chỉnh kế hoạch giảng dạy kịp thời."
              iconClassName="bg-rose-100 text-rose-600"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Các khoá học của <span className="text-primary">cô Hoàng Ngân</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Chương trình giảng dạy bám sát chương trình mới của Bộ GD&amp;ĐT, kết hợp phương pháp hiện đại giúp học sinh hiểu sâu, nhớ lâu và yêu thích môn Văn.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ngữ văn khối 8",
                level: "THCS",
                duration: "1 học kỳ",
                target: "Học sinh lớp 8",
                description: "Nắm vững kiến thức Ngữ văn THCS, rèn luyện kỹ năng đọc hiểu, viết đoạn văn và cảm thụ tác phẩm văn học.",
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                title: "Ngữ văn khối 9 — Luyện thi vào 10",
                level: "THCS",
                duration: "1 học kỳ",
                target: "Học sinh lớp 9",
                description: "Ôn luyện bài bản toàn bộ chương trình Ngữ văn THCS, luyện đề thi vào lớp 10 — chiến lược viết bài hiệu quả.",
                color: "bg-amber-100 text-amber-700",
              },
              {
                title: "Ngữ văn khối 10",
                level: "THPT",
                duration: "1 học kỳ",
                target: "Học sinh lớp 10",
                description: "Xây dựng nền tảng Ngữ văn THPT vững chắc: đọc hiểu văn bản, nghị luận xã hội và nghị luận văn học theo chương trình mới.",
                color: "bg-sky-100 text-sky-700",
              },
              {
                title: "Ngữ văn khối 11",
                level: "THPT",
                duration: "1 học kỳ",
                target: "Học sinh lớp 11",
                description: "Phân tích chuyên sâu các tác phẩm văn học lớp 11, rèn luyện kỹ năng viết nghị luận xã hội và nghị luận văn học.",
                color: "bg-sky-100 text-sky-700",
              },
              {
                title: "Luyện thi THPT Quốc gia",
                level: "THPT",
                duration: "6 tháng",
                target: "Học sinh lớp 12",
                description: "Ôn luyện toàn diện 3 phần: Đọc hiểu, Nghị luận xã hội, Nghị luận văn học — luyện đề thi thử sát cấu trúc thực tế.",
                color: "bg-rose-100 text-rose-700",
              },
              {
                title: "Kỹ năng viết văn cơ bản",
                level: "Mọi cấp độ",
                duration: "2 tháng",
                target: "Học sinh THCS – THPT",
                description: "Khoá học giúp học sinh hình thành tư duy viết, biết cách triển khai ý, diễn đạt lưu loát và gây ấn tượng với bài văn.",
                color: "bg-violet-100 text-violet-700",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="bg-card border rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.color}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {course.target}
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8" asChild>
                    <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                      Đăng ký ngay
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a href="/giang-vien" className="gap-2 inline-flex items-center">
                Xem đầy đủ &amp; liên hệ cô Hoàng Ngân
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Học sinh nói gì về cô Hoàng Ngân?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Hàng trăm học sinh đã cải thiện điểm số và yêu thích môn Văn hơn sau khi học cùng cô Hoàng Ngân.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Liên hệ &amp; đăng ký học
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Nhắn tin cho cô Hoàng Ngân để được tư vấn miễn phí về khoá học phù hợp với mục tiêu của bạn.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://zalo.me/0359260520"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Zalo</div>
                <div className="text-sm text-muted-foreground mt-1">0359 260 520</div>
                <div className="text-xs text-primary mt-2 font-medium">Nhắn tin ngay →</div>
              </div>
            </a>
            <a
              href="mailto:hocvancongan@gmail.com"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-7 w-7 text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground mt-1 break-all">hocvancongan@gmail.com</div>
                <div className="text-xs text-sky-600 mt-2 font-medium">Gửi email →</div>
              </div>
            </a>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center">
              <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <MapPin className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Địa điểm</div>
                <div className="text-sm text-muted-foreground mt-1">Đà Nẵng</div>
                <div className="text-xs text-emerald-600 mt-2 font-medium">Dạy online &amp; offline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Sẵn sàng học Văn cùng cô Hoàng Ngân?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto text-pretty">
            Đăng ký ngay hôm nay để được tư vấn miễn phí và chọn khoá học phù hợp với mục tiêu của bạn.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo ngay
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="/giang-vien">
                Xem hồ sơ cô Hoàng Ngân
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
