import { ReactNode } from "react";
import { Footer, Navbar } from "../../components";

interface IMainLayout {
  children: ReactNode;
}
export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
