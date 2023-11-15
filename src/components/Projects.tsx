import { ProjectCard } from "./ProjectCard";
import { data } from "../data";

export const Projects = () => {
  return (
    <div className="container projects">
      {data.map((num) => (
        <ProjectCard key={num.id} {...num} />
      ))}
    </div>
  );
};
