"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-green-400">if</span> <span className="text-white">__name__</span> =={" "}
        <span className="text-orange-400">"__main__"</span>:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-green-400">Get In Touch</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 min-h-[150px]"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-green-400">Connect With Me</CardTitle>
            <CardDescription>Feel free to reach out through any of these platforms.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Mail className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-400">contact@pythondev.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Github className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-gray-400">github.com/pythondev</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-gray-400">linkedin.com/in/pythondev</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Twitter className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-gray-400">@pythondev</p>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <div className="w-full pt-4 border-t border-gray-800">
              <p className="text-center text-sm text-gray-400">Available for freelance and full-time opportunities</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
