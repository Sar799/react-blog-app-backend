const express= require('express');
 let cors = require("cors");
 const port=3001;
const app=express();
app.use(cors());
const postjson = [
    {
        "heading":"Catch Waves with an adventure guide",
        "subheading":"Joshu Tree Overnight Adventure",
        "description":"Gujrat is vastly Underrated and is mystery to us why the region is not well",
        "bdescription":"Gujrat is vastly Underrated and is mystery to us why the region is not well as a tourist destination it has a plethora of temples and palaces Gujrat is vastly underrated and it's mystery to us why the region is not well known as atourist destination it has a piethora of temples and palaces",
        "job":"Travel",
        "date":"/August 21 2017 ",
        "url":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gujaratexpert.com%2Fblog%2Fforts-in-gujarat%2F&psig=AOvVaw1qN2q1GU8PpzmXDfhbmhRc&ust=1620068556229000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDC1erXq_ACFQAAAAAdAAAAABAD",
        "tech":"TECH",
        "tdate":"/TODAY AT 11:54",
        "style":"STYLE",
        "update":"update",
        "adate":"/AUGUST 21 2017",
        "reactheading":"5 Ways to a Animate React App",
        "reactdes":"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations. Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it,if you want to create complex animation you can pay attentive to GreenSock .GreenSock is the most powerful animation platform .There are also a lot of libraries ,components for creating animation in react",
        "reactad":"Joshu Tree Overnight Adventure",
        "spiderman"  :"The fictional character Spider-Man, a comic book superhero",
        "spidermandescription":"Nicholas Hammond first starred as Peter Parker / Spider-Man in the 1977 made-for-television film Spider-Man and would appear as the character two other times.",
  "blackpanther":"Black Panther is a American superhero film based on the Marvel Comics",
  "blackpantherdescription":"Black Panther premiered in Los Angeles on January 29, 2018, and was released theatrically in the United States ",
  "ironman":"Iron Man is a fictional superhero appearing in American comic books",
  "ironmandescription":". The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.",
  "blackwidow":"Black Widow is a fictional superhero",
  "drstrange":"Doctor Stephen Strange is a fictional character appearing in American comic",
  "drstrangedescription":"The character begins as an extremely talented but egotistical surgeon who loses the ability to operate after a car crash severely damages his hands beyond repair.",
  "thanos":"Thanos is a fictional supervillain appearing in American comic books ",
  "thanosdescription":"Debuting in the Bronze Age of comic books, the character has appeared in almost five decades of Marvel publications, as well as many media adaptations",
  "capamerica":"The First Avenger is a 2011 American superhero film based on the Marvel Comics",
  "capamericadescription":"The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America.",
  "fastfoodheading":"Most Popular Fast Food You have got to try",
  "fastfoodheadingdescription":"We've rounded up a list of the most popular fast-food picks that diners order at your favorite restaurant chains across India."   ,
  "icecreamheading":"Make your day with our scoop",
  "icecreamdescription":"visiting home after you've been homesick, jumping in bed after an exhausting day, and, of course, when you get a fresh ice cream cone.",
"fruitheading":"Live in each season as it passes",
"blogdiscription":"I’m Sarthak, the cook, writer and photographer . I’ve grown up in the kitchen along side my mum and grandmothers and conversations in my family are always about the next meal. I’ve picked up their love for food along the way, and with this blog, I share my food story with you.",
"fitnessheading":"Step Up Your Fitness Challenge With Us",
"fintessheadingdescription":"This past year, people have been re-discovering what’s really important to them. Being stuck inside away from others has forced us be more mindful of our lifestyle practices. For some, this has been a time to focus on a recommitment to fitness, and for others, building better eating habits.",
"bheading":"  Bollywood Entertaining and Famous Industry",
"bheadingdescription":"With Netflix and Amazon expanding the Indian film offerings in their streaming subscription services, here are 5 more films to please your entertainment palette",
"technologyheading":"Everything is designed , Few things are designed Well"
}
]

app.get("/",(req,res)=>{
   console.log(req.query)
   res.send(postjson)
})
app.listen(3001,()=>{
    console.log("server is running here")
})