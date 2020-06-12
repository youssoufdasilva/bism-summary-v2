import React, { useState } from 'react';

import { ThemeContext } from '../theme-context';

const QuestionAndAnswer = (props) => {
  //Hooks
  const [isOpen, toggleOpen] = useState(false);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        console.log(props.qna);
        console.log(props.qna.Question);
        console.log(props.qna.Answer);
        return (
          <div
            className={
              theme === 'rainbow'
                ? 'shadow p-1 mb-5 bg-orange-100 rounded-lg'
                : `shadow p-1 mb-5 bg-${theme}-100 rounded-lg`
            }
          >
            <span>
              <strong>{props.qna.Question}</strong>
              <button
                onClick={() => toggleOpen(!isOpen)}
                style={{ rotate: '90deg', float: 'right' }}
              >
                {isOpen ? <span>&#10008;</span> : <span>&#10140;</span>}
              </button>
            </span>

            <span className={isOpen ? 'block' : 'hidden'}>
              <hr className='my-2' />
              <p>{props.qna.Answer}</p>
            </span>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default QuestionAndAnswer;

// curl https://api.airtable.com/v0/appeImf1TLInjENnH/Table%201?api_key=keyaHIT3dGLVbemjK
