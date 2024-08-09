import React, { ReactNode } from 'react';
import Footer from '@/common/footer';
import { ConfigProvider } from 'antd';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2FEAB2',
            borderRadius: 14,
          },
          components: {
            Button: {
              colorBgTextHover: '#1E3C3A',
              colorLink: '#1E3C3A',
              colorLinkHover: '#1E3C3A',
              colorLinkActive: '#1E3C3A'
            },
          }
        }}
      >
    <div className="relative flex flex-col h-[calc(100vh-50px)] overflow-y-scroll overflow-x-hidden p-4 items-center">
      <main className="flex-grow max-w-[400px] pb-[50px] w-full">
        {children}
      </main>
      <Footer />
    </div>
    </ConfigProvider>
    </>
  );
};

export default Layout;
