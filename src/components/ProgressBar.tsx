function progress() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  const element = document.getElementById("progress");

  if (element?.style.height) {
    element.style.height = scrolled + "%";
  }
}

export const ProgressBar = () => {
  window.onscroll = () => progress();

  return (
    <div className="progress">
      <div id="progress" className="progress__bar"></div>
    </div>
  );
};
