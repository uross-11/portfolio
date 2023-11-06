export function handleScrollLock(isModalOpen: boolean) {
  const body = document.querySelector("html");

  if (!body) return;

  if (isModalOpen) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "scroll";
  }
}
