var users = { Name:["Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"], 
             Psw:["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"]};    
var Verlof_uren = "28.14";      
var Verlof_IR = "20.5";  
var Verlof_Jaarlijks = "14";

function check(form){            
   
    for (var i = 0; i < 12 ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  {   
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }
