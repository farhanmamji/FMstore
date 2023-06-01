function result()
{
    var res;
var Markobt=parseFloat(document.getElementById("marktxt").value);
var Totalmarks=parseFloat(document.getElementById("tmarktxt").value);
var per=(Markobt*100)/Totalmarks;

if(per<40){
document.getElementById("resulttxt").value="faild";
res="failed";
}
else if (per<50)
{
    document.getElementById("resulttxt").value="D GRADE";
res="D grade";
}
else if (per<70)
{
document.getElementById("resulttxt").value="C GRADE";
res="C Grade"
}
else if (per<80)
{
    document.getElementById("resulttxt").value="B GRADE"
res="B grade"
}

else if (per<100)
{
    document.getElementById("resulttxt").value="A+ GRADE"
res="A+ grade"
}

var name= document.getElementById("nametxt").value;
var rolltxt= document.getElementById("rolltxt").value;

document.getElementById("pertxt").value=per;

document.getElementById("txtarea").value=`MR: ${name} YOUR ROLL NUM IS ${rolltxt} YOUR RESULT IS ${res}`;

}














