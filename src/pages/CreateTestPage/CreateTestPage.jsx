

import { useState } from "react";

const CreateTestPage = () => {
    
    
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionsArray, setOptionsArray] = useState([]);
    const [task, setTask] = useState('');

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

return (
    <div>
      <div>Завдання</div>
      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
      </div>

      <div>Варіанти відповідей</div>
      {optionsArray.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addOption}>Додати варіант</button>

      <div>Оберіть правильну відповідь</div>
      <input
            type="text"
            value={correctAnswer}
            onChange={handleCorrectAnswerChange}
          />
    </div>
  );
}

export default CreateTestPage;