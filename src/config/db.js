import mongoose from "mongoose";

export const conectToDB = () => {
  mongoose
    .connect(process.env.URL_MONGODB)
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch((err) => {
      console.log(err);
    });
};
