type Question = {
  id: number;
  text: string;
  comment: string;
}

type Quiz = {
  answerIndex: number;
  questions: Question[];
}

export const quiz1: Quiz = {
  answerIndex: 0,
  questions: [
    {
      id: 1,
      text: "Управление продуктом, каналами распространения, ценой и продвижением в интернете",
      comment: 'Да, это верный ответ'
    },
    {
      id: 2,
      text: "Реклама товаров и услуг в интернете",
      comment: 'Это неверный, это верный ответ'
    },
    {
      id: 3,
      text: "Управление процессом принятия решения потребителем с помощью нейромаркетинговых практик",
      comment: 'Это неверный, это верный ответ'
    },
  ]
}