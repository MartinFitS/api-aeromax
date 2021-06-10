import app from "./app";
import "./db";

//lanzar el server
app.listen(app.get("port"));
console.log("server on port", app.get("port"));