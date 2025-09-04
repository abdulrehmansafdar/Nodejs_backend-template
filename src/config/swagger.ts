import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clean API with Express + TypeScript",
      version: "1.0.0",
      description: "Login/Signup + Products CRUD API (JWT Auth)",
    },
    servers: [
      { url: "http://localhost:5000/api" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./src/routes/*.ts"], // where swagger comments will live
};

export const swaggerSpec = swaggerJsdoc(options);
