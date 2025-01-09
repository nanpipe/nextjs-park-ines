'use client';

import VehicleType from "@/app/lib/data";
import Menubar from "@/app/ui/menubar";



export default function Create() {
    const vehicleType = VehicleType();
    async function doSomething(formData: FormData) {

        console.log(formData.get("date"))
        console.log(formData.get("time"))
        console.log(formData.get("name"))
        console.log(formData.get("plate"))
        console.log(formData.get("correo"))
        console.log(formData.get("telefono"))
        console.log(formData.get("origin"))
        console.log(formData.get("vehicletype"))
    }


    return (
        <>  
            <Menubar></Menubar>
            <form action={doSomething}>

                <div className="mb-2 w-min-full p-2 rounded-md flex flex-col bg-white ">
                    <h1 className="text-center">Crear nuevo tiquete</h1>
                    <div className="flex flex-row shrink justify-between my-4"> {/* Date & Time */}
                        <label htmlFor="Date" className="mb-2 block text-sm font-medium">
                            Fecha
                        </label>
                        <input type="date"
                            name="date"
                            id="date"
                            

                        />
                        <label htmlFor="Time" className="mb-2 block text-sm font-medium">
                            Hora
                        </label>
                        <input type="time"
                            name="time"
                            id="time"
                        />
                    </div>
                    <hr className="w-80 mx-auto my-2 text-gray"></hr>
                    <div className="flex flex-col">
                        <p> Información del vehiculo</p>
                        <div>
                            <label htmlFor="plate" className="mb-2 block text-sm font-medium">
                                PLACA VEHICULO
                            </label>
                            <div className="relative ">
                                <input className="border-solid border-2"
                                    id="plate"
                                    name="plate"
                                    type="text"
                                    placeholder="ABC123"
                                    defaultValue={`abc1232`}
                                    required
                                />
                            </div>
                            <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                                Nombre
                            </label>
                            <div className="relative ">
                                <input className="border-solid border-2"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nombre completo"
                                    defaultValue={`Dario`}
                                    required
                                />
                            </div>
                            <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
                                Telefono
                            </label>
                            <div className="relative ">
                                <input className="border-solid border-2"
                                    id="telefono"
                                    name="telefono"
                                    type="text"
                                    placeholder="+573014526358"
                                    defaultValue={`+561323`}
                                    required
                                />
                            </div>
                            <label htmlFor="correo" className="mb-2 block text-sm font-medium">
                                Correo (opcional)
                            </label>
                            <div className="relative ">
                                <input className="border-solid border-2"
                                    type="text"
                                    name="correo"
                                    id="correo"
                                    placeholder="correo@gmail.com"
                                    defaultValue={`correo@chimbis`}
                                    required
                                />
                            </div>

                            <hr className="w-80 mx-auto my-2 text-gray"></hr>


                            <label htmlFor="vehicle-type" className="mb-2 block text-sm font-medium">
                                Choose customer
                            </label>
                            <div className="relative my-3">
                                <select
                                    id="vehicletype"
                                    name="vehicletype"
                                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue=""
                                    aria-describedby="vehicletype-error"
                                >
                                    <option value="" disabled >
                                        Selecciona tipo de vehiculo
                                    </option>
                                    {vehicleType?.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="relative my-3">
                                <select
                                    id="origin"
                                    name="origin"
                                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue=""
                                    aria-describedby="origin-error"
                                >
                                    <option value="" disabled >
                                        Tipo de ticket?
                                    </option>
                                    {vehicleType?.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>

                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Crear tiquete
                    </button>
                </div>



            </form>
        </>
    )
}


