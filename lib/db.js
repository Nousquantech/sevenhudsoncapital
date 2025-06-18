const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDb(dbName) {
  try {
    if (!client.isConnected()) {
      await client.connect();
    }
    return client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
}

export async function getCollection(collectionName) {
  try {
    const db = await getDb(sample_mflix);
    return db.collection(collectionName);
  } catch (error) {
    console.error(
      `Failed to get collection ${collectionName} from database ${dbName}:`,
      error
    );
    throw error;
  }
}
