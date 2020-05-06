const prompt = require('prompt-sync')({sigint: true});

const commentGenerator = (name, lang) => {
  const messages = {
    pt: {
      beg: ['Valeu', 'Parabéns', 'Boa', 'É isso aí', 'Ótimo trabalho', 'Muito bom', 'Excelente'],
      mid: [
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
      beg: ['Thanks', 'Congrats', 'Great', 'There you go', 'Great work', 'Well done', 'Excellent'],
      mid: [
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

  const { beg, mid, end } = messages[lang];

  let randBeg = beg[Math.floor(Math.random() * beg.length)];
  let randMid = mid[Math.floor(Math.random() * mid.length)];
  let randEnd = end[Math.floor(Math.random() * end.length)];

  return `${randBeg}, ${name}! ${randMid}, ${randEnd}!`;
};

console.log('Seja Bem-Vimdo ao Linkedin Bullshit Generator!\n')
let name = prompt('Quem você quer elogiar hoje? ');
let lang = prompt('Escolha a língua do elogio (Pt|en): ');
if (lang === '') {
  lang = 'pt';
}

console.log('\nAqui vão 3 opções:\n')
console.log(commentGenerator(name, lang));
console.log(commentGenerator(name, lang));
console.log(commentGenerator(name, lang));