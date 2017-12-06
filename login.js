var loginUname = ["Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Verza Thierry"];    
var loginPsw = ["06044","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235","01235"];    
var LengthFor;     

function check(form){         
  if (loginUname.length == loginPsw.length){    
    LengthFor = loginUname.length;    
  }    
  
  else{     
    alert("Please contact your administrator");    
      }          
  
  for (var i = 0; i < LengthFor ; i++)  {  
    if ((form.userid.value == loginUname[i]) && (form.pswrd.value == loginPsw[i]))  {   
      valid = true;       
      break;  
    }     
    
    else{                                              
      alert("De opgegeven combinatie komt niet overeen");                            
      break;            
    } 
  }   
  
  if (valid)   {    
    window.location.assign('https://giovannivanassche.github.io/congeutexbeltpa.tk/index.html');    
    return false;   
  }           
}
require('name.js');
