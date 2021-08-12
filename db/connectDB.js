const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://singhtushar:tushar1999@registerapi.fgpov.mongodb.net/matrimonial",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      // useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log("error occured in database");
  });
