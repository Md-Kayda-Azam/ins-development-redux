import mongoose from "mongoose";

// create student schema
const userSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    secondary_name: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Custom"],
    },
    birth_day: {
      type: String,
      trim: true,
      required: true,
    },
    birth_month: {
      type: String,
      trim: true,
      required: true,
    },
    birth_year: {
      type: String,
      trim: true,
      required: true,
    },
    profile_photo: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: [],
    },
    block: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    access_token: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);
