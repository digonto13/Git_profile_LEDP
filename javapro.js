

var selector=document.querySelector("#myNumber");
    
function myFunction() {
  var x = selector.value;
  
  if(x>100||x<0 ||isNaN(x))
  {
    document.getElementById("demo1").innerHTML="this inpur not allow";
  }
  else{
    if ( x>=80 && x<100)
  {
      greeting ="A+";

  }
  else if ( x>=70 && x<80)
  {
      greeting ="A";

  }
  else if ( x>=60 && x<70)
  {
      greeting ="A-";

  }
  else if ( x>=50 && x<60)
  {
      greeting ="B";

  }
  else if ( x>=40 && x<50)
  {
      greeting ="C";

  }
  else if ( x>=33 && x<40)
  {
      greeting ="D";

  }
  else{
      greeting="Fail";
  }
  document.getElementById("demo").innerHTML = greeting;
  }
}
