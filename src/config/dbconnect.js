import mongoose from "mongoose";

async function conectDatabase() {
  mongoose.connect(
    "mongodb+srv://phelipeprieto:sgm375dba@aluraapi.q3pypht.mongodb.net/aluraApi?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default conectDatabase;
