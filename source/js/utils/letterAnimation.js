/**
 * @typedef AnimationOptions
 * @type {object}
 * @property {number} animationDuration - продолжительность анимации, ms.
 * @property {number} animationDelay - задержка до начала анимации первой буквы, ms.
 * @property {number} animationDelayBetweenLetters - задержка между буквами, ms.
 */

/**
 * @param {string} text - текст, который следует разбить
 * @return {Array.<string[]>} - массив с массивами букв слов
 */
const splitText = (text) => {
  if (!text || !text.length) {
    return [];
  }

  return text
    .trim()
    .split(` `)
    .map((word) => word.split(``));
};

/**
 * @param {string} letter - буква
 * @param {number} letterIndexInText - индекс буквы во всем тексте
 * @param {AnimationOptions} animationOptions
 * @return {Object} - DOM элемент
 */
const createLetterSpan = (letter, letterIndexInText, animationOptions) => {
  const letterSpan = document.createElement(`span`);
  letterSpan.innerText = letter;

  const { animationDuration, animationDelayBetweenLetters } = animationOptions;

  const letterDelay = animationDelayBetweenLetters * letterIndexInText;

  letterSpan.style.transition = `transform ${animationDuration}ms ease ${letterDelay}ms`;

  return letterSpan;
};

/**
 * @param {Array.<string[]>} splittedText - массив с массивами букв слов
 * @param {AnimationOptions} animationOptions
 * @return {Object} - DOM элемент
 */
const wrapText = (splittedText, animationOptions) => {
  const root = document.createElement(`span`);
  root.classList.add(`animated-text`);
  root.classList.add(`js-animated-text`);

  let lettersCount = 0;

  splittedText.forEach((word, wordIndex) => {
    const wordSpan = document.createElement(`span`);
    wordSpan.classList.add(`animated-text__word`);

    word.forEach((letter) => {
      const letterSpan = createLetterSpan(
        letter,
        lettersCount,
        animationOptions
      );

      wordSpan.appendChild(letterSpan);
      lettersCount += 1;
    });

    root.appendChild(wordSpan);

    if (wordIndex !== splittedText.length - 1) {
      // добавляем пробел после слова
      const spaceSpan = document.createElement(`span`);
      spaceSpan.innerHTML = ` `;

      root.appendChild(spaceSpan);
    }
  });

  return root;
};

/**
 * @param {Object} textContainer - DOM element
 * @param {AnimationOptions} animationOptions
 */
const animateTextLetters = (textContainer, animationOptions) => {
  if (!textContainer) {
    return;
  }

  const splittedText = splitText(textContainer.innerText);

  textContainer.innerHTML = ``;
  const wrappedText = wrapText(splittedText, animationOptions);
  textContainer.appendChild(wrappedText);

  setTimeout(() => {
    wrappedText.classList.add(`active`);
  }, animationOptions.animationDelay);
};

export default animateTextLetters;
