import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Star,
  Users,
  BookOpen,
  Award,
  MessageCircle,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Quote,
  Mic,
  Video,
  NotebookPen,
  UsersRound,
  Feather,
} from "lucide-react"
import { HoangNganCarousel, Slide } from "@/components/hoang-ngan-carousel"

export const metadata: Metadata = {
  title: 'Cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Giáo viên Ngữ văn',
  description:
    'Portfolio & khoá học của cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Thạc sĩ Văn học Việt Nam, giáo viên Ngữ văn với hơn 4 năm kinh nghiệm tại THPT FPT Đà Nẵng và Quốc tế UKA Đà Nẵng.',
  alternates: {
    canonical: '/giang-vien',
  },
  openGraph: {
    type: 'profile',
    locale: 'vi_VN',
    url: '/giang-vien',
    title: 'Cô Nguyễn Lê Hoàng Yến (Hoàng Ngân) — Giáo viên Ngữ văn',
    description:
      'Thạc sĩ Văn học Việt Nam, giáo viên Ngữ văn với hơn 4 năm kinh nghiệm. Feedback 3.8/4.0 — top 3 toàn trường.',
    images: [
      {
        url: '/hoang-ngan/personel.jpg',
        width: 800,
        height: 800,
        alt: 'Cô Nguyễn Lê Hoàng Yến — Giáo viên Ngữ văn',
      },
    ],
  },
}

  const hoangNganSlides: Slide[] = [
      {
        id: 2,
        image: "/hoang-ngan/hinh1.jpg",
        caption: "Giáo viên Ngữ Văn",
      },
      {
        id: 3,
        image: "/hoang-ngan/bvthacsi.jpg",
        caption: "Bảo vệ luận văn Thạc sĩ Văn học tại Đại học Đà Nẵng",
      },
      {
        id: 4,
        image: "/hoang-ngan/hinh3.jpg",
        caption: "Hơn 6 năm kinh nghiệm giảng dạy THCS & THPT tại Đà Nẵng",
      },
      {
        id: 5,
        image: "/hoang-ngan/hinh4.jpg",
        caption: "Hoạt động tuyển sinh & tư vấn học sinh",
      },
    ]

const achievements = [
  { icon: BookOpen, value: "6+", label: "Năm kinh nghiệm giảng dạy" },
  { icon: Star, value: "3.8/4.0", label: "Feedback học sinh (Top 3 trường)" },
  { icon: Users, value: "96%+", label: "Học sinh đạt điểm Giỏi (HK II 2021–22)" },
  { icon: Award, value: "ThS", label: "Thạc sĩ Văn học Việt Nam" },
]

const courses = [
  {
    title: "Ngữ văn khối 8",
    level: "THCS",
    duration: "1 học kỳ",
    target: "Học sinh lớp 6-8",
    description:
      "Nắm vững kiến thức Ngữ văn THCS, rèn luyện kỹ năng đọc hiểu, viết đoạn văn và cảm thụ tác phẩm văn học.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Ngữ văn khối 9 — Luyện thi vào 10",
    level: "THCS",
    duration: "1 học kỳ",
    target: "Học sinh lớp 9",
    description:
      "Ôn luyện bài bản toàn bộ chương trình Ngữ văn THCS, luyện đề thi vào lớp 10 — chiến lược viết bài hiệu quả.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Ngữ văn khối 10",
    level: "THPT",
    duration: "1 học kỳ",
    target: "Học sinh lớp 10",
    description:
      "Xây dựng nền tảng Ngữ văn THPT vững chắc: đọc hiểu văn bản, nghị luận xã hội và nghị luận văn học theo chương trình mới.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Ngữ văn khối 11",
    level: "THPT",
    duration: "1 học kỳ",
    target: "Học sinh lớp 11",
    description:
      "Phân tích chuyên sâu các tác phẩm văn học lớp 11, rèn luyện kỹ năng viết nghị luận xã hội và nghị luận văn học.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Luyện thi THPT Quốc gia",
    level: "THPT",
    duration: "6 tháng",
    target: "Học sinh lớp 12",
    description:
      "Ôn luyện toàn diện 3 phần: Đọc hiểu, Nghị luận xã hội, Nghị luận văn học — luyện đề thi thử sát cấu trúc thực tế.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "Kỹ năng viết văn cơ bản",
    level: "Mọi cấp độ",
    duration: "2 tháng",
    target: "Học sinh THCS – THPT",
    description:
      "Khoá học giúp học sinh hình thành tư duy viết, biết cách triển khai ý, diễn đạt lưu loát và gây ấn tượng với bài văn.",
    color: "bg-violet-100 text-violet-700",
  },
]

const personalProjects = [
  {
    icon: Mic,
    title: "Podcast Văn học",
    description:
      "Các file ghi âm phân tích bài giảng, hướng dẫn cách học hiểu môn Ngữ văn THPT và THCS — nghe mọi lúc, mọi nơi.",
  },
  {
    icon: Video,
    title: "Video bài giảng trực tuyến",
    description:
      "Các video bài giảng chất lượng cao giúp học sinh xem đi xem lại theo tiến độ của mình.",
  },
  {
    icon: UsersRound,
    title: "Group học tốt môn Văn",
    description:
      "Cộng đồng chia sẻ tips viết văn, giải đáp thắc mắc, cập nhật tài liệu học văn mới nhất.",
  },
  {
    icon: NotebookPen,
    title: "Sổ tay tổng hợp kiến thức",
    description:
      "Các sổ tay được biên soạn công phu, tổng hợp kiến thức trọng tâm giúp học sinh học Văn dễ dàng hơn.",
  },
]

const timeline = [
  { year: "2023 – 2024", event: "Giáo viên Ngữ văn — Quốc tế UKA Đà Nẵng (khối 8, 10)" },
  { year: "2020 – 2022", event: "Giáo viên Ngữ văn — THPT FPT Đà Nẵng (khối 10, 11) · Feedback 3.8/4.0 Top 3 trường" },
  { year: "2016 – 2020", event: "Tốt nghiệp loại Giỏi ngành Sư phạm Ngữ Văn — Đại học Sư phạm Đà Nẵng · GPA 3.49/4.0" },
  { year: "2012 – 2015", event: "THPT Phan Châu Trinh · Thành viên CLB Văn học" },
  { year: "2008 – 2012", event: "THCS Lý Tự Trọng · Giải KK Học sinh giỏi Văn TP Đà Nẵng (2012)" },
  { year: "2003 – 2008", event: "Tiểu học Nguyễn Tri Phương · Giải Nhì Viết chữ đẹp TP Đà Nẵng (2007)" },
]

const hanhtrinh = [
  { year: "2024", event: "Thạc sĩ Văn học Việt Nam (Tốt nghiệp loại Giỏi)" },
  { year: "2016 – 2020", event: "Cử nhân Sư phạm Ngữ văn – ĐH Sư phạm Đà Nẵng (Tốt nghiệp loại Giỏi, GPA: 3.49/4.0, nhận học bổngdành cho Sinh viên Xuất sắc)." },
  { year: "2003 – 2008", event: "Đạt giải cuộc thi Viết chữ đẹp & Học sinh giỏi Văn cấp Quận/Thành phố " },
]

const testimonials = [
  {
    name: "Phụ huynh học sinh khối 11",
    role: "THPT FPT Đà Nẵng",
    content:
      "Con tôi trước đây rất sợ môn Văn nhưng từ khi học với cô Hoàng Ngân, con chủ động đọc sách và viết nhật ký. Cô dạy rất tâm huyết và truyền cảm hứng thực sự.",
    rating: 5,
  },
  {
    name: "Học sinh lớp 11",
    role: "THPT FPT Đà Nẵng",
    content:
      "Cô giải thích các tác phẩm văn học rất sinh động và gần gũi với cuộc sống. Nhờ cô mà em đạt điểm Giỏi môn Văn học kỳ II.",
    rating: 5,
  },
  {
    name: "Học sinh lớp 10",
    role: "Quốc tế UKA Đà Nẵng",
    content:
      "Cô Yến không chỉ dạy kiến thức mà còn dạy chúng em cách cảm nhận cái đẹp trong văn học. Giờ Văn của cô luôn vui và đầy cảm hứng.",
    rating: 5,
  },
]

export default function GiangVienPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
                <Feather className="h-4 w-4 mr-2" />
                Giáo viên Ngữ văn
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Cô{" "}
                <span className="text-primary">Hoàng Ngân</span>
              </h1>
              <p className="mt-2 text-lg text-muted-foreground font-medium">
                Nguyễn Lê Hoàng Yến
              </p>
              <p className="mt-1 text-base text-muted-foreground font-medium">
                Thạc sĩ Văn học Việt Nam · Giáo viên Ngữ văn
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Với <strong className="text-foreground">hơn 6 năm kinh nghiệm</strong> giảng dạy cho học sinh THCS và THPT, là người chuyên nghiên cứu phương pháp học hiện đại và phát triển học liệu Ngữ văn. Với cô, <strong>Ngữ Văn</strong> không chỉ là một môn thi bắt buộc, đó còn là: 
              </p>
              <blockquote className="mt-5 border-l-4 border-primary pl-4 text-sm text-muted-foreground italic max-w-lg mx-auto lg:mx-0">
                Tiếng nói của cảm xúc – Biết lắng nghe và thấu hiểu bản thân. <br/>
Hơi thở của thời đại – Kết nối văn học với dòng chảy lịch sử. <br/>
Bức tranh cuộc sống – Nhìn cuộc đời bằng lăng kính đa sắc màu. <br/>
Vũ khí của chính nghĩa – Nuôi dưỡng sự công bằng và lòng trắc ẩn.
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button size="lg" style={{ color: "white" }} asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Liên hệ tư vấn ngay
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:hocvancongan@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Gửi email
                  </a>
                </Button>
              </div>
              {/* Contact Info */}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                <a
                  href="tel:0359260520"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  0359 260 520
                </a>
                <a
                  href="mailto:hocvancongan@gmail.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hocvancongan@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  Sơn Trà, Đà Nẵng
                </span>
              </div>
            </div>

            {/* Right: Teacher Carousel */}
            <HoangNganCarousel slides={hoangNganSlides} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Giới thiệu về{" "}
                <span className="text-primary">cô Hoàng Ngân</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cô <strong className="text-foreground">Nguyễn Lê Hoàng Yến</strong> (Hoàng Ngân) là giáo viên Ngữ văn với hơn{" "}
                  <strong className="text-foreground">Hơn 6 năm kinh nghiệm</strong> giảng dạy tại THPT FPT Đà Nẵng và Trường Quốc tế UKA Đà Nẵng. Cô tốt nghiệp{" "}
                  <strong className="text-foreground">loại Giỏi ngành Sư phạm Ngữ Văn</strong> — Đại học Sư phạm Đà Nẵng (GPA 3.49/4.0) và là{" "}
                  <strong className="text-foreground">Thạc sĩ Văn học Việt Nam</strong>.
                </p>
                <p>
                  Trong suốt quá trình giảng dạy, cô Hoàng Ngân luôn được học sinh yêu quý với{" "}
                  <strong className="text-foreground">điểm feedback 3.8/4.0 — top 3 toàn trường</strong>. Học kỳ II năm học 2021–2022, hơn{" "}
                  <strong className="text-foreground">60% học sinh khối 11</strong> đạt điểm Giỏi môn Ngữ văn.
                </p>
                <p>
                  Cô là người phát triển học liệu và phương pháp giảng dạy sáng tạo — từ các dự án học tập như{" "}
                  <em>"Bởi vì con có mẹ"</em>, <em>"Sống như những đoá hoa"</em>, <em>"Thư gửi tuổi 18"</em> đến việc xây dựng nền tảng học Văn trực tuyến với Podcast, video bài giảng và sổ tay kiến thức.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Ngữ văn THCS & THPT",
                  "Luyện thi THPT Quốc gia",
                  "Kỹ năng viết nghị luận",
                  "Phân tích tác phẩm văn học",
                  "Học liệu Podcast & video",
                  "Phương pháp dạy học sáng tạo",
                  "Dự án học tập thực tiễn",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Hành trình học vấn & sự nghiệp</h3>
              <div className="relative space-y-5 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
                {timeline.map(({ year, event }) => (
                  <div key={year} className="relative">
                    <div className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="bg-card border rounded-xl px-4 py-3">
                      <span className="text-xs font-bold text-primary">{year}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{event}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Kỹ năng</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tiếng Anh B2", "MS Office", "Thiết kế sơ đồ Mindmap", "Thiết kế học liệu", "Giảng dạy trực tuyến"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dự án phát triển{" "}
              <span className="text-primary">học liệu Ngữ văn</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cô Hoàng Ngân đang triển khai các dự án học liệu mới nhằm giúp học sinh học Văn dễ dàng, hiệu quả và hứng thú hơn.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalProjects.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card border rounded-2xl p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Học sinh nói gì về{" "}
              <span className="text-primary">cô Hoàng Ngân</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border rounded-2xl p-6 relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.content}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dự án học tập thực tế{" "}
              <span className="text-primary">nổi bật</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Hơn <strong className="text-foreground">96% học sinh</strong> tham gia các dự án học tập sáng tạo do cô Hoàng Ngân thiết kế và triển khai.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '"Bởi vì con có mẹ"',
                desc: "Nuôi dưỡng trí tuệ cảm xúc, rèn kỹ năng viết văn biểu cảm, tự sự.",
              },
              {
                title: '"Sống như những đoá hoa"',
                desc: "Truyền cảm hứng sống đẹp, phục vụ tư liệu thực tế cho bài nghị luận xã hội.",
              },
              {
                title: '"Thư gửi tuổi 18"',
                desc: "Nuôi dưỡng trí tuệ cảm xúc, rèn kỹ năng viết văn biểu cảm, tự sự.",
              },
              {
                title: '"Sách ơi mở ra"',
                desc: "Phát triển tư duy phản biện, kỹ năng đọc hiểu chuyên sâu.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sẵn sàng học cùng cô{" "}
            <span className="text-primary">Hoàng Ngân</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Đăng ký tư vấn miễn phí để được cô Hoàng Ngân hỗ trợ xây dựng lộ trình học Ngữ văn phù hợp với mục tiêu của bạn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" style={{ color: "white" }} asChild>
              <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Đăng ký tư vấn miễn phí ngay
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
