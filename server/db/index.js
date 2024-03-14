const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
	.connect(
		"mongodb+srv://nikhiljohnykaruthedath:XuDSAAltoKdym4pi@cluster0.6pa0fkm.mongodb.net/"
	)
	.then(() => console.log("Connected to Mongo DB"))
	.catch((e) => console.log(e));
