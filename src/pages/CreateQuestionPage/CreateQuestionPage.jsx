import './CreateQuestionPage.scss'

import { useEffect, useState } from "react";
import axios from '../../axios.jsx';

const CreateQuestionPage = () => {
    
    
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionsArray, setOptionsArray] = useState([]);
    const [task, setTask] = useState('');
	const [topicId, setTopicId] = useState();
	const [allTopics, setAllTopics] = useState([]);


	useEffect(() => {
		axios.get('/topics')
			.then(response => {
				// Assuming the response.data contains the array of topics
				console.log(response.data);
				setAllTopics(response.data);
			})
			.catch(error => {
				console.error('Error fetching topics:', error.response ? error.response.data : error.message);
			});
	}, []);


    const handleTaskChange = (e) => {
        setTask(e.target.value)
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...optionsArray];
        newOptions[index] = value;
        setOptionsArray(newOptions);
      };
    
      const addOption = () => {
        setOptionsArray([...optionsArray, '']);
      };
    
      const handleCorrectAnswerChange = (e) => {
        setCorrectAnswer(e.target.value);
      };

	  const removeOption = (index, e) => 
	  {
		const newOptions = [...optionsArray]
		newOptions.splice(index,1);
		setOptionsArray(newOptions);
	  }

	  const sendQuestion = () => {
			
    const questionData = {
        name: 'Question',
        task: task,
		topicId: topicId,
        answerOptions: optionsArray,
        correctAnswer: correctAnswer,
    };

    axios.post('/questions', questionData)
        .then(response => {
            console.log('Question created:', response.data);
        })
        .catch(error => {
            console.error('Error creating question:', error.response ? error.response.data : error.message);
        });
	  }

return (
    <div className="create-question-page">
      <div className="create-question-page__subtitle">Завдання</div>
      <div className='create-question-page__inputblock'>
        <textarea className="create-question-page__input" type="text" value={task} onChange={handleTaskChange} />
      </div>

      <div className="create-question-page__subtitle">Варіанти відповідей</div>
      {optionsArray.map((option, index) => (
        <div  className='create-question-page__inputblock' key={index}>
          <textarea
		  	className="create-question-page__input"
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
		  <div className='circle' onClick={(e) => removeOption(index,e)}><div className='circle__minus'></div></div>
        </div>
      ))}
      <button className='create-question-page__button' onClick={addOption}></button>

      <div className="create-question-page__subtitle">Оберіть правильну відповідь</div>
      <div className='create-question-page__inputblock' >
    	<textarea className="create-question-page__input"
            type="text"
            value={correctAnswer}
            onChange={handleCorrectAnswerChange}
          />
      </div>
	  <select value={topicId} onChange={e => setTopicId(e.target.value)}>
			<option value="">Select a topic</option>
			{allTopics.map(topic => (
				<option key={topic._id} value={topic._id}>{topic.name}</option>
			))}
	</select>

	  <button onClick={sendQuestion}>Send</button>
    </div>
	
  );
}

export default CreateQuestionPage;