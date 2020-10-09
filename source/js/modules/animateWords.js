import animateTextLetters from "../utils/letterAnimation";

const animateWords = () => {
  const textContainers = document.getElementsByClassName(`js-animate-letters`);

  if (!textContainers || !textContainers.length) {
    return;
  }

  const animationOptions = {
    animationDuration: 500,
    animationDelay: 500,
    animationDelayBetweenLetters: 50,
  };

  Array.from(textContainers).forEach((textContainer) => {
    animateTextLetters(textContainer, animationOptions);
  });
};

export default animateWords;
