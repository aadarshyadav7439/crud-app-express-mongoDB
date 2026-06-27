const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("DB Connected Successfully");
})
.catch((err) => { console.log(err) });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};


Chat.insertMany([
    {
        from: "Aarav",
        to: "Riya",
        msg: "Good luck for your exam!",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Karan",
        msg: "Can you pick me up at 5?",
        created_at: new Date(),
    },
    {
        from: "Vikram",
        to: "Sneha",
        msg: "The presentation went really well.",
        created_at: new Date(),
    },
    {
        from: "Ananya",
        to: "Rohan",
        msg: "Don't forget to bring the charger.",
        created_at: new Date(),
    },
    {
        from: "Dev",
        to: "Megha",
        msg: "I'm outside your building.",
        created_at: new Date(),
    },
    {
        from: "Nikhil",
        to: "Sakshi",
        msg: "Did you watch the new movie?",
        created_at: new Date(),
    },
    {
        from: "Ishaan",
        to: "Pooja",
        msg: "Let's catch up this weekend.",
        created_at: new Date(),
    },
    {
        from: "Aditi",
        to: "Harsh",
        msg: "Thanks for helping me yesterday!",
        created_at: new Date(),
    },
    {
        from: "Yash",
        to: "Neha",
        msg: "I've emailed you the files.",
        created_at: new Date(),
    },
    {
        from: "Tanvi",
        to: "Aryan",
        msg: "Your order has arrived.",
        created_at: new Date(),
    },
    {
        from: "Kabir",
        to: "Muskan",
        msg: "Meet me at the metro station.",
        created_at: new Date(),
    },
    {
        from: "Sanya",
        to: "Arjun",
        msg: "The class has been cancelled.",
        created_at: new Date(),
    },
    {
        from: "Reyansh",
        to: "Khushi",
        msg: "Happy anniversary!",
        created_at: new Date(),
    },
    {
        from: "Manav",
        to: "Diya",
        msg: "Can you review my resume?",
        created_at: new Date(),
    },
    {
        from: "Tanish",
        to: "Naina",
        msg: "See you at the cricket ground.",
        created_at: new Date(),
    },
    {
        from: "Ayesha",
        to: "Parth",
        msg: "I found your notebook.",
        created_at: new Date(),
    },
    {
        from: "Rudra",
        to: "Siya",
        msg: "Call me when you're free.",
        created_at: new Date(),
    },
    {
        from: "Om",
        to: "Ritika",
        msg: "The tickets are booked!",
        created_at: new Date(),
    },
    {
        from: "Vihaan",
        to: "Anvi",
        msg: "Your package has been delivered.",
        created_at: new Date(),
    },
    {
        from: "Krishna",
        to: "Palak",
        msg: "Let's work on the project together.",
        created_at: new Date(),
    },
    {
        from: "Aadarsh",
        to: "Rahul",
        msg: "Hey! Are you free today?",
        created_at: new Date(),
    },
    {
        from: "Rahul",
        to: "Aadarsh",
        msg: "Yeah, let's meet around 6 PM.",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Neha",
        msg: "Did you finish the assignment?",
        created_at: new Date(),
    },
    {
        from: "Neha",
        to: "Priya",
        msg: "Almost! I'll send it in an hour.",
        created_at: new Date(),
    },
    {
        from: "Rohan",
        to: "Aman",
        msg: "Happy Birthday! 🎉",
        created_at: new Date(),
    },
    {
        from: "Aman",
        to: "Rohan",
        msg: "Thanks a lot, bro!",
        created_at: new Date(),
    },
    {
        from: "Sneha",
        to: "Karan",
        msg: "Can you share the lecture notes?",
        created_at: new Date(),
    },
    {
        from: "Karan",
        to: "Sneha",
        msg: "Sure, I'll send them on WhatsApp.",
        created_at: new Date(),
    },
    {
        from: "Vikram",
        to: "Anjali",
        msg: "The project deadline is tomorrow.",
        created_at: new Date(),
    },
    {
        from: "Anjali",
        to: "Vikram",
        msg: "I know, I'm almost done.",
        created_at: new Date(),
    }
]);