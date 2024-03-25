"use client"
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import TableComponent from './Table';

// Define type outside of the component
type ParsedData = Record<string, any>[];

function ExcelDataViewer() {
    const [data, setData] = useState<ParsedData | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]; // Add a null check here
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target) {
                    const fileReader = event.target as FileReader;
                    const result = fileReader.result;
                    if (result && typeof result === 'string') {
                        const workbook = XLSX.read(result, { type: 'binary' });
                        const firstSheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[firstSheetName];
                        const parsedData: ParsedData = XLSX.utils.sheet_to_json(worksheet, { header: 0 });
                        
                        setData(parsedData);
                    }
                }
            };

            reader.readAsBinaryString(file);
        }
    };

    const columns = data && Object.keys(data[0]).map((header) => ({ name: header, selector: header }));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
            <input type="file" onChange={handleFileChange} className="border rounded-md p-2 mb-4" />
            <div className="bg-white rounded-md shadow-md p-6 w-full max-w-lg overflow-auto">
                {data && (
                    <>
                        <h2 className="text-xl font-bold mb-4">Excel Data:</h2>
                        <TableComponent()
                            data={data}
                            columns ={columns}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default ExcelDataViewer;
