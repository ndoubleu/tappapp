import React, { ReactNode } from 'react';
import Footer from '@/common/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-[calc(100vh-50px)] overflow-y-scroll p-4 items-center">
      <main className="flex-grow max-w-[400px] pb-[50px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
