function validationSignUp()
{
  let formValues = document.forms["mySignUpForm"];
  let myFirst=formValues["myFirst"].value;
  let myLast=formValues["myLast"].value;
  let myEmail=formValues["myEmail"].value;
  let myPhone=formValues["myPhone"].value;
  let myGender=formValues["myGender"].value;
   let myAge=formValues["myAge"].value;
   let mynpwd=formValues["mynpwd"].value;
   let myrpwd=formValues["myrpwd"].value;

   let myfnameerror=0;
   let  mylnameerror=0;
   let myemailerror=0;
   let myphoneerror=0;
   let mypwderror=0;
  if (myFirst.includes(" "))
    {
       myfnameerror=1;
    }
  if(myLast.includes(" "))
   {
       mylnameerror=1;
   }
   if(myEmail.includes(" ") || (!(myEmail.includes("@"))))
   {
       myemailerror=1;
   }
   if (mynpwd!=myrpwd)
   {
    mypwderror=1;
   }
  







  if ((myfnameerror==1)||(mylnameerror==1)||(myemailerror==1)||(mypwderror==1))
  {
    if (myfnameerror==1)
    {
      errorFName("Enter valid first name");
    }
    if (mylnameerror==1)
    {
      errorLName("Enter valid last name");
    }
    if (myemailerror==1)
    {
      errorEmail("Enter valid Email");
    }
    if(mypwderror==1)
    {
      errorpwd("Password Doesnot Match");
    }
    
    return false;
  }
  else return true;
}

function errorFName(message){
    let fnameerror=document.getElementById("fnameerror");
    fnameerror.innerText=message;
    fnameerror.style.display="block";
    let fnameID = document.getElementById("fnameID");
    fnameID.style.border="1px solid red";

}
function errorLName(message){
    let lnameerror=document.getElementById("lnameerror");
    lnameerror.innerText=message;
    lnameerror.style.display="block";
    let lnameID= document.getElementById("lnameID");
    lnameID.style.border="1px solid red";
}
function errorEmail(message){
  let emailerror=document.getElementById("emailerror");
  emailerror.innerText=message;
  emailerror.style.display="block";
  let emailID=document.getElementById("emailID");
  emailID.style.border="1px solid red";
}
function errorpwd(message){
  let pwderror=document.getElementById("pwderror");
 pwderror.innerText=message;
 pwderror.style.display="block"; 
 let npwd=document.getElementById("npwd");
 npwd.style.border="1px solid red";
 let rpwd=document.getElementById("rpwd");
 rpwd.style.border="1px solid red";
}




