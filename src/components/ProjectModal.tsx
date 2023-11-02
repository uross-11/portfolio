import { useEffect, useRef } from "react";
import { useGlobalContext } from "../useGlobalContext.ts";
import { data } from "../data";

export const ProjectModal = () => {
  const { projectId, closeModal } = useGlobalContext();
  const modal = data[projectId];
  const modalRef = useRef<HTMLDivElement>(null);

  const handleExit = () => {
    if (!modalRef.current) return;

    modalRef.current.style.opacity = "0";
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  useEffect(() => {
    if (!modalRef.current) return;

    modalRef.current.style.opacity = "1";
  }, []);

  return (
    <div ref={modalRef} className="projectmodal">
      <div className="projectmodal__image">
        <button className="projectmodal__exit" onClick={handleExit}>
          close
        </button>
        <img src={modal.img} alt={`${modal.title} img`} loading="lazy" />
      </div>
      <div className="projectmodal__content">
        <h2 className="projectmodal__title">{modal.title}</h2>
        <p className="projectmodal__description">{modal.longdesc}</p>
        <div className="projectmodal__tech">
          {modal.techstack.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <div className="projectmodal__url">
          <a
            href={modal.liveurl}
            target="_blank"
            rel="noreferrer"
            className="projectmodal__url__live"
          >
            live URL
          </a>
          <a
            href={modal.sourceurl}
            target="_blank"
            rel="noreferrer"
            className="projectmodal__url__source"
          >
            source URL
          </a>
        </div>
      </div>
    </div>
  );
};
