//importing modules
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

//details from the env
const username = "akashkumar";
const password = process.env.password;
const dbName = "taskManager";

//connection string to mongo atlas

const connectionString = `mongodb+srv://${username}:${password}@taskmanager.jkrm1.mongodb.net/?retryWrites=true&w=majority&appName=${dbName}`;

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

console.log({ connectionString, username });

//db connection
export const db = mongoose
  .connect(connectionString, options)
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully to ${dbName}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
