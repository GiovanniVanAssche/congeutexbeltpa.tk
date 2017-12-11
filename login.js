function check(form){  
          
    for (var i = 0; i < users.Name.length ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  {   
        Index = i;
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }

