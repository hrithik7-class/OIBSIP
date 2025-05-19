const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./router/auth.Route.js")
 const path = require("path");


require("./model/db.js");
require("dotenv").config();

 const _dirname=path.resolve();
app.use(bodyParser.json());
app.use(cors());

app.use("/auth",AuthRouter );

const PORT = process.env.PORT || 5000;

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

if(process.env.NODE_ENV === "production") {
app.use(express.static(path.join(_dirname, "/frontend/dist")));
	app.get("*",(_, res) => {
		res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);

})