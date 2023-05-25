import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MakeUpQuiz = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const MkQuestionnaire = [
    {
      question: 'What is your skin type?',
      options: ['Dry', 'Oily', 'Normal', 'Combination']
    },
    {
      question: 'What features do you want to emphasize?',
      options: ['Cheeks', 'Eyes', 'Lips', 'Nose']
    },
    {
      question: 'What style of makeup fits you?',
      options: ['Bold', 'Natural', 'Full Glam', 'Edgy']
    },
    {
      question: 'What is your budget for makeup?',
      options: ['25', '50', '75', '100+']
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setAnswers([...answers, selectedOption]);
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers:', answers);


    setAnswers([]);
    setCurrentQuestion(0);
  };
  const navigate =useNavigate()

  return (
    <section>
      <div className="MakeUpQ">
        <h2 className="title">Makeup Questionnaire</h2>
      <div className="NamesEmails">
        <input className="FL"
          type="input"
          name="name"
          placeholder="First & Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <input className="Email"
          type="input"
          name="email"
          placeholder="your-email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        {currentQuestion < MkQuestionnaire.length ? (
          <div className="second-container">
            <p className="Ques1">Question {currentQuestion + 1}:</p>
            <p className="SurQues">{MkQuestionnaire[currentQuestion].question}</p>
            <div>
              {MkQuestionnaire[currentQuestion].options.map((option, index) => (
                <label className="answerKey"key={index}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button className="submitBtn" onClick={handleNextQuestion}>Next</button>
          </div>
        ) : (
          <div>
            <h3 className="completedSur">Questionnaire completed!</h3>
            <p className="TY">Thank you for your responses.</p>
            
          
            
            <button className="submitBtn" onClick={() => navigate('makeup-inventory')}>Submit</button>
            <button className="submitBtn" onClick={() => navigate('/')}>Home</button>
            
          
          </div>
        )}
      </div>
              

    </section>
  );
};

export default MakeUpQuiz;
