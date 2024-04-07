const { db } = require('@vercel/postgres');
const {
  parkingTickets,
  parkingCustomers,
  parkingCars,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcryptjs');

/*  async function seedUsers(client) {
     try {
       // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
       // // Create the "users" table if it doesn't exist
       // const createTable = await client.sql`
       //   CREATE TABLE IF NOT EXISTS users (
       //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       //     name VARCHAR(255) NOT NULL,
       //     email TEXT NOT NULL UNIQUE,
       //     password TEXT NOT NULL
       //   );
       // `;
   
       // console.log(`Created "users" table`);
   
        // Insert data into the "users" table
       const insertedUsers = await Promise.all(
         users.map(async (user) => {
           const hashedPassword = await bcrypt.hash(user.password, 10);
           return client.sql`
           INSERT INTO users (id, name, email, password)
           VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
           ON CONFLICT (id) DO NOTHING;
         `;
         }),
       );
   
       console.log(`Seeded ${insertedUsers.length} users`);
   
       return {
         createTable,
         users: insertedUsers,
       };
     } catch (error) {
       console.error('Error seeding users:', error);
       throw error;
     }
   }
    */

/* async function seedCustomers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "customers" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS parkingcustomers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      );
    `;

        console.log(`Created "customers" table`);

        // Insert data into the "customers" table
        const insertedCustomers = await Promise.all(
            parkingCustomers.map(
                (customer) => client.sql`
        INSERT INTO parkingcustomers (name, phone, email)
        VALUES (${customer.name}, ${customer.phone}, ${customer.email})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedCustomers.length} customers`);

        return {
            createTable,
            customers: insertedCustomers,
        };
    } catch (error) {
        console.error('Error seeding customers:', error);
        throw error;
    }
} */

 async function seedTickets(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "tickets" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS PARKINGTICKETS (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            parkingcustomerid UUID NOT NULL,
            arrival DATE NOT NULL,
            leave DATE,
            price INT,
            origin VARCHAR(255),
            type VARCHAR(10) NOT NULL,
            plate VARCHAR(10) NOT NULL

  );
`;

        console.log(`Created "parkingTickets" table`);

        // Insert data into the "invoices" table
        const insertedTickets = await Promise.all(
            parkingTickets.map(
                (ticket) => client.sql`
        INSERT INTO parkingTickets (parkingcustomerid,arrivaldate,leavingdate,price, origin, type,plate)
        VALUES (${ticket.customerId}, ${ticket.arrival},${ticket.leave},${ticket.price}, ${ticket.origin}, ${ticket.type},${ticket.plate})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedTickets.length} tickets`);

        return {
            createTable,
            parkingTickets: insertedTickets,
        };
    } catch (error) {
        console.error('Error seeding insertedTickets:', error);
        throw error;
    }
} 



// async function seedCars(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS parkingCars (
//         plate VARCHAR(10) NOT NULL UNIQUE PRIMARY KEY,
//         parkingcustomerid UUID NOT NULL
//       );
//     `;

//     console.log(`Created "parkingCars" table`);

//     // Insert data into the "parkingCars" table
//     const insertedCars = await Promise.all(
//       parkingCars.map(
//         (car) => client.sql`
//         INSERT INTO parkingCars (plate, parkingcustomerid)
//         VALUES (${car.plate}, ${car.customerId})
//         ON CONFLICT (plate) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCars.length} revenue`);

//     return {
//       createTable,
//       parkingCars: insertedCars,
//     };
//   } catch (error) {
//     console.error('Error seeding parkingCars:', error);
//     throw error;
//   }
// }

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedCustomers(client);
  await seedTickets(client);
  //await seedCars(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
