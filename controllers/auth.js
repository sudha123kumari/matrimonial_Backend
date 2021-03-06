require("dotenv").config();
const { json } = require("body-parser");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

exports.otpSend = (req, res) => {
  const { email } = req.body;

  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      console.log(user);
      return res.status(400).json({ error: "email already exit" });
    } else {
      let newUser = new User({ email });
      await newUser.save((err, success) => {
        if (err) {
          console.log(
            "error occured in while creating new user. check controller/auth/otpSend "
          );
          return res.status(400).json({ error: err });
        } else {
          console.log("successfully created the user");
          return res
            .status(200)
            .json({ success: "successfully created the user" });
        }
      });
    }
    // const otpGenerator = require("otp-generator");
    // const otp = otpGenerator.generate(6, {
    //   alphabets: false,
    //   upperCase: false,
    //   specialChars: false,
    // });

    // User.findOne({ email }).exec(async (err, user) => {
    //   if (user) {
    //     user.otp = otp;
    //     console.log(user.otp);
    //     await user.save((err) => {
    //       if (err) {
    //         return res.json({ error: "problem while saving otp to database" });
    //       } else {
    //         console.log("otp modifeied");
    //       }
    //     });
    //   }
    // });

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: `${process.env.EMAIL_ID}`,
    //     pass: `${process.env.PASSWORD}`,
    //   },
    // });

    // const mailOptions = {
    //   from: `${process.env.EMAIL_ID}`,
    //   to: email,
    //   subject: "Sending Email using Node.js",
    //   html: `

    //   <h2>use the opt before 5 minutes </h2>
    //   <strong>${otp}</strong>

    //   `,
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //     console.log(
    //       "error while sending the mail check controller/auth/sendOtp"
    //     );
    //     return res.status(400).json({
    //       error: error,
    //     });
    //   } else {
    //     console.log("Email sent: " + info.response);
    //     return res.status(200).json({
    //       message: "email sent successfully",
    //     });
    //   }
    // });
  });
};

exports.Register = (req, res) => {
  console.log(req.body);
  const { fullName, profilePic, email, contactNumber, Address, password } =
    req.body;
  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      user.name = fullName;
      user.contact = contactNumber;
      user.address = Address;
      user.password = password;

      await user.save((err) => {
        if (err) {
          return res.json({ error: "problem while saving data to database" });
        } else {
          console.log("data saved");
          console.log(user);
          return res.status(200).json({ message: "successfully saved" });
        }
      });
    } else {
      return res.status(400).json({ message: "user  doesnt  exist" });
    }
  });
};

exports.generalInfo = (req, res) => {
  console.log(req.body);
  const { dob, age, email, gender, bloodGroup, height, weight, nationality } =
    req.body;
  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      user.dob = dob;
      user.age = age;
      user.gender = gender;
      user.bloodGroup = bloodGroup;
      user.height = height;
      user.weight = weight;
      user.nationality = nationality;

      await user.save((err) => {
        if (err) {
          return res.json({ error: "problem while saving data to database" });
        } else {
          console.log("data saved");
          console.log(user);
          return res
            .status(200)
            .json({ message: "general information successfully saved" });
        }
      });
    } else {
      return res.status(400).json({ message: "user  doesnt  exist" });
    }
  });
};

exports.educationalInfo = (req, res) => {
  console.log(req.body);
  const {
    email,
    educationalDetail,
    job,
    description,
    jobAddress,
    income,
    hobby,
    interest,
  } = req.body;
  User.findOne({ email }).exec(async (err, user) => {
    if (user) {
      user.educationalDetail = educationalDetail;
      user.job = job;
      user.description = description;
      user.jobAddress = jobAddress;
      user.income = income;
      user.hobby = hobby;
      user.interest = interest;

      await user.save((err) => {
        if (err) {
          return res.json({ error: "problem while saving data to database" });
        } else {
          console.log("data saved");
          console.log(user);
          return res
            .status(200)
            .json({ message: "educational information successfully saved" });
        }
      });
    } else {
      return res.status(400).json({ message: "user  doesnt  exist" });
    }
  });
};

exports.personalInfo = (req, res) => {
  console.log(req.body);
  const {
    email,
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
      user.maritialStatus = maritialStatus;
      user.religion = religion;
      user.caste = caste;
      user.horoscope = horoscope;
      user.familyMembers = familyMembers;
      user.guardianName = guardianName;
      user.guardianOccupation = guardianOccupation;

      await user.save((err) => {
        if (err) {
          return res.json({ error: "problem while saving data to database" });
        } else {
          console.log("data saved");
          console.log(user);
          return res
            .status(200)
            .json({ message: "Personal information successfully saved" });
        }
      });
    } else {
      return res.status(400).json({ message: "user  doesnt  exist" });
    }
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      user.remove();

      return res.status(200).json({ message: "user deleted" });
    } else {
      return res.status(200).json({ error: "user doesnot exist" });
    }
  });
};
