import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  Picture: String,
  role: { type: String, default: "user", enum: ["user", "doctor", "admin"] },
  doctorInfo: {
    fees: Number,
    specialization: String,
    hospital: String,
    bio: String,
    time: String,
    gender: String,
  },
});

 const UserModal =
    mongoose.models.Users|| mongoose.model("Users", userSchema);

    export default UserModal;