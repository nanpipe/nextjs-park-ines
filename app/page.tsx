import Image from "next/image";
import { CreateTicket } from "./ui/cars/button";
import Search from "./ui/search";
import TableTickets from "./ui/cars/table";
import Menubar from "./ui/menubar";

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
    
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Menubar></Menubar>
      <div className="flex w-full">
        <Search placeholder="search"></Search>
        <CreateTicket></CreateTicket>
      </div>
      <TableTickets></TableTickets>
    </main>
  );
}
