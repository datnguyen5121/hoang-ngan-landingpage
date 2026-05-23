import { Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  product: [
    { label: "Khóa học", href: "#" },
    { label: "Tính năng", href: "#" },
    { label: "Bảng giá", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "#" },
  ],
  legal: [
    { label: "Điều khoản", href: "#" },
    { label: "Bảo mật", href: "#" },
    { label: "Cookie", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold text-card-foreground">Học Văn Cô Ngân</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Học Ngữ văn cùng cô Hoàng Ngân — Thạc sĩ Văn học Việt Nam, giáo viên tận tâm tại Đà Nẵng.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Công ty</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Contact */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Liên hệ</h4>
            <p className="text-sm text-muted-foreground mb-5">
              Kết nối với chúng tôi qua các kênh mạng xã hội.
            </p>
            <div className="flex flex-col gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579344149120"
                target="_blank"
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Facebook className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              {/* Zalo */}
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[#0068FF]/10 text-[#0068FF] hover:bg-[#0068FF] hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2.3 28.5H17V19h4.7v13.5zm-2.35-15.4a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zM33 32.5h-4.6v-6.6c0-1.58-.57-2.66-2-2.66-1.08 0-1.72.73-2 1.43-.1.25-.13.6-.13.95v6.88H19.6V19h4.6v1.84c.61-.94 1.7-2.28 4.13-2.28 3.02 0 5.27 1.97 5.27 6.2v7.74z"/>
                </svg>
                <span className="text-sm font-medium">Zalo</span>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Ti%E1%BA%BFngTrungMinMin"
                target="_blank"
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Youtube className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Học Văn Cô Ngân. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
