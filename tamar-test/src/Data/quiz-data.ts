import { IQuiz } from 'src/models/quiz-model';

export const quiz: IQuiz[] = [{
    id: 1,
    question: "which city is the capital of israel?",
    answers: [{
        id: 1,
        answer: "jerusalem"
    }, {
        id: 2,
        answer: "Bnei Brak"
    },
    {
        id: 3,
        answer: "Meron"
    },
    {
        id: 4,
        answer: "Lod"
    }
    ],
    userAnswer: 0,
    rightAnswer: 1
}, {
    id: 2,
    question: "which city is the capital of England?",
    answers: [{
        id: 1,
        answer: "Sheffield"
    }, {
        id: 2,
        answer: "London"
    },
    {
        id: 3,
        answer: "Bristol"
    },
    {
        id: 4,
        answer: "Tyneside"
    }
    ],
    userAnswer: 0,
    rightAnswer: 2
},{
    id: 3,
    question: "which city is the capital of Netherlands?",
    answers: [{
        id: 1,
        answer: "Noord-Holland"
    }, {
        id: 2,
        answer: "Friesland"
    },
    {
        id: 3,
        answer: "Den Haag"
    },
    {
        id: 4,
        answer: "Amsterdam"
    }
    ],
    userAnswer: 0,
    rightAnswer: 4
},
{
    id: 4,
    question: "which city is the capital of France?",
    answers: [{
        id: 1,
        answer: "Strasbourg "
    }, {
        id: 2,
        answer: "Paris"
    },
    {
        id: 3,
        answer: "Marseille"
    },
    {
        id: 4,
        answer: "Nice"
    }
    ],
    userAnswer: 0,
    rightAnswer: 2
}
,
{
    id: 5,
    question: "which city is the capital of Italy?",
    answers: [{
        id: 1,
        answer: "Roma "
    }, {
        id: 2,
        answer: "Milano"
    },
    {
        id: 3,
        answer: "Napoli"
    },
    {
        id: 4,
        answer: "Venezia"
    }
    ],
    userAnswer: 0,
    rightAnswer: 1
}
]