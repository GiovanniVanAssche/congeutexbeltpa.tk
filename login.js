var users = { Name:["Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"],             
    Psw:["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"],                
    InhaalRust :["10","4,5","2","0","0","0","0","0","0","0","0","0","0"],            
    Uren : ["48,52","120,22","0","0","0","0","0","0","0","0","0","0","0"],            
    Jaarlijks : ["20","20","20","20","20","20","20","20","20","20","20","20","20"]}; 

var Verlof_Uren;
var Verlof_InhaalRust;
var Verlof_Jaarlijks;

function check(form){  
          
    for (var i = 0; i < users.Name.length ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  {   
       sessionStorage.setItem("UserUren",users.Uren[i]);
       sessionStorage.setItem("UserInhaalRust",users.InhaalRust[i];
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }

