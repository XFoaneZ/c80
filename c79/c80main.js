nameofthestudentarray=[];
var nameofthestudent="";
function submit(){
var displaystudentarray=[];
for (var j=1; j<=4; j++)
{
nameofthestudent=document.getElementById("nameofthestudent"+j).value;
console.log(nameofthestudent);
nameofthestudentarray.push(nameofthestudent);
}
console.log(nameofthestudentarray);
var lengthofthestudentarray=nameofthestudentarray.length;
for (var k=0; k <lengthofthestudentarray; k++)
{
    displaystudentarray.push("<h4>NAME-"+nameofthestudentarray[k]+"</h4>");
    console.log(displaystudentarray);
}
console.log(displaystudentarray);
document.getElementById("displaynamewithcommas").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join("");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
document.getElementById("submitbutton").style.display-"none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting()
{
nameofthestudentarray.sort();
console.log(nameofthestudentarray);
var displaystudentarraysorting=[];
var lengthofthestudentarray=nameofthestudentarray.length;
for (var k=0; k <lengthofthestudentarray; k++)
{
    displaystudentarraysorting.push("<h4>NAME-"+nameofthestudentarray[k]+"</h4>");
    console.log(displaystudentarraysorting);
}
var removecommas=displaystudentarraysorting.join("");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
}
//adsddsfszreegrejkgsfgjibfgbntjbmghobefi efnoibfekbfbnfjkkjfdvkfsvjkefd bhkfdobwf
function newupdata(){
    document.getElementById("displaynamewithoutcommas").innerHTML="<h1>"+nameofthestudentarray+"</h1>";
}