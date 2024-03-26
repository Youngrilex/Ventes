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
          <div className="w-[40%] ">
            <img className="bg-[#5041BC] text-[#5041BC] rounded-2xl" src="../src/assets/image 1.svg" alt="" />
          <Avatar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
