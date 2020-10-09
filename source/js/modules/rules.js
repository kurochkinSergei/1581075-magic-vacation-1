export const animateRulesLinkButton = () => {
  const animatedParagraphs = document.querySelectorAll(`li.rules__item > p`);
  const lastAnimatedParagraph =
    animatedParagraphs[animatedParagraphs.length - 1];

  const onAnimationEnd = () => {
    const rulesLink = document.getElementsByClassName(`js-rules-link`)[0];
    rulesLink.classList.add(`start-animation`);
  };

  lastAnimatedParagraph.addEventListener(`animationend`, onAnimationEnd);
};
