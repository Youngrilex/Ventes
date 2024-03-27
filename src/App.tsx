import Siderbar from "./components/Siderbar";
import Header from "./components/Header";
import Table from "./components/Table";
import Reports from "./components/Reports";
import ApexChart from "./components/Chart";
import TeamTarget from "./components/TeamTarget";

const App: React.FC = () => {
  return (
    <div>
      <Siderbar />
      <div className="bg-[#FFFFFF] rounded-3xl h-screen absolute top-0 left-52">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Top sales Representatives</h1>
          <Table />
        </div>
        <Reports />
        <div className="w-full flex gap-6 mt-8">
          <div className="w-[60%] ">
            <ApexChart />
          </div>
          <div className="w-[40%] relative bg-[#5041BC] text-[#5041BC] rounded-2xl shadow-purple-400  shadow-2xl h-[280px]">
            <TeamTarget/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
