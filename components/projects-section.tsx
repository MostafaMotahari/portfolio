"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image: string
  featured: boolean
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const projects: Project[] = [
    {
      title: "Certbot plugin for PowerDNS Admin API",
      description:
        "A Python plugin for Certbot to perform DNS-01 challenges using the PowerDNS-Admin API.",
      technologies: ["Python", "Certbot"],
      github: "https://github.com/MostafaMotahari/certbot-dns-pdnsadmin",
      image: "https://github.com/MostafaMotahari/certbot-dns-pdnsadmin/blob/master/images/cover.png?height=200&width=400",
      featured: true,
    },
    // {
    //   title: "Data Processing Pipeline",
    //   description: "A scalable ETL pipeline that processes terabytes of data using Python, Celery, and AWS services.",
    //   technologies: ["Python", "Celery", "AWS Lambda", "S3", "DynamoDB"],
    //   github: "https://github.com/username/data-pipeline",
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: true,
    // },
    // {
    //   title: "E-commerce Backend",
    //   description:
    //     "A robust backend system for an e-commerce platform with inventory management, order processing, and payment integration.",
    //   technologies: ["Django", "PostgreSQL", "Redis", "Stripe API", "Docker"],
    //   github: "https://github.com/username/ecommerce-backend",
    //   demo: "https://demo-ecommerce.example.com",
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: true,
    // },
    // {
    //   title: "Real-time Chat Server",
    //   description:
    //     "A WebSocket-based chat server that supports thousands of concurrent connections with minimal latency.",
    //   technologies: ["Python", "WebSockets", "Redis", "MongoDB", "Docker"],
    //   github: "https://github.com/username/chat-server",
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
    // {
    //   title: "Content Management System",
    //   description: "A headless CMS built with Django REST Framework that provides a flexible API for content delivery.",
    //   technologies: ["Django", "DRF", "PostgreSQL", "AWS S3", "Docker"],
    //   github: "https://github.com/username/headless-cms",
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
    // {
    //   title: "Machine Learning API",
    //   description: "A REST API that serves machine learning models for sentiment analysis and text classification.",
    //   technologies: ["Flask", "scikit-learn", "TensorFlow", "Docker", "AWS"],
    //   github: "https://github.com/username/ml-api",
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
  ]

  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-green-400">for</span> <span className="text-blue-400">project</span>{" "}
        <span className="text-green-400">in</span> <span className="text-blue-400">projects</span>:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 flex flex-col h-full hover:shadow-lg hover:shadow-green-900/20 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-xl text-green-400">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-gray-800 text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="bg-gray-800 text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-gray-400">{project.description}</CardDescription>
            </CardContent>

            <CardFooter className="flex gap-2">
              {project.github && (
                <Button onClick={() => window.location.href = project.github} variant="outline" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Button>
              )}
              {project.demo && (
                <Button onClick={() => window.location.href = project.demo} variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <Button onClick={() => setShowAll(!showAll)} className="bg-green-600 hover:bg-green-700">
            {showAll ? "Show Less" : "Show More Projects"}
          </Button>
        </div>
      )}
    </section>
  )
}
