"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const terms = [
  { term: "Ẩn dụ", example: "\"Thuyền về có nhớ bến chăng\"", meaning: "Biện pháp tu từ so sánh ngầm", category: "Tu từ" },
  { term: "Hoán dụ", example: "\"Áo nâu liền với áo xanh\"", meaning: "Gọi tên sự vật bằng sự vật liên quan", category: "Tu từ" },
  { term: "Nhân hóa", example: "\"Tre xung phong vào xe tăng giặc\"", meaning: "Gán thuộc tính người cho sự vật", category: "Tu từ" },
  { term: "Lục bát", example: "Truyện Kiều — Nguyễn Du", meaning: "Thể thơ dân tộc đặc trưng 6–8 chữ", category: "Thể thơ" },
  { term: "Thơ Mới", example: "Xuân Diệu, Hàn Mặc Tử…", meaning: "Phong trào thơ hiện đại 1930–1945", category: "Phong trào" },
  { term: "Văn xuôi", example: "Truyện ngắn, tiểu thuyết…", meaning: "Thể loại văn học không có vần điệu", category: "Thể loại" },
]

export function VocabularyPreview() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {terms.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-xl bg-card p-5 shadow-md transition-all duration-300",
            activeIndex === index && "shadow-xl scale-105 bg-primary/5"
          )}
        >
          <span className="text-2xl md:text-3xl font-bold text-foreground">
            {item.term}
          </span>
          <p className="mt-2 text-sm font-medium text-primary italic">{item.example}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.meaning}</p>
          <span className="absolute right-3 bottom-3 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground">
            {item.category}
          </span>
        </div>
      ))}
    </div>
  )
}
