import { Facebook, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const footerLinks = {
  product: [
    { label: "Khóa học", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  company: [
    { label: "Giới thiệu", href: "#" },
    { label: "Blog", href: "#" },
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
              <Image
                src="/hoangnganlogoheader.png"
                alt="Học Văn Cô Ngân"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-card-foreground">Học Văn Cô Ngân</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Học Ngữ văn cùng cô Hoàng Ngân — Thạc sĩ Văn học Việt Nam.
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
            <h4 className="font-semibold text-card-foreground mb-4">Về Học Văn Cô Ngân</h4>
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
              Kết nối với cô Ngân qua các kênh mạng xã hội.
            </p>
            <div className="flex gap-3 flex-row">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/chloeperidot"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border-1 border-[#1877F2] text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2]/10 hover:scale-110 transition-all duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              {/* Zalo */}
              <a
                href="https://zalo.me/0359260520"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border-1 border-[#2bff00] text-green-600 flex items-center justify-center hover:bg-[#0068FF]/10 hover:scale-110 transition-all duration-200"
              >
                   <MessageCircle className="h-6 w-6 text-green-600" />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@hocvancongann"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border-1 border-foreground text-foreground flex items-center justify-center hover:bg-foreground/10 hover:scale-110 transition-all duration-200"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
