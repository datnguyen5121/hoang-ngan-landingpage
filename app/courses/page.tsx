import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Target,
  Trophy,
  NotebookPen,
  Feather,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Khoá học Ngữ văn — Học Văn Cô Ngân",
  description:
    "Các khoá học Ngữ văn THCS & THPT của cô Hoàng Ngân — Thạc sĩ Văn học Việt Nam. Ngữ văn khối 8, 9, 10, 11, luyện thi THPT Quốc gia và kỹ năng viết văn.",
}

const courses = [
  {
    title: "Ngữ văn khối 8",
    level: "THCS",
    duration: "1 học kỳ",
    target: "Học sinh lớp 6-8",
    sessions: "3 buổi/tuần",
    description:
      "Nắm vững kiến thức Ngữ văn THCS, rèn luyện kỹ năng đọc hiểu, viết đoạn văn và cảm thụ tác phẩm văn học.",
    highlights: [
      "Đọc hiểu văn bản nghị luận & văn học",
      "Viết đoạn văn cảm thụ tác phẩm",
      "Ôn tập toàn bộ chương trình lớp 8",
      "Bài tập & luyện đề học kỳ",
    ],
    color: "bg-emerald-100 text-emerald-700",
    borderColor: "hover:border-emerald-300",
    icon: BookOpen,
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Ngữ văn khối 9 — Luyện thi vào 10",
    level: "THCS",
    duration: "1 học kỳ",
    target: "Học sinh lớp 9",
    sessions: "4 buổi/tuần",
    description:
      "Ôn luyện bài bản toàn bộ chương trình Ngữ văn THCS, luyện đề thi vào lớp 10 — chiến lược viết bài hiệu quả.",
    highlights: [
      "Hệ thống toàn bộ kiến thức THCS",
      "Luyện đề thi vào 10 các năm",
      "Chiến lược phân bổ thời gian làm bài",
      "Kỹ năng viết bài thi đạt điểm cao",
    ],
    color: "bg-amber-100 text-amber-700",
    borderColor: "hover:border-amber-300",
    icon: Target,
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    title: "Ngữ văn khối 10",
    level: "THPT",
    duration: "1 học kỳ",
    target: "Học sinh lớp 10",
    sessions: "3 buổi/tuần",
    description:
      "Xây dựng nền tảng Ngữ văn THPT vững chắc: đọc hiểu văn bản, nghị luận xã hội và nghị luận văn học theo chương trình mới.",
    highlights: [
      "Chương trình Ngữ văn mới 2018",
      "Đọc hiểu & phân tích văn bản",
      "Nghị luận xã hội — cách triển khai ý",
      "Nghị luận văn học lớp 10",
    ],
    color: "bg-sky-100 text-sky-700",
    borderColor: "hover:border-sky-300",
    icon: NotebookPen,
    iconColor: "bg-sky-100 text-sky-600",
  },
  {
    title: "Ngữ văn khối 11",
    level: "THPT",
    duration: "1 học kỳ",
    target: "Học sinh lớp 11",
    sessions: "3 buổi/tuần",
    description:
      "Phân tích chuyên sâu các tác phẩm văn học lớp 11, rèn luyện kỹ năng viết nghị luận xã hội và nghị luận văn học.",
    highlights: [
      "Phân tích tác phẩm văn học lớp 11",
      "Nghị luận xã hội nâng cao",
      "Nghị luận văn học — kỹ thuật phân tích",
      "Luyện đề kiểm tra học kỳ",
    ],
    color: "bg-sky-100 text-sky-700",
    borderColor: "hover:border-sky-300",
    icon: Feather,
    iconColor: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Luyện thi THPT Quốc gia",
    level: "THPT",
    duration: "6 tháng",
    target: "Học sinh lớp 12",
    sessions: "4–5 buổi/tuần",
    description:
      "Ôn luyện toàn diện 3 phần: Đọc hiểu, Nghị luận xã hội, Nghị luận văn học — luyện đề thi thử sát cấu trúc thực tế.",
    highlights: [
      "Đọc hiểu — chiến thuật ghi điểm tối đa",
      "Nghị luận xã hội 200 chữ hiệu quả",
      "Phân tích tác phẩm văn học trong 45 phút",
      "Luyện đề thi thử sát đề thật",
    ],
    color: "bg-rose-100 text-rose-700",
    borderColor: "hover:border-rose-300",
    icon: Trophy,
    iconColor: "bg-rose-100 text-rose-600",
  },
  {
    title: "Kỹ năng viết văn cơ bản",
    level: "Mọi cấp độ",
    duration: "2 tháng",
    target: "Học sinh THCS – THPT",
    sessions: "2 buổi/tuần",
    description:
      "Khoá học giúp học sinh hình thành tư duy viết, biết cách triển khai ý, diễn đạt lưu loát và gây ấn tượng với bài văn.",
    highlights: [
      "Lập dàn ý tư duy từ đầu",
      "Kỹ thuật mở bài & kết bài ấn tượng",
      "Diễn đạt linh hoạt, không rập khuôn",
      "Phù hợp mọi cấp độ từ yếu đến khá",
    ],
    color: "bg-violet-100 text-violet-700",
    borderColor: "hover:border-violet-300",
    icon: GraduationCap,
    iconColor: "bg-violet-100 text-violet-600",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <GraduationCap className="h-4 w-4" />
            Chương trình giảng dạy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Các khoá học của <span className="text-primary">cô Hoàng Ngân</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Chương trình bám sát chương trình mới của Bộ GD&amp;ĐT, kết hợp phương pháp hiện đại giúp học sinh
            hiểu sâu, nhớ lâu và yêu thích môn Văn.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`bg-card border rounded-2xl p-7 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${course.borderColor}`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${course.iconColor}`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${course.color}`}>
                        {course.level}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-foreground leading-snug">{course.title}</h2>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {course.target}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{course.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Sessions badge */}
                <div className="text-xs text-muted-foreground bg-muted/60 rounded-lg px-3 py-2 mb-5 text-center">
                  Lịch học: <span className="font-medium text-foreground">{course.sessions}</span>
                </div>

                {/* CTA */}
                <Button className="w-full gap-2 " asChild>
                  <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Đăng ký qua Zalo
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card border rounded-2xl p-8 text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Chưa biết chọn khoá nào?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Nhắn tin cho cô Hoàng Ngân qua Zalo để được tư vấn miễn phí — cô sẽ giúp bạn chọn khoá học
              phù hợp nhất với trình độ và mục tiêu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://zalo.me/0359260520" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Tư vấn miễn phí qua Zalo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/giang-vien">
                  Xem hồ sơ cô Hoàng Ngân
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
