var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
		{name: "Salmon Creek", image: "https://pixabay.com/get/55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c73297bd5904dc25f_340.jpg"},
		{name: "Granite Hill", image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c73297bd5904dc25f_340.jpg"},
		{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d7444251ae14f6da8c7dda793f7f1636dfe2564c704c73297bd5904dc25f_340.jpg"}
	]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds",function(req, res){
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("YelpCamp Server has started");
});