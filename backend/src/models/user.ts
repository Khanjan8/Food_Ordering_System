<<<<<<< HEAD
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
=======
import mongoose from 'mongoose';


const userSchema= new mongoose.Schema({
    auth0id:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    addressline1: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
}
)
const User=mongoose.model("User",userSchema);
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
export default User;
