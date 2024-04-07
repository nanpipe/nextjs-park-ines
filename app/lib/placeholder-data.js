// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const parkingCustomers = [
  {
    name: 'Philippe',
    phone: '+16015869748',
    email: 'Philippe@lanesra.com',
  },
  {
    name: 'Lina',
    phone: '+573269857',
    email: 'Lina@beauty.chick',
  },
  {
    name: 'Wincol',
    phone: '+59347586210',
    email: 'Wincol@guauguau.paw',
  }
];

const parkingTickets = [
  {
    id: "123e4567-e89b-12d3-a456-426655440000",
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    arrival: new Date("2024-04-01T08:00:00").toLocaleDateString(),
    leave: new Date("2024-04-01T12:00:00").toLocaleDateString(),
    price: 10000,
    origin: "Hotel Calima",
    type: "Car",
    plate: "ABC123"
  },
  {
    id: "223e4567-e89b-12d3-a456-426655440001",
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    arrival: new Date("2024-04-02T10:30:00").toLocaleDateString(),
    leave: new Date("2024-04-03T09:45:00").toLocaleDateString(),
    price: 15000,
    origin: "Particular",
    type: "Car",
    plate: "XYZ789"
  },
  {
    id: "323e4567-e89b-12d3-a456-426655440002",
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    arrival: new Date("2024-04-03T16:00:00").toLocaleDateString(),
    leave: null,
    price: 0,
    origin: "Neblina",
    type: "Truck",
    plate: "DEF456"
  },
  {
    id: "423e4567-e89b-12d3-a456-426655440003",
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    arrival: new Date("2024-04-04T07:45:00").toLocaleDateString(),
    leave: new Date("2024-04-04T13:30:00").toLocaleDateString(),
    price: 30100,
    origin: "Hotel Calima",
    type: "Car",
    plate: "GHI789"
  },
  {
    id: "523e4567-e89b-12d3-a456-426655440004",
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    arrival: new Date("2024-04-05T14:15:00").toLocaleDateString(),
    leave: new Date("2024-04-06T12:00:00").toLocaleDateString(),
    price: 20000,
    origin: "Particular",
    type: "Moto",
    plate: "JKL012"
  },
  {
    id: "623e4567-e89b-12d3-a456-426655440005",
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    arrival: new Date("2024-04-06T09:00:00").toLocaleDateString(),
    leave: null,
    price: 0,
    origin: "Neblina",
    type: "Boat",
    plate: "MNO345"
  },
  {
    id: "723e4567-e89b-12d3-a456-426655440006",
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    arrival: new Date("2024-04-07T12:00:00").toLocaleDateString(),
    leave: new Date("2024-04-07T20:00:00").toLocaleDateString(),
    price: 12000,
    origin: "Hotel Calima",
    type: "Bike",
    plate: "PQR678"
  },
  {
    id: "823e4567-e89b-12d3-a456-426655440007",
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    arrival: new Date("2024-04-08T08:30:00").toLocaleDateString(),
    leave: new Date("2024-04-09T17:45:00").toLocaleDateString(),
    price: 1500,
    origin: "Particular",
    type: "Car",
    plate: "STU901"
  },
  {
    id: "923e4567-e89b-12d3-a456-426655440008",
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    arrival: new Date("2024-04-09T14:00:00").toLocaleDateString(),
    leave: null,
    price: 0,
    origin: "Neblina",
    type: "Truck",
    plate: "VWX234"
  },
  {
    id: "a23e4567-e89b-12d3-a456-426655440009",
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    arrival: new Date("2024-04-10T09:30:00").toLocaleDateString(),
    leave: new Date("2024-04-10T16:00:00").toLocaleDateString(),
    price: 10000,
    origin: "Hotel Calima",
    type: "Car",
    plate: "YZA567"
  }
];


const parkingCars = [
  {
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    plate: "ABC123"
  },
  {
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    plate: "XYZ789"
  },
  {
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    plate: "DEF456"
  },
  {
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    plate: "GHI789"
  },
  {
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    plate: "JKL012"
  },
  {
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    plate: "MNO345"
  },
  {
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    plate: "PQR678"
  },
  {
    customerId: "cc1f0a15-f919-4b67-b768-ace7b6563181",
    plate: "STU901"
  },
  {
    customerId: "3bb643e7-ebcd-4996-ade9-30a20c4c9b3f",
    plate: "VWX234"
  },
  {
    customerId: "4295ae74-1485-4606-af01-0e0f50f02b06",
    plate: "YZA567"
  }
];



module.exports = {
  parkingCustomers,
  parkingTickets,
  parkingCars
};
