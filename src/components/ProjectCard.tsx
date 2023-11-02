import { useGlobalContext } from "../useGlobalContext";

export const ProjectCard = ({
  id,
  shortdesc,
  title,
  img,
}: {
  id: number;
  shortdesc: string;
  title: string;
  img: string;
}) => {
  const { openModal, setProjectId } = useGlobalContext();

  return (
    <div className="projectcard">
      <div
        className="projectcard__img__container"
        onClick={() => {
          setProjectId(id);
          openModal();
        }}
      >
        <img
          className="projectcard__img hidden__work__image"
          src={img}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="projectcard__info">
        <div className="overflow-h">
          <h2 className="projectcard__title hidden__work__text">{title}</h2>
        </div>
        <div className="overflow-h">
          <p className="projectcard__desc hidden__work__text">{shortdesc}</p>
        </div>
      </div>
    </div>
  );
};
