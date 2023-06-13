let viratoldinfo={
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkp-mTpgcYxZVf1DPztA2fkE-HGiJMtY5QvqRcjP4Ow&usqp=CAU&ec=48600112",
    name:"virat",
    Description:"Virat Kohli is an Indian cricketer who plays for India national cricket team"

}

let displayobject;
let getRandomUser=function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))
    document.getElementById("virat-img").src=displayobject.imgurl;
    document.getElementById("virat-name").innerHTML=displayobject.name;
    document.getElementById("virat-description").innerHTML=displayobject.Description;

}