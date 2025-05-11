"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = `I'm a Python backend developer with expertise in building scalable, 
  efficient server-side applications. With a strong foundation in data structures, 
  algorithms, and system design, I create robust solutions that power modern web applications.
  
  My experience spans across various domains including API development, database design, 
  cloud infrastructure, and DevOps practices. I'm passionate about clean code, 
  test-driven development, and continuous learning.`

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-green-400">def</span> <span className="text-blue-400">about_me</span>():
      </h2>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-green-400" />
            <span>About Me</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-mono text-sm">
            <p className="whitespace-pre-line">
              {text}
              {showCursor && <span className="text-green-400">|</span>}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
