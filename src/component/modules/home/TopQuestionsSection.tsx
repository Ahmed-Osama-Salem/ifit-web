'use client';

import React from 'react';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

import HeaderBar from '../HeaderBar';
import type { QuestionProps } from './QuestionCard';
import QuestionCard from './QuestionCard';

const TopQuestionsSection = () => {
  const questions: QuestionProps[] = [
    {
      author: 'Mahmoud Said',
      answersCount: 20,
      questionContent: 'What the Different between sites and office ?',
      questionDate: '1 Aug',
      questionRout: '/asd',
      questionImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      author: 'Mahmoud Said',
      answersCount: 20,
      questionContent: 'What the Different between sites and office ?',
      questionDate: '1 Aug',
      questionRout: '/asd',
      questionImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      author: 'Mahmoud Said',
      answersCount: 20,
      questionContent: 'What the Different between sites and office ?',
      questionDate: '1 Aug',
      questionRout: '/asd',
      questionImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      author: 'Mahmoud Said',
      answersCount: 20,
      questionContent: 'What the Different between sites and office ?',
      questionDate: '1 Aug',
      questionRout: '/asd',
      questionImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <Container bgColor="bg-none">
      <HeaderBar title="Top Questions" />
      <Container bgColor="bg-none" flexDirection="row" className="flex gap-14">
        <div className="mt-5 h-[650px] rounded-xl bg-gray-200 p-8">
          <TypographyText tag="h3">
            The best choices for power engineering
          </TypographyText>

          <TypographyText tag="p">
            Generate Lorem Ipsum placeholder text. Select the number of words
          </TypographyText>
        </div>

        {/* Top Question Card */}
        <Container
          flexDirection="row"
          className="mt-8 flex flex-wrap items-center justify-between gap-10"
        >
          {questions.map(
            ({
              answersCount,
              author,
              questionContent,
              questionDate,
              questionImage,
              questionRout,
            }: QuestionProps) => {
              return (
                <QuestionCard
                  key={author}
                  author={author}
                  answersCount={answersCount}
                  questionContent={questionContent}
                  questionDate={questionDate}
                  questionRout={questionRout}
                  questionImage={questionImage}
                />
              );
            },
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default TopQuestionsSection;
