'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FloatingButtons() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const buttons = [
    {
      id: 'zalo',
      icon: null,
      bgColor: 'bg-blue-500',
      href: 'https://zalo.me/0359260520',
      label: 'Zalo',
      target: '_blank',
      useImage: true,
    },
    // {
    //   id: 'category',
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    //     </svg>
    //   ),
    //   bgColor: 'bg-green-500',
    //   href: '/courses',
    //   label: 'Khoá học',
    // },
  ]

  const handleClick = (href: string, target?: string, buttonId?: string) => {
    if (target === '_blank') {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else if (href.startsWith('tel:')) {
      window.location.href = href
    } else {
      window.location.href = href
    }
  }

  return (
    <div className="fixed left-4 bottom-8 flex flex-col gap-3 z-40">
      {buttons.map((btn) => (
        <div
          key={btn.id}
          className="flex items-center gap-3"
          onMouseEnter={() => setHoveredId(btn.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Button */}
          <button
            onClick={() => handleClick(btn.href, btn.target, btn.id)}
            className={`${btn.bgColor} text-white ${btn.useImage ? 'p-0 overflow-hidden' : 'p-4'} rounded-full shadow-lg flex items-center justify-center cursor-pointer relative`}
            aria-label={btn.label}
            type="button"
          >
            {btn.useImage ? (
              <Image
                src="/logo-zalo-vector.png"
                alt="Zalo"
                width={56}
                height={56}
                className=" object-cover rounded-full"
              />
            ) : (
              btn.icon
            )}
          </button>

          {/* Label */}
          {hoveredId === btn.id && (
            <div className="bg-slate-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap">
              {btn.label}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
