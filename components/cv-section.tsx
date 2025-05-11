"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckCircle } from "lucide-react"

export default function CVSection() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [hasDownloaded, setHasDownloaded] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)
      setHasDownloaded(true)

      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setHasDownloaded(false)
      }, 3000)

      // Trigger actual download (in a real app, this would be a link to the actual CV file)
      const link = document.createElement("a")
      link.href = "/mousiol-cv.pdf" // This would be the actual path to your CV
      link.download = "Mousiol-Python-Backend-Developer-CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1500)
  }

  return (
    <section id="cv" className="py-12">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-gray-900 border-gray-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Left side - decorative pixel art */}
              <div className="bg-gray-800 p-6 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {/* Pixel art document */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-10 gap-1">
                    {Array.from({ length: 80 }).map((_, i) => {
                      // Create a document pixel art pattern
                      const row = Math.floor(i / 8)
                      const col = i % 8

                      // Document shape
                      let bgColor = "bg-gray-700"

                      // Top part (darker)
                      if (row < 2) {
                        bgColor = "bg-green-600"
                      }
                      // Folded corner
                      else if (row < 2 && col > 5) {
                        bgColor = "bg-green-700"
                      }
                      // Document lines
                      else if ([3, 5, 7].includes(row) && col > 1 && col < 7) {
                        bgColor = "bg-green-400"
                      }

                      return <div key={i} className={`${bgColor} transition-colors duration-300`}></div>
                    })}
                  </div>
                </div>
              </div>

              {/* Right side - content */}
              <div className="md:col-span-2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-green-400">Download</span> My CV
                </h3>
                <p className="text-gray-400 mb-6">
                  Get a comprehensive overview of my skills, experience, and qualifications as a Python Backend
                  Developer.
                </p>

                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    {isDownloading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Downloading...</span>
                      </>
                    ) : hasDownloaded ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        <span>Download CV</span>
                      </>
                    )}
                  </Button>

                  <Button variant="outline" className="border-gray-700 gap-2">
                    <FileText className="h-5 w-5" />
                    <span>View Online</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
