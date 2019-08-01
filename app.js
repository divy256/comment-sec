const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const connect=require("./dbConnect");

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
	res.render("index");
});

app.post("/",function(req,res){
	const conn=connect.connects();
	var uname=req.body.uname;
	var comment=req.body.comment;
	var sql="INSERT INTO comments (uname,comment)VALUES (\""+uname+"\",\""+comment+"\");";
	conn.query(sql,function(err,result){
		if(err) console.log(err);
		console.log("New comment Added");
		// req.session.comments={m:result.affectedRows};
		// console.log(m);
		// conn.end();
	});
	
	res.redirect("/dashboard");

});

var unames=[];
var comments=[];
var m=0;
app.get("/dashboard",function(req,res){
	const conn=connect.connects();
	var sql="SELECT max (id) AS m FROM comments";
	conn.query(sql,function(err,result){
		if(err) console.log(error);
		else{
			var sql="SELECT * FROM comments ORDER BY id DESC;";
			conn.query(sql,function(err,result){
			if(err)console.log(err);
			for(var i=0;i<m;i++)
			{
				var uname=result[i].uname;
				var comment=result[i].comment;
				unames.push(uname);
				comments.push(comment);
			}
			});
	}
		
		
		res.render("dashboard",{uname:unames,comment:comments});
	});
});














app.listen(3000,function(req,res){
	console.log("port successfully running at 3000");
});
