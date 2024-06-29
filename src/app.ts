import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import errorHandler from "./middlewares/errorHandler";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
app.use(errorHandler);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Conectado ${PORT}`);
});

export default app;
