require("dotenv").config();
const { json } = require("body-parser");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

exports.updatePassword = (req, res) => {
  console.log(req.body);
  const { email, dob, password } = req.body;
  const d = new Date(dob);
  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      if (new Date(user.dob).getTime() === d.getTime()) {
        user.password = password;
        console.log(user.password);
        await user.save((err) => {
          if (err) {
            return res
              .status(200)
              .json({ message: "problem while saving data to database" });
          } else {
            console.log("data saved");
            console.log(user);
            return res.status(200).json({ message: "password updated" });
          }
        });
      } else {
        return res.status(200).json({ message: "dob didnt matches" });
      }
    } else {
      return res.status(200).json({ message: "user doesnot exist" });
    }
  });
};

exports.verifyAccount = (req, res) => {
  console.log(req.body);
  const { email, dob } = req.body;
  const d = new Date(dob);
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      if (new Date(user.dob).getTime() === d.getTime()) {
        return res.status(200).json({ message: "ok" });
      } else {
        return res.status(200).json({ message: "dob didn't match" });
      }
    } else {
      return res.status(200).json({ message: "userfgy doesnot exist" });
    }
  });
};

exports.updateProfile = (req, res) => {
  const {
    email,
    fullName,
    contactNumber,
    Address,
    height,
    weight,
    nationality,
    educationalDetail,
    job,
    description,
    jobAddress,
    income,
    hobby,
    interest,
    maritialStatus,
    religion,
    caste,
    horoscope,
    familyMembers,
    guardianName,
    guardianOccupation,
  } = req.body;
  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      user.name = fullName;
      user.contact = contactNumber;
      user.address = Address;
      user.height = height;
      user.weight = weight;
      user.nationality = nationality;
      user.educationalDetail = educationalDetail;
      user.job = job;
      user.description = description;
      user.jobAddress = jobAddress;
      user.income = income;
      user.hobby = hobby;
      user.interest = interest;
      user.maritialStatus = maritialStatus;
      user.religion = religion;
      user.caste = caste;
      user.horoscope = horoscope;
      user.familyMembers = familyMembers;
      user.guardianName = guardianName;
      user.guardianOccupation = guardianOccupation;

      await user.save((err) => {
        if (err) {
          return res
            .status(200)
            .json({ message: "problem while saving data to database" });
        } else {
          console.log("data saved");
          console.log(user);
          return res.status(200).json({ message: "profile updated" });
        }
      });
    } else {
      return res.status(200).json({ message: "user doesnot exist" });
    }
  });
};
