import React from 'react';

import TypographyText from '../elements/Typography';

interface TagProps {
  background?:
    | 'bg-black-dark'
    | 'bg-gray-light'
    | 'bg-gray-lighter'
    | 'bg-none';
  text?: 'text-white' | 'text-black-dark' | 'text-gray-light';
  content: string;
  size?: 'text-base' | 'text-md' | 'text-lg';
}
const Tag = (props: TagProps) => {
  const {
    background = 'bg-gray-lighter',
    text = 'text-white',
    content,
    size = 'text-base',
  } = props;
  return (
    <div
      className={`w-fit rounded-full ${background} ${text} ${size} px-5 py-2  transition duration-150`}
    >
      <TypographyText tag="h3" className={size}>
        {content}
      </TypographyText>{' '}
    </div>
  );
};

export default Tag;
