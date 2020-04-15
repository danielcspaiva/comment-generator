const commentGenerator = (name, language) => {
  const messages = {
    pt: {
      beginning: ['Valeu', 'Parabéns', 'Boa', 'É isso aí', 'Ótimo trabalho', 'Muito bom', 'Excelente'],
      middle: [
        'Incrível a sua dedicação',
        'Impressionante o seu comprometimento',
        'Isso nada mais é que um reflexo do seu empenho',
        'Por mais trabalhos assim',
        'Ficou incrível',
      ],
      end: [
        'vamos com tudo',
        'vamos pra cima',
        'que venham os próximos desafios',
        'vamos juntos',
        'que venham os próximos',
        'até a próxima',
      ],
    },
    en: {
      beginning: ['Thanks', 'Congrats', 'Great', 'There you go', 'Great work', 'Well done', 'Excellent'],
      middle: [
        'Your dedication is amazing',
        'Your commitment is impressive',
        'This is nothing more than a consequence of your efforts',
        'For more jobs like this',
        'You did it',
      ],
      end: [
        "let's go get it",
        'together we are stronger',
        'to the next challenges',
        'until next time',
        'keep working hard',
        'it was a great pleasure working with you',
      ],
    },
  };

  const { beginning, middle, end } = messages[language];

  let randBeginning = beginning[Math.floor(Math.random() * beginning.length)];
  let randMiddle = middle[Math.floor(Math.random() * middle.length)];
  let randEnd = end[Math.floor(Math.random() * end.length)];

  return `${randBeginning}, ${name}! ${randMiddle}, ${randEnd}!`;
};

const body = document.getElementById('body');
const name = document.getElementById('name');
const language = document.getElementById('language');
const btn = document.getElementById('get-message');

btn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <p>${commentGenerator(name.value, language.value)}</p>
    `;
  body.appendChild(div);
});
