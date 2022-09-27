const nav=[
    "about us", "find us", "gallery",];
const links=[ "aboutus.html", "findus.html", "gallery.html", ];
let navlength=nav.length;
let navtext='<ul class="flex">';
for(let i=0; i<navlength; i++)
{ navtext+='<li><a href="'+links[i]+'">'+ nav[i]+"</a></li>";

    console.log(navtext);
}
navtext+="</ul>"
console.log(navtext);
document.getElementById("nav").innerHTML=navtext;

