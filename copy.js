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

app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});

// Handles the post request - render form
app.get("/",(req,res) => {
    // Reads the JSON 
    fs.readFile("formData.json", (err, data) => {
    if (err) {
            console.error("Error: Reading JSON", err);
          } 

    // Converts to object
    const formData = JSON.parse(data);

    res.render("form", { form: formData});
    
    });
});

