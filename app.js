const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const ejs = require("ejs");


// Parses incoming JSON and URL data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files
app.use(express.static("public"));

// Sets up EJS as template engine and allows views to be dir.
app.set("views","views")
app.set("view engine","ejs");

// Displays port in console
app.listen(port, () => {
    console.log("myapp is listening on port:  " + port);
});

// Test server is working
app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});

// get method for 
app.get("/", (req, res) => {
    const p = path.join(__dirname, "public", "projectteammembers.html")
    // res.send("Hello, welcome to my NodeJS application!");
    res.sendFile(p, (err)=>{
        if (err)
            console.log("Error: Reading team.html", err);
    });
});

// Handles the post request - render form
app.get("/Newsletter",(req,res) => {
    fs.readFile("form.json", (err, data) => {
    if (err) {
            console.log("Error: Reading JSON", err);
          } 

    // Converts to object
    const formData = JSON.parse(data);

    res.render("form", { form: formData});
    
    });
});

