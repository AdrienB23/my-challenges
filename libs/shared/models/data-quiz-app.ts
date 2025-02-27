export interface DataQuizApp {
  quizzes: [
    {
      title: string,
      icon: string,
      questions: [
        {
          question: string,
          options: string[],
          answer: string
        }
      ]
    }
  ]
}