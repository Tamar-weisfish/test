
export interface IQuiz {
    id: number;
    question: string;
    answers: IAnswers[];
    rightAnswer: number;
    userAnswer: number;
};

export interface IAnswers {
    id: number;
    answer: string;
}