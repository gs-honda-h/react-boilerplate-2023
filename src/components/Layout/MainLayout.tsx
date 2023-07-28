import { Sidebar } from '../Elements/Sidebar';

import { Footer } from './Footer';
import { Header } from './Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="flex grow flex-row">
        <nav className="w-72 overflow-y-scroll">
          <Sidebar />
        </nav>
        <div className="grow">
          <main>{children}</main>
          <div className="fixed bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
