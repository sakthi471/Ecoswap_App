import { default as mongoose } from "mongoose";


const connection={}


const connectDB= async()=>{
      try {
        if(connection.isConnected){
          return;
        }
        const db=await mongoose.connect(process.env.MONGODB_STRING);
        connection.isConnected=db.connections[0].readyState
      } catch (error) {
          console.log(error.message);
      }

}


export default connectDB;