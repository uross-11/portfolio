import React from 'react'

const ProgressBar = () => {

  const progress = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.height = scrolled + "%";
  }

  window.onscroll = () => progress();

  return (
    <div className="progress">
      <div id='progress' className="progress__bar"></div>
    </div>
  );
}

export default ProgressBar;