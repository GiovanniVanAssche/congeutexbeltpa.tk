var users = { Name:["Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"], 
            Psw:["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"], 
            InhaalRust :["10","4,5","2","0","0","0","0","0","0","0","0","0","0"],
            Uren : ["48,52","120,22","0","0","0","0","0","0","0","0","0","0","0"],
            Jaarlijks : ["20","20","20","20","20","20","20","20","20","20","20","20","20"]};    
var Verlof_uren = "";      
var Verlof_IR = "";  
var Verlof_Jaarlijks = "";

function check(form){            
   
    for (var i = 0; i < users.Name.length ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  {   
        alert("Login OK");
        Verlof_uren = "10";
        Verlof_IR = users.InhaalRust[i];
        Verlof_Jaarlijks = users.Jaarlijks[i];
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }
