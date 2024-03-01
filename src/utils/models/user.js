import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "please add your email address"]
        },
        fullname: {
            type: String,
            required: [true, "please add your fullname"]
        },
        password: {
            type: String
        },
        userstatus: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;