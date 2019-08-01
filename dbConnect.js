const mysql=require("mysql");
module.exports={
	connects:function(){
		const connect= mysql.createConnection({
			host:"localhost",
			user:"root",
			password:"divyanshigarg123@#",
			database:"comment"
		});

		connect.connect(function(err){
			if(err) console.log(err);
			console.log("db connection was successful");
		});
		return connect;
	}
	}

