import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(cors());

server.use((req, res) => {
  res.status(404);
});

server.listen(PORT, () => {
  console.log(`Conectado ${PORT}`);
});

export default server;
