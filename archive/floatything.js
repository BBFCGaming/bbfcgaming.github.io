//setup
   url = window.location.href;
   array = url.split("/");

   num = array[4];
   buffer = num[0];
   buffer1 = num[2];
   buffer2 = num[4];
   //VERSION DOWN
   num2 = buffer1;
   num1 = buffer;
   num3 = buffer2 - 1;
   if(num3 < 0){
     num2 = buffer1 - 1;
       num3 = 9;
   }
   if(num2 < 0){
     num1 = buffer;
       num1 = num1 - 1;
       num2 = 9;
   }
   //make new num into str
   str = ""
   buffer3 = str.concat(num1, ".", num2, ".", num3);
   testing = false;
   while(testing == false) {
   var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', str.concat("https://bbfcgaming.github.io/archive/", buffer3, "/index.html"), false);
request.send(); // there will be a 'pause' here until the response to come.
// the object request will be actually modified
if (request.status === 404) {
    num3--;
    if(num3 < 0){
     num2--;
       num3 = 9;
   }
   if(num2 < 0){
       num1--;
       num2 = 9;
   }
   //make new num into str
   str = ""
   buffer3 = str.concat(num1, ".", num2, ".", num3);
}else{
    testing = true;
    buffer3 = str.concat(num1, ".", num2, ".", num3);
    break;
}
   }

   //VERSION UP
   num = array[4];
   buffer = num[0];
   buffer1 = num[2];
   buffer2 = num[4];
   num3 = buffer2*1 + 1;
   num1 = buffer;
   num2 = buffer1;
   if(num3 > 9){
     num2 = buffer1*1 + 1;
     num3 = 0;
   }
   if(num2 > 9){
     num2 = 0;
     num1 = buffer*1 + 1;
   }
   //Make new num into str
   buffer4 = str.concat(num1, ".", num2, ".", num3);
     //normal
       
       
       
       
       testing = false;
   while(testing == false) {
   var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', str.concat("https://bbfcgaming.github.io/archive/", buffer4, "/index.html"), false);
request.send(); // there will be a 'pause' here until the response to come.
// the object request will be actually modified
if (request.status === 404) {
    num3++;
    if(num3 > 9) {
        num3 = 0;
        num2++;
    }
    if(num2 > 9) {
        num2 = 0;
        num1++;
    }
   //make new num into str
   str = ""
   buffer4 = str.concat(num1, ".", num2, ".", num3);
}else{
    testing = true;
    buffer4 = str.concat(num1, ".", num2, ".", num3);
    break;
}
   }
       
       
       
       
       
   //Test if too low
   if(buffer3 == "0.9.9"){
     document.getElementById("arrow-right").style.borderLeft = "10px solid gray";
     document.getElementById("arrow-left").addEventListener("click", myFunction, false);
     function myFunction(){
       window.location.href = ("/archive/1.0.5/index.html");
     }
   }else {
       
   back = str.concat("/archive/", buffer3, "/index.html");
   forward = str.concat("/archive/", buffer4, "/index.html");
       //click detection
document.getElementById("arrow-left").addEventListener("click", myFunction, false);
     function myFunction(){
       window.location.href = forward;
     }
document.getElementById("arrow-right").addEventListener("click", myFunctionTwo, false);
     function myFunctionTwo(){
       window.location.href = back;
     }
     }