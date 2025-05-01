import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";

import { TbChartCandle } from "react-icons/tb";
import { TradeModal } from '../../../components/modal';


import Sidebar from '../../../components/sidebar';
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {

  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

  const openTradeModal = () => {
    console.log("TradeModal opened");
    setIsTradeModalOpen(true);
  };

  const closeTradeModal = () => {
    setIsTradeModalOpen(false);
  };
  return (
    <div>
      {/* create button to click for add trade modal popup */}
      <TbChartCandle className='h-20 w-20'/>

      <h1>No Trades</h1>
      <p>
        once you add some trades on the trades page you will see data and
        analysis appear here. This will be your dashboard.
      </p>
      <Button 
      onClick= {()=>{
        openTradeModal();
      console.log('Add Trade button clicked')
      }}
      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
      variant="secondary">Add Trade</Button>
  
    <TradeModal isOpen={isTradeModalOpen} onClose={closeTradeModal}/>
  </div>
  );
};
  
  export default Dashboard;





// const Dashboard = () => {

//   return (
//     <div>
//       {/* Card widget */}

//       <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Realized Profits"}
//           subtitle={"$340.5"}
//         />
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Urealized Profits"}
//           subtitle={"$642.39"}
//         />
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Trade Profits"}
//           subtitle={"$574.34"}
//         />
//         <Widget
//           icon={<MdDashboard className="h-6 w-6" />}
//           title={"Total Risk"}
//           subtitle={"$1,000"}
//         />
//         <Widget
//           icon={<MdBarChart className="h-7 w-7" />}
//           title={"Total Account Value"}
//           subtitle={"$145,000"}
//         />
        
//       </div>

//       {/* Charts */}

//       <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
//         <TotalSpent />
//         <WeeklyRevenue />
//       </div>

//       {/* Tables & Charts */}

//       <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
//         {/* Check Table */}
//         <div>
//           <CheckTable
//             columnsData={columnsDataCheck}
//             tableData={tableDataCheck}
//           />
//         </div>

//         {/* Traffic chart & Pie Chart */}

//         <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
//           <DailyTraffic />
//           <PieChartCard />
//         </div>

//         {/* Complex Table , Task & Calendar */}

//         <ComplexTable
//           columnsData={columnsDataComplex}
//           tableData={tableDataComplex}
//         />

//         {/* Task chart & Calendar */}

//         <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
//           <TaskCard />
//           <div className="grid grid-cols-1 rounded-[20px]">
//             <MiniCalendar />
//           </div>
//         </div>

      

//       </div>
//     </div>
//   );
// };

// export default Dashboard;
