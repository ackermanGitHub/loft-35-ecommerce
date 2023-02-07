import StoreProvider from '@/context/Store';
import { SessionProvider, useSession } from 'next-auth/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean };
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps): ReactElement => {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </SessionProvider>
  );
};

export default App;
