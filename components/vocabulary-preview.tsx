"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Volume2 } from "lucide-react"

const vocabularies = [
  { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Xin chào", level: "HSK 1" },
  { hanzi: "谢谢", pinyin: "xiè xie", meaning: "Cảm ơn", level: "HSK 1" },
  { hanzi: "再见", pinyin: "zài jiàn", meaning: "Tạm biệt", level: "HSK 1" },
  { hanzi: "学习", pinyin: "xué xí", meaning: "Học tập", level: "HSK 2" },
  { hanzi: "工作", pinyin: "gōng zuò", meaning: "Công việc", level: "HSK 2" },
  { hanzi: "快乐", pinyin: "kuài lè", meaning: "Vui vẻ", level: "HSK 2" },
]

export function VocabularyPreview() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {vocabularies.map((vocab, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-xl bg-card p-5 shadow-md transition-all duration-300",
            activeIndex === index && "shadow-xl scale-105 bg-primary/5"
          )}
        >
          <div className="flex items-start justify-between">
            <span className="text-3xl md:text-4xl font-bold text-foreground">
              {vocab.hanzi}
            </span>
            <button 
              className="rounded-full p-1.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary/10 hover:text-primary"
              aria-label="Play pronunciation"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-sm font-medium text-primary">{vocab.pinyin}</p>
          <p className="mt-1 text-sm text-muted-foreground">{vocab.meaning}</p>
          <span className="absolute right-3 bottom-3 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground">
            {vocab.level}
          </span>
        </div>
      ))}
    </div>
  )
}
