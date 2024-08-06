import React, { ReactNode } from 'react';
import Footer from '@/common/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] overflow-y-scroll p-4 items-center">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
