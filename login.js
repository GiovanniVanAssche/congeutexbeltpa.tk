var users = { Name:["Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"],             
    Psw:["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"],
    Taalcode:["NL","FR","FR","NL","FR","NL","NL","FR","FR","FR","FR","NL","FR"],
    InhaalRust :["10","4,5","2","0","0","0","0","0","0","0","0","0","0"],            
    Uren : ["36,52","120,22","0","0","0","0","0","0","0","0","0","0","0"],            
    Jaarlijks : ["20","20","20","20","20","20","20","20","20","20","20","20","20"],
    Bijkomend : ["4","1","0","0","0","3","0","0","0","0","1","0,5","4"]}; 


function check(form){  
          
    for (var i = 0; i < users.Name.length ; i++)  {  
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  { 
       sessionStorage.setItem("UserName",form.userid.value);
       sessionStorage.setItem("UserTaalcode",users.Taalcode[i]);
       sessionStorage.setItem("UserUren",users.Uren[i]);
       sessionStorage.setItem("UserInhaalRust",users.InhaalRust[i]);
       sessionStorage.setItem("UserJaarlijks",users.Jaarlijks[i]);
       sessionStorage.setItem("UserBijkomend",users.Bijkomend[i]);
        valid = true;
        break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
     return false;   
   }           
 }
