import Link from "next/link";
import { PlusIcon, MagnifyingGlassIcon, } from '@heroicons/react/24/outline';
import Image from 'next/image';
import bike from '@/public/icons/BIKE.png'


export function CreateTicket() {

    return (
        <Link
            href="/dashboard/cars/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors 
            hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Ticket</span>
            <PlusIcon className="h-5 md:ml-4"></PlusIcon>
        </Link>
    )
}


export function IconVehicle({ VehicleType }: { VehicleType: String }) {

    const urlIcon = `/icons/${VehicleType}.png`

    return (
        <div className="p-2 m-1 bg-gray-200 rounded-full">
            <Image
                src={urlIcon}
                className="m-2"
                width={40}
                height={40}
                alt={`${VehicleType}'s profile picture`}
            />
        </div>
    )
}



