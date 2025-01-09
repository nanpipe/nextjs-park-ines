import Image from "next/image";
import Search from "@/app/ui/search";
import { CreateTicket } from "@/app/ui/cars/button";
import TableTickets from "@/app/ui/cars/table";
import Menubar from "../ui/menubar";


export default function Home({
        searchParams,
      }: {
        searchParams?: {
          query?: string;
        };
}
) {

  const query = searchParams?.query || '';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-white">
      <Menubar></Menubar>
      <div>
        <h1>Tickets</h1>
      </div>
      <div className="flex w-full">
        <Search placeholder="search"></Search>
        <CreateTicket></CreateTicket>
      </div>

      <TableTickets></TableTickets>
    </main>
  );
}
