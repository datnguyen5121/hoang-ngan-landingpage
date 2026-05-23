"use client"

import * as React from "react"
import { User } from "lucide-react"

export function TeacherAvatar() {
  const [error, setError] = React.useState(false)

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
      {error ? (
        <User className="h-32 w-32 text-primary/30" strokeWidth={1} />
      ) : (
        <img
          src="/teacher.png"
          alt="Cô Lê Minh Hương"
          className="w-full h-full object-cover rounded-2xl"
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}
