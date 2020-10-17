import React from 'react';
import './CreatePoll.css';

function CreatePoll({ pollData }) {
  return (
    <div className="create-poll">
      <h3 className="create-poll-header">Create your Poll here.</h3>
      <form>
        <div className="create-poll-questions">
          {pollData.map( (question, index ) => 
            <label key={index}>
              Question {index +1}:
              <input type="text" name="name" defaultValue={question.text}/>
            </label>
          )}
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div className="create-poll-footer">
        <p>{pollData.length}/10 Possible Answers.</p>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default CreatePoll;
