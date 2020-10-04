const questions = [
  {
    text: 'Столица Монголии ?',
    value: 500,
    str: 'A',
    answers: [
      {
        text: 'Пекин',
        value: false,
      },
      {
        text: 'Киев',
        value: false,
      },
      {
        text: 'Москва',
        value: false,
      },
      {
        text: 'Улан-Батор',
        value: true,
      },
    ],
  },
  {
    text: 'В чём сила, брат ?',
    value: 500,
    str: 'B',
    answers: [
      {
        text: 'В каше',
        value: false,
      },
      {
        text: 'В мозгах',
        value: false,
      },
      {
        text: 'В правде',
        value: true,
      },
      {
        text: 'В смысле ?',
        value: false,
      },
    ],
  },
  {
    text: 'Как ты ?',
    value: 1000,
    str: 'C',
    answers: [
      {
        text: 'Нормас',
        value: false,
      },
      {
        text: 'Жить буду',
        value: true,
      },
      {
        text: 'Отлично',
        value: false,
      },
      {
        text: 'Плохо',
        value: false,
      },
    ],
  },
];

export default questions;
