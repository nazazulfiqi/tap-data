import React, { FC, ReactNode } from "react";
import { SidebarComponent } from "../../sidebar/sidebar";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-2">
      <SidebarComponent />
      <main className="max-w-4xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
};

export default BaseLayout;
