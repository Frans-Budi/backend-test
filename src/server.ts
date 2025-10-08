import express, { type Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_, res: Response) => {
  res.send("Server says Hi");
});

// For Local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}

// For Vercel deploy
export default app;
