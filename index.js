const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))); 
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

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

//Index route for showing all chats
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{ chats });
});

//for getting new chat form
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

//handling post request for adding new chat
app.post("/chats", (req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from : from,
        to: to,
        msg : msg,
        created_at : new Date(),
    });
    newChat.save()
    .then(()=>{console.log("chat was saved successfully")})
    .catch((err) => {console.log(err)});
    
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//updatinf the edit in db
app.put("/chats/:id/",async (req,res)=>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators : true,new : true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destrpy route
app.delete("/chats/:id",async (req,res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log("delted seccessfully");
    res.redirect("/chats");
});
