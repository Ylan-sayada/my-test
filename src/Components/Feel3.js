

    import React, { useState } from 'react';
    import Feel4 from "./Feel4";

    
    export default function Feel3() {
      
    
    
    
      const questions = [
        //  questionText:בן זוגי מבקש ממני לא להיפגש עם גברים אחרים חוץ ממנו: גברים בעבודה, ידידים וכו',
        //   {
        //       answerOptions: [
        //           { answerText: 'נכון', isCorrect: true },
        //           { answerText: 'לא נכון', isCorrect: false },
    
        //       ],
        //   },
    
          {
              questionText:'את מזהה אצל בן זוגך בסיטואציות מסוימות "מבט של רצח בעיניים',
    
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'עולה בי מחשבה שאם אספר למישהו על מה שקורה באמת ביני לבין זוגי כשרק שנינו לבד, אנשים לא יאמינו כי הוא משדר כלפי חוץ דמות של "קסם של בחור',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
    
          },
    
          {
              questionText:'האם קרו מצבים בהם בן זוגך הרס חפצים בבית או איבד שליטה ולאחר מכן הבטיח שזה לעולם לא יקרה שוב  ',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
    
          {
              questionText:'בן הזוג שלי לא אומר לי מה ללבוש או איך להתאפר',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: false },
                  { answerText: 'לא נכון', isCorrect: true },
    
              ],
          },
    
    
          {
              questionText:'אני מרגישה שבן הזוג שלי קנאי כלפי ',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'אני מרגישה שחוץ מבן הזוג שלי אף אחד אחר לא רוצה להיות איתי',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי אומר שאני ממש לא חייבת לחכות לו בבית כשהוא חוזר מהעבודה',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: false },
                  { answerText: 'לא נכון', isCorrect: true},
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי מונע ממני או מילדי לקבל טיפול רפואי',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
          {
              questionText:'בן הזוג שלי לא מונע ממני לעבוד',
            answerOptions: [
                { answerText: 'נכון', isCorrect: false },
                { answerText: 'לא נכון', isCorrect: true },
  
            ],
        },
        {
            questionText:'בן הזוג שלי מחליט לבד החלטות בנוגע לכסף שלי ',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'במהלך הקשר התרחקתי ממשפחתי בעקבות לחץ מבן זוגי',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'בן הזוג שלי מכריח אותי לעשות יותר סקס ממה שאני רוצה',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'בן זוגי מסתכל על הודעות ומיילים שלי, ולפעמים אפילו חוקר אותי לגביהם',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'חוויתי השפלה וצעקות מבן הזוג שלי ליד אנשים אחרים',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'בן זוגי אף פעם לא מאשים אותי שאני לא מספיק נאמנה לו ',
            answerOptions: [
                { answerText: 'נכון', isCorrect: false },
                { answerText: 'לא נכון', isCorrect: true },
  
            ],
        },
        {
            questionText:'בן זוגי אוסר עליי לשתף אחרים לגבי הזוגיות שלנו',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'בן הזוג שלי לא מכריח אותי במהלך סקס לעשות דברים שאני לא רוצה',
            answerOptions: [
                { answerText: 'נכון', isCorrect: false },
                { answerText: 'לא נכון', isCorrect: true },
  
            ],
        },
        {
            questionText:'בן זוגי מתעצבן על דברים שאני עושה, לפעמים אפילו אם זה משהו שבעיני ממש קטן ולא משמעותי',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'חוויתי אלימות מילולית מבן הזוג שלי',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText: 'בן הזוג שלי נוטה להכחיש אירועים אובססיביים שקרו',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
    
      ];
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
     
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score +50);
      }
    
      const nextQuestion = currentQuestion + 1;
      if (score<200) {
        setCurrentQuestion(nextQuestion); 
      } else {
        setShowScore(true);
      }
    };
    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
           <Feel4/>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
    }
		