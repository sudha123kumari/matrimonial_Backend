const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
      max: 64,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false,
    },
    otp: {
      type: String,
      required: false,
    },
    contact: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    dob: {
      type: Date,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    bloodGroup: {
      type: String,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    educationalDetail: {
      type: String,
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    jobAddress: {
      type: String,
      required: false,
    },
    income: {
      type: Number,
      required: false,
    },
    hobby: { type: String, required: false },
    interest: {
      type: String,
      required: false,
    },

    maritialStatus: {
      type: String,
      required: false,
    },
    religion: {
      type: String,
      required: false,
    },
    caste: {
      type: String,
      required: false,
    },
    horoscope: {
      type: String,
      required: false,
    },
    familyMembers: {
      type: String,
      required: false,
    },
    guardianName: {
      type: String,
      required: false,
    },
    guardianOccupation: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("user", userSchema);
