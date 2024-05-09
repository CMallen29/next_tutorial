import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-10 bg-slate-400 rounded-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
