import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  githubUrl,
  liveDemoUrl,
  features = [],
  techStack = [],
}) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl border border-red-500/15 bg-zinc-950/80
        shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:border-red-500/35
        hover:shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_32px_rgba(239,68,68,0.12)]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_40%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <div className="relative overflow-hidden border-b border-white/8">
        <img
          src={image}
          alt={imageAlt || title}
          className="
            h-64 w-full object-cover
            transition-all duration-300 ease-out
            group-hover:scale-105 group-hover:brightness-110
          "
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>

      <div className="relative flex flex-col gap-6 p-7 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="max-w-[500px] text-sm leading-relaxed text-white/70 md:text-base">
              {description}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center rounded-full
                bg-red-500/90 px-5 py-2.5 text-sm font-medium text-white
                shadow-[0_0_15px_rgba(255,0,0,0.6)]
                transition-all duration-300 ease-out
                hover:scale-105 hover:bg-red-500
                hover:shadow-[0_0_22px_rgba(255,0,0,0.7)]
              "
            >
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center rounded-full border border-red-500/40
                bg-transparent px-5 py-2.5 text-sm font-medium text-white/85
                transition-all duration-300 ease-out
                hover:scale-105 hover:border-red-400/60 hover:bg-red-500/10
                hover:shadow-[0_0_18px_rgba(239,68,68,0.18)]
              "
            >
              GitHub
            </a>
          </div>
        </div>

        {features.length > 0 && (
          <ul className="space-y-2 text-sm leading-7 text-white/70">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.45)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-red-500/15 bg-red-500/10 px-3 py-1
                  text-xs font-medium tracking-wide text-red-100
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:bg-red-500/20
                  hover:shadow-[0_0_12px_rgba(239,68,68,0.14)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
