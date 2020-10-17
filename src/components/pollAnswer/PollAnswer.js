import React from 'react';

function PollAnswer({ answer, index, deleteAnswer }) {
  return (
    <li className="poll-answer">
      <label htmlFor="answer">
        Answer&nbsp;
        {index + 1}
        :
        <input type="text" name="answer" placeholder="Add answer" defaultValue={answer.text} />
      </label>
      <button type="button" onClick={() => deleteAnswer(answer.text)}>
        <span role="img" aria-label="red-x">
          &#10060;
        </span>
      </button>
    </li>
  );
}

export default PollAnswer;
