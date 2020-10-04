// TODO ! move in helpers
const goNextWithDelay = (target, className, moveFunc) => {
  target.classList.add(className);
  setTimeout(() => {
    if (target) target.classList.remove(className);
    moveFunc();
  }, 1500);
};

export default goNextWithDelay;
