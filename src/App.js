import DeliveryBar from "./components/DeliveryBar";
import NavBar from "./components/NavBar";
import Piechart from "./components/PieChart";
import Sidebar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";
import { ContextProvider, } from "./context/context";

export default function App() {
 

  return (
    <>
      <ContextProvider>
        <div className="w-full h-[40vh] bg-blue-700 fixed"></div>
        <div className="absolute flex w-full h-full top-0 left-0 ">
          <Sidebar />
          <div className="flex flex-col w-full" >
            <NavBar />
            <StatusBar />
            <div className="w-full flex justify-center">
              <div className="flex w-[95%]  mt-11 md:justify-between justify-center flex-wrap gap-4">
                <DeliveryBar />
                <Piechart />
              </div>
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}
