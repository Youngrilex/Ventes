// Table.tsx

import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Table: React.FC = () => {
  // Dummy data for demonstration
  const data = [
    { id: 1, image: '/dp.svg', name: 'Nicholas Patrick', amount:'$ 2540.58', product:'150 Products', premium:'105 Premium', rank:'+Gold' },
    { id: 2, image: '/dp.svg', name: 'Cordell Edwards',amount: '$ 1567.80', product:'95 Products', premium:'60 Premium', rank:'+Silver'  },
    { id: 3, image: '/dp.svg', name: 'Derrick Spencer', amount: '$ 1640.26', product:'120 Products', premium:'75 Premium', rank:'+Silver'  },
    { id: 4, image: '/dp.svg', name: 'Larissa Burton', amount: '$ 2340.58', product:'120 Products', premium:'99 Premium', rank:'+Gold'  },
  ];

 
  return (
    <div className="overflow-hidden">
      <table className="table-auto w-full">
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={`hover:bg-gray-100 ${index !== data.length - 1 ? 'mb-4' : ''}`}>
              <td className="flex gap-8 items-center px-4 py-2">
                <img src={item.image} alt="Item" className="w-10 h-10 object-cover rounded-full" />
                <div>{item.name}</div>
              </td>
              <td className="px-4 py-2 font-bold">{item.amount}</td>
              <td className="px-4 py-2">{item.product}</td>
              <td className="px-4 py-2">{item.premium}</td>
              <td className={`px-4 py-2  ${index > 0 && index <= 2 ? 'text-[#43BE83]' : ''}`}>{item.rank}</td>
              <td className="px-4 py-2">
               <BsThreeDotsVertical className='text-[#5041BC]'/>              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
