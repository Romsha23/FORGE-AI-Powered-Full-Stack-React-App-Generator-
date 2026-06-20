"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Trash2, MessageSquare } from "lucide-react";
import { ProjectSummary } from "@/actions/projects";
import { DeleteProjectModal } from "./DeleteProjectModal";

interface ProjectCardProps {
  projects: ProjectSummary[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const title = project.title ?? "Untitled project";
        const timeAgo = formatDistanceToNow(new Date(project.updatedAt), {
          addSuffix: true,
        });
        const msgCount = Math.floor(project.messageCount / 2);

        return (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d0d0d] p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#121212]"
          >
            {/* Clickable Overlay Layer */}
            <Link 
              href={`/workspace/${project.id}`} 
              className="absolute inset-0 z-0" 
            />
            
            {/* Header Content Section */}
            <div className="z-10 flex flex-col gap-1.5">
              <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="text-xs text-white/40">
                Updated {timeAgo}
              </p>
            </div>

            {/* Card Footer Utilities */}
            <div className="z-10 mt-4 flex items-center justify-between border-t border-white/5 pt-3">
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{msgCount} messages</span>
              </div>

              {/* Action Trigger Block */}
              <div className="relative z-20">
                {/* CHANGED: Passing project={project} instead of projectId={project.id} */}
                <DeleteProjectModal project={project}>
                  <button className="flex h-7 w-7 items-center justify-center rounded-md text-white/40 hover:bg-white/5 hover:text-red-400 transition-colors">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </DeleteProjectModal>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}