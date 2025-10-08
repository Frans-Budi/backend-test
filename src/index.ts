import express from "express";
import bodyParser from "body-parser";

async function init() {
  try {
    const app = express();
    app.use(bodyParser.json());

    const PORT = 3000;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Server is running",
        data: null,
      });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
