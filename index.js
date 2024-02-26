const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável que não pode ser alterada?",
      respostas: [
        "let",
        "const",
        "var",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' verifica em JavaScript?",
      respostas: [
        "Igualdade de valor e tipo",
        "Igualdade de valor",
        "Igualdade de tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseString()",
        "toInteger()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
      respostas: [
        "Converte uma string para minúsculas.",
        "Converte uma string para maiúsculas.",
        "Retorna o comprimento de uma string.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "<!-- -->",
        "/* */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(10 + '5')?",
      respostas: [
        "15",
        "105",
        "Error",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'join()' faz em um array JavaScript?",
      respostas: [
        "Separa os elementos do array com vírgulas.",
        "Concatena dois arrays.",
        "Une todos os elementos do array em uma string.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de acessar o último elemento de um array em JavaScript?",
      respostas: [
        "array[-1]",
        "array.last()",
        "array[array.length - 1]",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Retorna o número com uma quantidade específica de casas decimais.",
        "Arredonda o número para o número inteiro mais próximo.",
        "Retorna uma representação em string do número.",
      ],
      correta: 0
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  } 