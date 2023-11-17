import React from 'react';

import QuestionLayout from '@/component/layouts/QuestionLayout';
import QuestionList from '@/component/modules/question/QuestionList';

const Question = () => {
  return (
    <QuestionLayout dependChildren="dependChildren">
      <QuestionList />
    </QuestionLayout>
  );
};

export default Question;
