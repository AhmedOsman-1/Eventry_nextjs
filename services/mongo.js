import mongoose from "mongoose";

export async function dbConnect() {
  const uri = process.env.MONGO_URI; 

  if (!uri) {
   
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

 
    return conn;
  } catch (error) {
    console.error(error);
  }
}
