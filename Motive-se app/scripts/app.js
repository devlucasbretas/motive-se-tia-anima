
let frases = [
    "Olhe para cima, que é de lá que vem tua força!",
    "Não importa o que você decidiu. O que importa é que isso te faz feliz.",
    "Você nunca será velho demais para sonhar um novo sonho. - C. S. Lewis",
    "Quando pensar em desistir, lembre-se porque começou.",
    "Comece onde você está. Use o que você tem. Faça o que puder.",
    "Por mais difícil que algo possa parecer, jamais desista antes de tentar!",
    "Acreditar é a força que nos permite subir os maiores degraus da vida.",
    "No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim. - Fernando Sabino",
    "Vá firme na direção da sua meta, porque o pensamento cria, o desejo atrai e a fé realiza!",
    "Às vezes as coisas demoram, mas acontecem. O importante é esperar e não perder a fé.",
    "A fé não é a estrada, mas pode ser a força que nos faz caminhar.",
    "Vencedor não é aquele que sempre vence, mas sim aquele que nunca para de lutar.",
    "Nunca diga eu não consigo. Você consegue sim, basta ter força de vontade e fé.",
    "Às vezes você tem que levantar sozinho e seguir em frente...",
    "Não é com desculpas que irá atingir os seus objetivos! ",
    "Se você não lutar por alguma coisa, será vencido por qualquer coisa.",
    "Não podemos vencer sempre, mas é sempre possível lutar com dignidade até ao fim.",
    "Ninguém é igual a você, e isso pode ser sua grande arma.",
    "Seu maior medo também pode ser sua maior motivação."

];

function gerar() {
    let fraseArea = document.getElementById("frase");
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    fraseArea.innerHTML = randomFrase;
}