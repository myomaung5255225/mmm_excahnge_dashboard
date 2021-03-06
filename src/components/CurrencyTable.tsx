import React from "react";

export interface currencyProps {
    _id?: any;
    name?: any;
    keyword?: string;
    user?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}
interface currencyDataProps {
    data: any,
    onEditFunction: (data: any) => any | void;
    onDeleteFunction: (id: string) => any | void;
}

export const CurrencyTable: React.FC<currencyDataProps> = ({ data, onEditFunction, onDeleteFunction }) => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-blue-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            KeyWord
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            updatedAt
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium  text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        data && data.length > 0 && (
                                            data.map((d: currencyProps, i: number) => (
                                                <tr key={i}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {d.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {d.keyword}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-green-600">
                                                        {d.updatedAt?.toString()}
                                                    </td>

                                                    <td className="px-6 py-4 flex w-full justify-evenly items-center content-center ">
                                                        <button onClick={() => onEditFunction(d)} className='text-yellow-400 rounded-md border border-yellow-400 px-2 py-2 hover:text-yellow-600'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg></button>
                                                        <button onClick={() => onDeleteFunction(d._id)} className='text-red-500 rounded-md border border-red-400 px-2 py-2 hover:text-red-600'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                            </svg>
                                                        </button>
                                                    </td>

                                                </tr>
                                            ))
                                        )
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}