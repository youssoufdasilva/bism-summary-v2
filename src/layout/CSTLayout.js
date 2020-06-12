import React from 'react';

import QuestionAndAnswer from '../layout/QuestionAndAnswer';

const CSTLayout = (props) => (
  <div>
    <div className='mt-4 mb-10'>
      <h1 className='text-2xl font-semibold'>{props.pageTitle}</h1>
      <p>{props.pageDescription}</p>
    </div>

    {props.data.map((content) => {
      if (content.fields !== {}) {
        return <QuestionAndAnswer key={content.id} qna={content.fields} />;
      } else return null;
    })}
  </div>
);

export default CSTLayout;
