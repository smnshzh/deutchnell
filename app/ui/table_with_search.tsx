import React, { useState } from 'react';

// Define an interface for the type of data
interface TableData {
    [key: string]: string | number; // Define the types of values for each key
}

interface TableWithSearchProps {
    data: TableData[]; // Specify that data should be an array of objects with string or number values
}

function TableWithSearch({ data }: TableWithSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableWithSearch;
