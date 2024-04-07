import { sql } from "@vercel/postgres";


import {
  Customer,
  TicketTable
} from './definitions';


/* export default function DummyTickets() {
  const parkingTickets = [
    {
      plate: "JIL456",
      origin: "CALI",
      vehicleType: "TRUCK",
      name: "Philippe",
      phone: "+1-666-0202",
      email: "phdior.mail@gmail.com",
      arrivalDate: "2023-10-20T03:27:46.522+00:00",
      price: 3000,
      leavingDate: "2023-10-21T21:08:08.498+00:00",
    },
    {
      plate: "ABC123",
      origin: "NY",
      vehicleType: "CAR",
      name: "Alexa",
      phone: "+1-555-1234",
      email: "example@example.com",
      arrivalDate: "2023-09-15T08:45:00.000+00:00",
      price: 2500,
      leavingDate: "2023-09-16T18:20:00.000+00:00",
    },
    {
      plate: "XYZ789",
      origin: "LA",
      vehicleType: "BIKE",
      phone: "+1-777-9876",
      name: "Lina",
      email: "test@test.com",
      arrivalDate: "2023-11-05T12:00:00.000+00:00",
      price: 3500,
      leavingDate: "2023-11-06T14:30:00.000+00:00",
    },
    {
      plate: "DEF456",
      origin: "TEXAS",
      vehicleType: "BOAT",
      phone: "+1-888-6543",
      name: "Andres",
      email: "user@example.org",
      arrivalDate: "2023-12-10T17:30:00.000+00:00",
      price: 4000,
      leavingDate: "2023-12-11T10:45:00.000+00:00",
    },
    {
      plate: "GHI789",
      origin: "FL",
      vehicleType: "MOTO",
      name: "Cline",
      phone: "+1-999-4567",
      email: "info@domain.com",
      arrivalDate: "2023-10-30T10:00:00.000+00:00",
      price: 2800,
      leavingDate: "2023-10-31T16:15:00.000+00:00",
    },
    {
      plate: "MNO123",
      origin: "WA",
      vehicleType: "TRUCK",
      phone: "+1-333-7890",
      name: "Pipe",
      email: "support@example.net",
      arrivalDate: "2023-07-20T06:00:00.000+00:00",
      price: 2000,
      leavingDate: "2023-07-21T12:30:00.000+00:00",
    },
    {
      plate: "QRS456",
      origin: "OH",
      vehicleType: "CAR",
      phone: "+1-222-5555",
      name: "Admin",
      email: "admin@example.com",
      arrivalDate: "2023-11-28T14:20:00.000+00:00",
      price: 3200,
      leavingDate: "2023-11-29T09:45:00.000+00:00",
    },
    {
      plate: "TUV789",
      origin: "IL",
      vehicleType: "BIKE",
      phone: "+1-111-2222",
      name: "Rocket",
      email: "customer@example.com",
      arrivalDate: "2023-08-12T09:15:00.000+00:00",
      price: 2700,
      leavingDate: "2023-08-13T15:30:00.000+00:00",
    },
    {
      plate: "JKL456",
      origin: "GA",
      vehicleType: "BOAT",
      name: "Wincol",
      phone: "+1-777-8888",
      email: "sales@example.com",
      arrivalDate: "2023-09-02T13:45:00.000+00:00",
      price: 2600,
      leavingDate: "2023-09-03T11:20:00.000+00:00",
    },
    {
      plate: "PQR123",
      origin: "NV",
      vehicleType: "MOTO",
      name: "Bruno",
      phone: "+1-444-9999",
      email: "info@example.org",
      arrivalDate: "2023-12-25T18:00:00.000+00:00",
      price: 3800,
      leavingDate: "2023-12-26T16:45:00.000+00:00",
    },
  ];

  return parkingTickets;
} */


export async function fetchParkingTickets() {


  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching tickets data...');


    const data = await sql<TicketTable>`SELECT parkingtickets.id,parkingcustomers.name, 
    parkingcustomers.phone,parkingcustomers.email, parkingtickets.arrivaldate,
    parkingtickets.leavingdate,parkingtickets.price,parkingtickets.origin,
    parkingtickets.type,parkingtickets.plate

    FROM parkingtickets
    
    INNER JOIN parkingcustomers
    
    ON parkingcustomers.id = parkingtickets.parkingcustomerid
    `;

   // console.log(data.rows);

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch parking tickets data.');
  }


};