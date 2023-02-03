import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Loft 35' : 'Loft 35'}</title>
        <meta name="description" content="Loft-35 Store Sales Sistem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
