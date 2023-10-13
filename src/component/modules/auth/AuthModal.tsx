import { signIn } from 'next-auth/react';
import React from 'react';

import { Button } from '@/component/elements/Button';
import Container from '@/component/elements/Container';

const AuthModal = () => {
  return (
    <Container className="flex h-[500px] w-[600px] flex-col items-center gap-4">
      <Button
        bgType="default"
        bgClass="btn_main"
        rounded="rounded-[100px]"
        padding="px-6 py-2"
        className="w-[320px]"
        onClick={() => {
          signIn('google');
        }}
      >
        Sign in with Google
      </Button>
      <Button
        bgType="default"
        bgClass="btn_main"
        rounded="rounded-[100px]"
        padding="px-6 py-2"
        className="w-[320px]"
      >
        Sign in with Facebook
      </Button>
    </Container>
  );
};

export default AuthModal;
