import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return (
      <>
        <Header />
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="w-20 h-20 border-4 border-blue-700 border-t-transparent border-solid rounded-full animate-spins"></div>
        </div>
      </>
    );
  }
  else{
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
};

export default AppLayout;
