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
      title: "Building Scalable APIs with FastAPI and PostgreSQL",
      excerpt:
        "Learn how to design and implement high-performance APIs that can handle millions of requests using FastAPI and PostgreSQL.",
      date: "May 2, 2025",
      readTime: "8 min read",
      categories: ["FastAPI", "PostgreSQL", "API Design"],
      slug: "building-scalable-apis",
      featured: true,
    },
    {
      title: "Optimizing Python Performance: Profiling and Caching Strategies",
      excerpt:
        "Discover techniques to identify bottlenecks in your Python code and implement effective caching strategies to boost performance.",
      date: "April 15, 2025",
      readTime: "12 min read",
      categories: ["Python", "Performance", "Caching"],
      slug: "optimizing-python-performance",
      featured: true,
    },
    {
      title: "Containerization Best Practices for Python Applications",
      excerpt:
        "A comprehensive guide to containerizing Python applications with Docker, focusing on security, performance, and deployment strategies.",
      date: "March 28, 2025",
      readTime: "10 min read",
      categories: ["Docker", "DevOps", "Python"],
      slug: "containerization-best-practices",
      featured: true,
    },
    {
      title: "Implementing Event-Driven Architecture with Python and Kafka",
      excerpt:
        "How to design and build event-driven systems using Python, Kafka, and modern asynchronous programming techniques.",
      date: "March 10, 2025",
      readTime: "15 min read",
      categories: ["Kafka", "Event-Driven", "Architecture"],
      slug: "event-driven-architecture",
      featured: false,
    },
    {
      title: "Advanced Database Indexing Strategies for Django Applications",
      excerpt:
        "Learn how to optimize your Django ORM queries with advanced indexing techniques that can dramatically improve database performance.",
      date: "February 22, 2025",
      readTime: "9 min read",
      categories: ["Django", "Databases", "Performance"],
      slug: "database-indexing-strategies",
      featured: false,
    },
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
