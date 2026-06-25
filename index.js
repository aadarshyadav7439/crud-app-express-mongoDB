const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

main()
.then(() => {
    console.log("DB Connected Successfully");
})
.catch((err) => { console.log(err) });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

app.get("/",(req,res)=>{
    res.send("Root path is perfectly workking");
});

let chat1 = new Chat({
    from: "Neha",
    to:"Priya",
    msg:"Send me the pyt please asap",
    created_at : new Date(),
});

chat1.save()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
});
