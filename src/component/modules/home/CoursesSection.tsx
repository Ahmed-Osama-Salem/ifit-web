import Image from 'next/image';
import React from 'react';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

import HeaderBar from '../HeaderBar';

export interface CourseCardProps {
  id: number;
  img: string;
  instructor: string;
  title: string;
  discription: string;
}

export const courses: CourseCardProps[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Eng . Fady Adalat',
    title: 'The best sites for engineering',
    discription:
      'Generate Lorem Ipsum placeholder text. Select the number of words',
  },
];

const CoursesSection = () => {
  return (
    <Container bgColor="mt-12">
      <HeaderBar title="Our Courses" />
      <Container
        // bgColor="bg-none"
        flexDirection="row"
        className="mt-3 grid w-full grid-cols-3 gap-20"
      >
        {/* Course Card */}
        {courses.map((item: CourseCardProps) => {
          return (
            <Container
              flexDirection="column"
              key={item.id}
              className="flex h-96 w-full basis-96 flex-col gap-2"
            >
              <div className="relative h-72 w-full rounded-lg">
                <Image
                  alt="courseImage"
                  src={item.img}
                  className="rounded-lg object-fill"
                  fill
                />
              </div>
              <TypographyText tag="span" className="text-base text-gray-light">
                {item.instructor}
              </TypographyText>
              <TypographyText tag="h2" className="text-2xl text-gray-dark">
                {item.title}
              </TypographyText>
              <TypographyText tag="p" className="text-base text-gray-light">
                {item.discription}
              </TypographyText>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default CoursesSection;
