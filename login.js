var users = { Name:["Line Vancauwenberghe","Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"],             
    Psw:["05193utb","06044utb","04970utb","04439utb","04549utb","04922utb","01235","01235","01235","01235","01235","01235","01235","01235"],
    Taalcode:["NL","NL","FR","FR","NL","FR","NL","NL","FR","FR","FR","FR","NL","FR"]}; 


function check(form){  
          
    for (var i = 0; i < users.Name.length ; i++)  {  
        
      if ((form.userid.value == users.Name[i]) && (form.pswrd.value == users.Psw[i]))  { 
          
       sessionStorage.setItem("UserName",form.userid.value);
       sessionStorage.setItem("UserTaalcode",users.Taalcode[i]);                      
       sessionStorage.setItem("UserIndex",i);
          
       valid = true;
       
          break;  
      }     
   }   
   
   if (valid)   {    
     window.location.assign('index.html?v=Date.now()');    
     return false;   
   }           
 }
