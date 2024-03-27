import Siderbar from "./components/Siderbar";
import Header from "./components/Header";
import Table from "./components/Table";
import Reports from "./components/Reports";
import ApexChart from "./components/Chart";
import Avatar from "./components/Avatar";

const App: React.FC = () => {
  // function App() {
  return (
    <div>
      <Siderbar />
      <div className="bg-[#FFFFFF] rounded-3xl h-[100vh] absolute top-0 left-52">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Top sales Representatives</h1>
          <Table />
        </div>
        <Reports />
        <div className="w-full flex gap-6 mt-8">
          <div className="w-[60%] ">
            <ApexChart />{" "}
          </div>
          <div className="w-[40%] relative bg-[#5041BC] text-[#5041BC] rounded-2xl shadow-purple-400  shadow-2xl h-[280px]">
            <img
              className="absolute top-0 left-0 opacity-20"
              src="/image 1.svg"
              alt=""
            />
            <div className="">
            <div className="text-[#ffffff] p-8">
            <h1 className="text-[16px]">Sales team target</h1>
            <h1 className="text-[34px] font-bold">82%</h1>
            <h1 className="text-[16px]">Achieved</h1>
            <h1 className="text-[16px] mt-8">Cleared queue</h1>
            <h1 className="text-[34px] font-bold">1.4K</h1>
            <h1 className="text-[16px]">No. of Bills</h1>
            </div>
            <div className="mx-24">
           
           <Avatar />
         </div>
            </div>
            
        
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
