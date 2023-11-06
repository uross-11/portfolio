import { Projects } from "./Projects";

export const Work = () => {
  return (
    <div id="work" className="work container__big">
      <h1 className="work__title">
        <div className="overflow-h">
          <p className="hidden__work__text">
            Work
            <img
              src="/arrow-down.svg"
              className="work__title__arrow"
              alt="Arrow icon"
              height="82"
              width="82"
            />
          </p>
        </div>
      </h1>
      <Projects />
    </div>
  );
};
