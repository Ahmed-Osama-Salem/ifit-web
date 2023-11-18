import React from 'react';

import QuestionLayout from '@/component/layouts/QuestionLayout';
import QuestionGetStarted from '@/component/modules/question/QuestionGetStarted';
import QuestionList from '@/component/modules/question/QuestionList';

const Question = () => {
  return (
    <QuestionLayout dependChildren={<QuestionGetStarted />}>
      <QuestionList />
    </QuestionLayout>
  );
};

export default Question;
