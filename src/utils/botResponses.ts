export function getInitialMessage() {
  return 'Olá, seja bem vindo! Como posso ajudar?'
}

export function getRandomMessage() {
  const sorter = Math.floor(Math.random() * 10)

  const responsesArray = [
    'A vida e uma caixa preta nunca saberemos o seu real significado.⁠',
    'Não deveríamos temer a morte, mais sim a vida.',
    'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma.',
    'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.',
    'A vida é um caos aleatório,ordenada pelo tempo.',
    'A verdade, é que dói lembrar dela.',
    'Cada instante é sempre.',
    'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.',
    'Cuide de si mesmo como cuidaria de alguém que você ama.',
    'O ruim de mentir, com tempo você acaba acreditando nas suas próprias mentiras.',
  ]

  return responsesArray[sorter]
}
