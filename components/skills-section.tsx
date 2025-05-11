"use client"

import type React from "react"

import { useState } from "react"
import {
  Code2,
  Database,
  Server,
  Terminal,
  Cloud,
  GitBranch,
  Cpu,
  Workflow,
  Layers,
  PackageCheck,
  Network,
  Shield,
} from "lucide-react"

interface Skill {
  name: string
  category: "language" | "framework" | "database" | "tool"
  icon: React.ReactNode
  color: string
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const skills: Skill[] = [
    {
      name: "Python",
      category: "language",
      icon: <Code2 className="h-6 w-6" />,
      color: "bg-blue-500 text-blue-500",
    },
    {
      name: "Django",
      category: "framework",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-green-600 text-green-600",
    },
    {
      name: "Flask",
      category: "framework",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-gray-400 text-gray-400",
    },
    {
      name: "FastAPI",
      category: "framework",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-teal-500 text-teal-500",
    },
    {
      name: "PostgreSQL",
      category: "database",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-700 text-blue-700",
    },
    {
      name: "MongoDB",
      category: "database",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-500 text-green-500",
    },
    {
      name: "Redis",
      category: "database",
      icon: <Database className="h-6 w-6" />,
      color: "bg-red-500 text-red-500",
    },
    {
      name: "Docker",
      category: "tool",
      icon: <PackageCheck className="h-6 w-6" />,
      color: "bg-blue-400 text-blue-400",
    },
    {
      name: "Kubernetes",
      category: "tool",
      icon: <Network className="h-6 w-6" />,
      color: "bg-blue-600 text-blue-600",
    },
    {
      name: "CI/CD",
      category: "tool",
      icon: <Workflow className="h-6 w-6" />,
      color: "bg-purple-500 text-purple-500",
    },
    {
      name: "Git",
      category: "tool",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-orange-500 text-orange-500",
    },
    {
      name: "Linux",
      category: "tool",
      icon: <Terminal className="h-6 w-6" />,
      color: "bg-gray-500 text-gray-500",
    },
    {
      name: "Security",
      category: "tool",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-emerald-500 text-emerald-500",
    },
    {
      name: "C++",
      category: "language",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-violet-500 text-violet-500",
    },
  ]

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "language", name: "Languages" },
    { id: "framework", name: "Frameworks" },
    { id: "database", name: "Databases" },
    { id: "tool", name: "Tools & DevOps" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-green-400">class</span> <span className="text-blue-400">Skills</span>:
      </h2>

      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category.id ? "bg-green-500 text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="group relative">
            <div
              className={`
                bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center
                aspect-square transition-all duration-300 hover:scale-105 hover:shadow-lg
                hover:shadow-${skill.color.split(" ")[0].replace("bg-", "")}-900/20
                hover:border-${skill.color.split(" ")[0].replace("bg-", "")}-500/50
              `}
            >
              <div
                className={`
                p-3 rounded-full mb-3 bg-gray-800 
                group-hover:${skill.color.split(" ")[0]}
                group-hover:bg-opacity-20
              `}
              >
                <div className={skill.color.split(" ")[1]}>{skill.icon}</div>
              </div>
              <span className="text-center font-medium">{skill.name}</span>
            </div>

            {/* Pixel dots in corners for aesthetic */}
            <div className={`absolute w-1 h-1 top-0 left-0 ${skill.color.split(" ")[0]} opacity-70`}></div>
            <div className={`absolute w-1 h-1 top-0 right-0 ${skill.color.split(" ")[0]} opacity-70`}></div>
            <div className={`absolute w-1 h-1 bottom-0 left-0 ${skill.color.split(" ")[0]} opacity-70`}></div>
            <div className={`absolute w-1 h-1 bottom-0 right-0 ${skill.color.split(" ")[0]} opacity-70`}></div>
          </div>
        ))}
      </div>
    </section>
  )
}
