let viratoldinfo={
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkp-mTpgcYxZVf1DPztA2fkE-HGiJMtY5QvqRcjP4Ow&usqp=CAU&ec=48600112",
    name:"virat",
    Description:"Virat Kohli is an Indian cricketer who plays for India national cricket team"

}
let viratyounginfo={
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxN38RTTHyiY42ieVunge1SzUcfg4ZBGRDLgqK2HBMA&usqp=CAU&ec=48600112",
    name:"King kohli",
    Description:"Daring, tough and fiercely talented"
}
let isviratold=true;
let displayobject;
let flipdata=function(){
    if(isviratold==true){
        displayobject=viratyounginfo;
        isviratold=false;
    }else{
        displayobject=viratoldinfo;
        isviratold=true;
    }
    document.getElementById("virat-img").src=displayobject.imgurl;
    document.getElementById("virat-name").innerHTML=displayobject.name;
    document.getElementById("virat-description").innerHTML=displayobject.Description;

}