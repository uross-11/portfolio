import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header className="mb-32 animate-[fade_0.4s_ease-in-out_10ms_both] motion-reduce:animate-none">
        <h1 className="font-medium">Uroš Ignjatović</h1>
      </header>
      <p className="animate-[fade_0.4s_ease-in-out_80ms_both] motion-reduce:animate-none">
        I’m a developer who enjoys building{" "}
        <span className="text-muted">web experiences</span> that are fast,
        simple, and pretty,
        <span className="text-muted"> experimenting </span> with the limits of
        software and seeing how far I can reach.
      </p>
      <div className="mt-32 animate-[fade_0.4s_ease-in-out_150ms_both] motion-reduce:animate-none">
        <h2 className="font-medium mb-5">Work</h2>
        <ul className="flex flex-col gap-2">
          {work.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col hover:bg-highlight-low p-3 rounded-lg -ml-3"
              >
                <span className="flex w-full justify-between">
                  {item.company}
                  <span className="not-italic text-muted">{item.date}</span>
                </span>
                <span className="text-muted italic">{item.position}</span>
                <span className="text-muted">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-32 animate-[fade_0.4s_ease-in-out_300ms_both] motion-reduce:animate-none">
        <h2 className="font-medium mb-5">Projects</h2>
        <ul className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col hover:bg-highlight-low p-3 rounded-lg -ml-3"
              >
                <span>{project.name}</span>
                <span className="text-muted">{project.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-32 pb-32 animate-[fade_0.4s_ease-in-out_450ms_both] motion-reduce:animate-none">
        <h2 className="font-medium mb-5">Contact</h2>
        <div>
          Reach out to me at{" "}
          <Link
            href="mailto:hi@urosi.dev"
            className="underline decoration-muted hover:decoration-foreground"
          >
            hi@urosi.dev
          </Link>{" "}
          or see more of my work on{" "}
          <Link
            href="https://github.com/uross-11"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted hover:decoration-foreground"
          >
            GitHub
          </Link>
          .
        </div>
      </div>
    </main>
  );
}

const work = [
  {
    company: "Scops",
    position: "Full-stack developer",
    date: "2024 - Present",
    description:
      "Creating loyalty systems that drive engagement and retain customers.",
    link: "https://scops-loyalty.com",
  },
  {
    company: "Gigatron",
    position: "Frontend developer",
    date: "2022 - Present",
    description: "Optimizing e-commerce shopping experience.",
    link: "https://gigatron.rs",
  },
  {
    company: "Divino",
    position: "Frontend developer",
    date: "2024",
    description: "Spiritual AI voice chat companion.",
    link: "https://apps.apple.com/rs/app/divino-ai-spiritual-voice-chat/id6739767146",
  },
  {
    company: "Deverus",
    position: "Frontend developer",
    date: "2024",
    description: "Digital credential management and verification.",
    link: "https://deverus.com",
  },
];

const projects = [
  {
    name: "Raycasting in JS",
    description:
      "Simple raycasting engine built with JS, Canvas and WebSockets.",
    link: "https://github.com/uross-11/raycasting",
  },
  {
    name: "Razer keyboard app",
    description: "Web app that communicates with Razer SDK and librazermacos.",
    link: "https://github.com/uross-11/keyboard",
  },
];
