import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import errorHandler from "./middlewares/errorHandler";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 4000;
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TrilhaBackEndJR",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/documentation/*swagger.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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
