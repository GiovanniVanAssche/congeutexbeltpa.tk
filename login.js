 var users = { Name:[Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"], psw:["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"]};    

 
  function check(form){            
   
    for (var i = 0; i < users.Name.length ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.psw[i]))  {   
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }
