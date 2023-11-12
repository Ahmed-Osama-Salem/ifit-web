'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

export interface QuestionProps {
  author: string;
  questionDate: string;
  questionContent: string;
  answersCount: number;
  questionRout: string;
  questionImage: string;
}

const QuestionCard = ({
  author,
  questionDate,
  questionImage,
  questionContent,
  answersCount,
  questionRout,
}: QuestionProps) => {
  return (
    <Container
      flexDirection="column"
      className="flex w-72 flex-auto flex-col gap-3 p-5"
    >
      <Container
        bgColor="bg-none"
        flexDirection="row"
        className="flex items-center gap-4"
      >
        <div className="relative h-9 w-9">
          <Image
            src={questionImage}
            alt="userImage"
            className="h-9 w-9 rounded-full object-fill"
            fill
          />
        </div>

        <TypographyText tag="h4" className="text-[#666E80]">
          {author}
        </TypographyText>
        <TypographyText tag="span" className="text-[#98A1B3]">
          {questionDate}
        </TypographyText>
      </Container>
      <TypographyText tag="p" className="text-[#232633]">
        {questionContent}
      </TypographyText>

      <Container
        flexDirection="row"
        className="flex items-center justify-between"
      >
        <TypographyText tag="span" className="text-[#666E80]">
          {answersCount} Answers
        </TypographyText>
        <Link href={questionRout} className="text-[#4D7EA8]">
          Show Answer
        </Link>
      </Container>
    </Container>
  );
};

export default QuestionCard;
