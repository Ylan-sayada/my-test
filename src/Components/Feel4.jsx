import React, { useState } from 'react';
import RedFlage from './RedFlage';
import CustomStepper from './Stepper';
export default function Feel4() {
  const questions = [
    {
      questionText:
        'בן הזוג שלי מצלם אותי בסיטואציות פרובקטיביות ללא הסכמתי ומאיים שישלח את זה לאנשים אם אחשוב להיפרד ממנו  ',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },

    {
      questionText: 'אני לא מרגישה שאני או בני משפחתי וחברי נמצאים בסכנה',

      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: 'אני חוששת שבן הזוג שלי יפגע בעצמו בגללי',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },

    {
      questionText: 'לא חוויתי אלימות פיזית בשבועות האחרונים',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: 'חוויתי פחד מבן הזוג שלי בשבועות האחרונים',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },

    {
      questionText: 'בן הזוג שלי לא מונע ממני להשתמש בכסף שלי',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: 'בן הזוג שלי מאיים עלי שיהרוס לי דברים',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 100);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 300) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='container'>
      
        {currentQuestion === 5 ? (
          <RedFlage />
        ) : showScore ? (
          <div className='score-section'>
            <RedFlage />
          </div>
        ) : (
          <>
            <div className='question-section'>
            <CustomStepper stepNum={5}/>
              
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
  );
}
