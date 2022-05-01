const express = require("express");
const cors = require("cors");

//import routes
const UserRoutes = require("./routes/UserRoutes");
const TaskRoutes = require("./routes/TaskRoutes");

const app = express();

//config JSON response
app.use(express.json());

//solve cors
app.use(cors({ credentials: true, origin: "https://api-todo-app-dede.herokuapp.com" }));

//pulbic folder for images
app.use(express.static("public"));

//routes
app.use("/users", UserRoutes);
app.use("/tasks", TaskRoutes);

app.listen(5000);
