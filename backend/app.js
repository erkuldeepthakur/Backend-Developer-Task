
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/tasks",taskRoutes);

const swaggerSpec = swaggerJsDoc({
 definition:{
   openapi:"3.0.0",
   info:{ title:"Backend API", version:"1.0.0" }
 },
 apis:["./routes/*.js"]
});

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

module.exports = app;
