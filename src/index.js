const express = require("express");

const app = express(); //un objeto de express guardado en app
const path = require("path");
//settings
app.set("port", 3000); //al ser parte de app, puedo acceder al puerto
app.set("view engine", "ejs"); //motor de plantillas
app.set("views",path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); //archivos ahtml pero procesados por ejs
//static files
app.use(express.static(path.join(__dirname, "public")))
//middlewares //preprocesar antes de que llegue a las rutas

//routes
app.use(require("./routes/index"))



//listening the server
app.listen(app.get("port"), () => {
    console.log(`Escuchando el puerto ${app.get("port")}`)
}); //escucha el puerto 4000