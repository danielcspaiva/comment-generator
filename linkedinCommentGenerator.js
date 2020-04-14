const commentGenerator = (nome) => {
    let inicio = ['Valeu', 'Parabéns', 'Boa', 'É isso aí', 'Ótimo trabalho', 'Muito bom', 'Excelente']
    let meio = ['Incrível a sua dedicação', 'Impressionante o seu comprometimento', 'Isso nada mais é que um reflexo do seu empenho', 'Por mais trabalhos assim', 'Ficou incrível']
    let fim = ['vamos com tudo', 'vamos pra cima', 'que venham os próximos desafios', 'vamos juntos', 'que venham os próximos', 'até a próxima']
    
    let randInicio = inicio[Math.floor(Math.random()*inicio.length)]
    let randMeio = meio[Math.floor(Math.random()*meio.length)]
    let randFim = fim[Math.floor(Math.random()*fim.length)]

    return `${randInicio} ${nome}! ${randMeio}, ${randFim}!`
}

console.log(commentGenerator('Fabricio'));
console.log(commentGenerator('Rafael'));
console.log(commentGenerator('Ricky'));
console.log(commentGenerator('Thiago'));
console.log(commentGenerator('Pedro'));