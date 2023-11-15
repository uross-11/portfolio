export const Navbar = () => {
  return (
    <nav className="navbar hidden__navbar">
      <a className="navbar__link resume" href="./resume.pdf" download>
        RESUME
        <img src="/arrow-down.svg" alt="Arrow icon" height="16" width="16" />
      </a>
      <span
        className="navbar__link"
        onClick={() => {
          document.getElementById("work")?.scrollIntoView();
        }}
      >
        WORK
      </span>
      <span
        className="navbar__link"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView();
        }}
      >
        CONTACT ME
      </span>
    </nav>
  );
};
