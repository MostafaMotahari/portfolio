"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  categories: string[]
  slug: string
  featured: boolean
}

export default function BlogSection() {
  const [showAll, setShowAll] = useState(false)

  const blogPosts: BlogPost[] = [
    {
      title: "DB Race Condition Errors, Silent Killer of DB Consistency",
      excerpt:
        "If you are a web-developer that works on simple and soft web projects, then probably you have never noticed about Database race conditions. First of all, let me talk a little about race conditions. What are they, how they happen and what should we do...",
      date: "Jan 22, 2025",
      readTime: "4 min read",
      categories: ["Django", "PostgreSQL", "Race condition"],
      slug: "https://blog.mousiol.ir/db-race-condition-errors-silent-killer-of-db-consistency",
      featured: true,
    },
    {
      title: "Elegant Trick to Swap Variables Without Extra Memory",
      excerpt:
        "Imagine you are in C++ programming language exam session. You relaxed and answering the questions one after another. After a while you solved all the...",
      date: "Jan 11, 2025",
      readTime: "4 min read",
      categories: ["Memory", "Tricks", "C++"],
      slug: "https://blog.mousiol.ir/elegant-tricks-to-swap-variables-without-extra-memory",
      featured: true,
    },
    // {
    //   title: "Containerization Best Practices for Python Applications",
    //   excerpt:
    //     "A comprehensive guide to containerizing Python applications with Docker, focusing on security, performance, and deployment strategies.",
    //   date: "March 28, 2025",
    //   readTime: "10 min read",
    //   categories: ["Docker", "DevOps", "Python"],
    //   slug: "containerization-best-practices",
    //   featured: true,
    // },
    // {
    //   title: "Implementing Event-Driven Architecture with Python and Kafka",
    //   excerpt:
    //     "How to design and build event-driven systems using Python, Kafka, and modern asynchronous programming techniques.",
    //   date: "March 10, 2025",
    //   readTime: "15 min read",
    //   categories: ["Kafka", "Event-Driven", "Architecture"],
    //   slug: "event-driven-architecture",
    //   featured: false,
    // },
    // {
    //   title: "Advanced Database Indexing Strategies for Django Applications",
    //   excerpt:
    //     "Learn how to optimize your Django ORM queries with advanced indexing techniques that can dramatically improve database performance.",
    //   date: "February 22, 2025",
    //   readTime: "9 min read",
    //   categories: ["Django", "Databases", "Performance"],
    //   slug: "database-indexing-strategies",
    //   featured: false,
    // },
  ]

  const displayedPosts = showAll ? blogPosts : blogPosts.filter((post) => post.featured)

  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-green-400">with</span> <span className="text-blue-400">open</span>
        {"('"}
        <span className="text-orange-400">blog.md</span>
        {"', '"}
        <span className="text-orange-400">r</span>
        {"') as "}
        <span className="text-blue-400">blog</span>:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 flex flex-col h-full hover:shadow-lg hover:shadow-green-900/20 transition-all"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-wrap gap-1 mb-2">
                {post.categories.slice(0, 2).map((category, i) => (
                  <Badge key={i} variant="outline" className="bg-gray-800 text-xs">
                    {category}
                  </Badge>
                ))}
                {post.categories.length > 2 && (
                  <Badge variant="outline" className="bg-gray-800 text-xs">
                    +{post.categories.length - 2}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl text-green-400">{post.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
            </CardContent>

            <CardFooter>
              <Button
                onClick={() => window.location.href = post.slug} 
                variant="link"
                className="text-green-400 p-0 h-auto font-medium flex items-center gap-1 hover:text-green-300"
              >
                Read Article <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {blogPosts.length > 3 && (
        <div className="flex justify-center mt-10">
          <Button onClick={() => setShowAll(!showAll)} className="bg-green-600 hover:bg-green-700">
            {showAll ? "Show Featured Posts" : "View All Blog Posts"}
          </Button>
        </div>
      )}
    </section>
  )
}
