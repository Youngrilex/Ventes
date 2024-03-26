import Siderbar from "./components/Siderbar";

import Header from "./components/Header";
import Table from "./components/Table";

const App: React.FC = () => {

  // function App() {
  return (
    <div>
      <Siderbar />
      <div className="bg-[#FFFFFF] rounded-3xl h-[100vh] absolute top-0 left-52">
        <Header />
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Table Example</h1>
      <Table />
    </div>
      </div>
    </div>
  );
};

export default App;
