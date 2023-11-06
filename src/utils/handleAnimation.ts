export function handleAnimation() {
  // Navbar
  const navbar = document.querySelector(".navbar");

  // Welcome
  const arrow = document.querySelector(".hidden__next__button");
  const hiddenWelcomeText = document.querySelectorAll(".hidden__welcome__text");

  // Work
  const workTitle = document.querySelector(".work__title");
  const hiddenWorkText = document.querySelectorAll(".hidden__work__text");
  const projectCardImg = document.querySelectorAll(".projectcard__img");

  // Contact
  const contact = document.querySelector(".contact__title");
  const hiddenContactText = document.querySelectorAll(".hidden__contact__text");
  const form = document.querySelectorAll(".hidden__contact__form");

  // On page load
  setTimeout(() => {
    navbar?.classList.add("active__navbar");
    hiddenWelcomeText.forEach((text) => text.classList.add("active__text"));
    arrow?.classList.add("active__next");
  }, 800);

  // On scroll load
  window.addEventListener("scroll", () => {
    if (
      workTitle?.getBoundingClientRect() &&
      workTitle.getBoundingClientRect().top < 600
    ) {
      hiddenWorkText.forEach((text) => text.classList.add("active__text"));
      projectCardImg.forEach((image) => image.classList.add("active__image"));
    }

    if (
      (contact?.getBoundingClientRect() &&
        contact.getBoundingClientRect().top < 600) ||
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      hiddenContactText.forEach((text) => text.classList.add("active__text"));
      form.forEach((item) => item.classList.add("active__form"));
    }
  });
}
