let express = require("express");
let app = express();
let path = require("path");
let port = 3100;


app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(port,() => console.log(` server on port ${port}\n http://localhost:${port}`)
);




app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
  });