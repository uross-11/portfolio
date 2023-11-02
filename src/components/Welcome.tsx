import { ShowDate } from "./ShowDate";

export const Welcome = () => {
  const handleClick = () => {
    const work = document.getElementById("work");
    if (!work) return;
    work.scrollIntoView();
  };

  return (
    <div className="welcome container__big">
      <div className="hero">
        <h1>
          <div className="overflow-h">
            <p className="hidden__welcome__text">Hello,</p>
          </div>
          <div className="overflow-h">
            <p className="hidden__welcome__text">I am Uroš</p>
          </div>
        </h1>
        <h3 className="job overflow-h">
          <div className="hidden__welcome__text">
            <img src="/arrow-down.svg" className="job__arrow" alt="" />
            <span className="job__title">FRONTEND DEVELOPER</span>
          </div>
        </h3>
      </div>
      <ShowDate />
      <div className="next overflow-h">
        <button onClick={handleClick}>
          <img
            src="/arrow-down.svg"
            className="hidden__next__button next__button"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
