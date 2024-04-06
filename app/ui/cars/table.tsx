import DummyTickets from "@/app/lib/data";
import { IconVehicle } from "./button";
import { formatCurrency, formatDateToLocal, formatTimeToLocal } from "@/app/lib/utils";



export default async function TableTickets() {

    const parkingTickets = await DummyTickets()
    return (

        <div className="relative overflow-x-auto my-4 bg-gray-100 p-2 rounded-md">
            <div className="md:hidden">
                {parkingTickets?.map((ticket) => (

                    <div key={ticket.plate} className="mb-2 w-min-full p-2 rounded-md flex flex-col bg-white">
                        <div className="flex flex-row shrink justify-between">
                            <div>
                                <IconVehicle VehicleType={ticket.vehicleType}></IconVehicle>
                            </div>
                            <div className="flex flex-col justify-center align-center rounded-md p-3 w-30">
                               <p className="italic font-bold"> {ticket.origin}</p>
                            </div>
                        </div>
                        <hr className="w-80 mx-auto my-2 text-gray"></hr>
                        <div className="flex flex-row">
                            <div>
                                <p className="text-base font-bold">{ticket.name}</p>
                                <a className="font-normal" href={`https://wa.me/${ticket.phone}`}>{ticket.phone}</a>
                                <p className="text-sm text-gray-400">{ticket.email}</p>
                            </div>
                            <div className="flex flex-col w-full justify-around items-center">
                                <label className="font-bold text-xl text-gray-700">{ticket.plate} </label>
                                <p className="font-black text-3xl">{formatCurrency(ticket.price)}</p>
                            </div>
                        </div>
                        <hr className="w-80 mx-auto my-2 text-gray"></hr>
                        <div className="flex flex-row justify-around">
                            <div>
                                <label className="font-bold text-xl text-gray-700">Ingreso</label>
                                <p className="font-light">{formatDateToLocal(ticket.entryDate)}</p>
                                <p className="font-normal">{formatTimeToLocal(ticket.leavingDate)}</p>
                            </div>
                            <div>
                                <label className="font-bold text-xl text-gray-700">Salida</label>
                                <p className="font-light">{formatDateToLocal(ticket.leavingDate)}</p>
                                <p className="font-normal">{formatTimeToLocal(ticket.leavingDate)}</p>
                            </div>
                        </div>

                    </div>

                ))}
            </div>

            <table className="hidden min-w-full text-gray-900 md:table rounded-t-lg border-solid border-2 border-gray-700" >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3">Plate</th>
                        <th scope="col" className="px-6 py-3">Origin</th>
                        <th scope="col" className="px-6 py-3">Vehicle Type</th>
                        <th scope="col" className="px-6 py-3">Phone</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Entry Date</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Leaving Date</th>
                    </tr>
                </thead>
                <tbody>
                    {parkingTickets.map(ticket => (
                        <tr key={ticket.plate} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="px-6 py-4">{ticket.plate}</td>
                            <td className="px-6 py-4">{ticket.origin}</td>
                            <td className="px-6 py-4">{ticket.vehicleType}</td>
                            <td className="px-6 py-4">{ticket.phone}</td>
                            <td className="px-6 py-4">{ticket.email}</td>
                            <td className="px-6 py-4">{new Date(ticket.entryDate).toLocaleString()}</td>
                            <td className="px-6 py-4">{ticket.price}</td>
                            <td className="px-6 py-4">{new Date(ticket.leavingDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

