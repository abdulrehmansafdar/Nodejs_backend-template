import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

export const app = express();

app.use(cors());
app.use(express.json());

// swagger docs route
app.use("/swagger/index.html", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// main api routes
app.use("/api", router);

// error middleware (always last)
app.use(errorMiddleware);
