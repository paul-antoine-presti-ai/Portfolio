"use client";

import { useState } from "react";
import Badge from "./Badge";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  links?: {
    github?: string;
    demo?: string;
    alpic?: string;
  };
  image?: string;
  icon?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden">
      {/* Header with Icon */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {project.icon && (
              <div className="text-4xl">{project.icon}</div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="px-6 pb-6 animate-slide-up">
          {/* Long Description */}
          <div className="mb-4 p-4 bg-background-secondary/40 backdrop-blur-sm rounded-xl border border-glass-border">
            <h4 className="text-sm font-semibold text-accent mb-2">
              📋 Description détaillée
            </h4>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-4 p-4 bg-background-secondary/40 backdrop-blur-sm rounded-xl border border-glass-border">
            <h4 className="text-sm font-semibold text-accent mb-2">
              ✨ Fonctionnalités principales
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-foreground/80 text-sm flex items-start gap-2"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl text-sm font-medium text-foreground hover:border-border-strong hover:text-accent transition-all"
                >
                  <span className="mr-2">🔗</span> GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-xl text-sm font-medium text-accent hover:bg-accent/20 orange-glow transition-all"
                >
                  <span className="mr-2">🚀</span> Demo Live
                </a>
              )}
              {project.links.alpic && (
                <a
                  href={project.links.alpic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-xl text-sm font-medium text-accent hover:bg-accent/20 orange-glow transition-all"
                >
                  <span className="mr-2">☁️</span> Alpic
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-3 text-sm font-medium text-accent hover:bg-accent/5 transition-all border-t border-glass-border"
      >
        {isExpanded ? "Réduire ↑" : "Voir plus ↓"}
      </button>
    </div>
  );
}

