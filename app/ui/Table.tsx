import { useState } from 'react';

interface TableComponentProps {
  data: { [key: string]: any }[]; // Define data as an array of objects with string keys and any values
  showBorder?: boolean;
}

const TableComponent = ({ data, showBorder = true }: TableComponentProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="overflow-x-autow-full">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
      />
      <div className="shadow overflow-x-auto overflow-y-auto border-b border-gray-200 sn:rounded-lg " >
        <table className={`min-w-full divide-y divide-gray-200 ${showBorder ? 'border' : ''}`}>
          <thead className="bg-gray-50">
            <tr>
              {/* Assuming the JSON data structure has keys that match the table headers */}
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr key={index} className="transition-colors duration-200 hover:bg-gray-50">
                {Object.values(row).map((value, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
