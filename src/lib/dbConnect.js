
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

if (!dbName) {
  throw new Error("DB_NAME is missing");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

export async function connectToMongoDB() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("Successfully connected to MongoDB!");
  }

  return client;
}

export async function disconnectFromMongoDB() {
  if (isConnected) {
    await client.close();
    isConnected = false;
  }
}

export const connect = (collection) => {
  return client.db(dbName).collection(collection);
};