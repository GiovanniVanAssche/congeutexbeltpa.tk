var User_Verlof = { Name:["Line Vancauwenberghe","Giovanni Van Assche","David Debode","Stephane Lejour","Michaël Martens","Christophe Declercq","Paul Herregods","Luc Buyens","Mircea Danila","Patrick Mulier","Ayoub Khamlich","Armand Bayart","Davy Vercruysse","Thierry Verza"],                        
InhaalRust :["25,5","10","4,5","2","4","0","0","0","0","0","0","0","0","0"],                                    
Uren : ["0","52,52","120,22","0","67,40","0","0","0","0","0","0","0","0","0"],                                    
Jaarlijks : ["3","2","20","20","4","0","20","20","20","20","20","20","20","20"],                        
Bijkomend : ["0","4","1","0","0","0","0","0","0","0","0","1","0,5","4"],                        
Ancienniteit_20 : ["0","0","0","0","0","0","0","0","0","0","0","1","0","0"],                        
Ancienniteit_25 : ["0","0","0","0","0","0","0","0","0","0","0","1","0","0"],                        
Kermis : ["0","0","0","0","0","0","0","0","0","0","0","1","0","0"],                        
Braderie : ["0","0","0","0","0","0","0","0","0","0","0","1","0","0"]};     

var User_local_Name;    
var User_local_Taalcode;           

var Verlof_Uren;    
var Verlof_InhaalRust;    
var Verlof_Jaarlijks;    
var Verlof_Bijkomend;    
var Verlof_Ancienniteit_20;    
var Verlof_Ancienniteit_25;    
var Verlof_Kermis;    
var Verlof_Braderie;       

var local_user_index_array = sessionStorage.getItem("UserIndex");    
var index_submit_values;        

var prompt_user;           

User_local_Taalcode = sessionStorage.getItem("UserTaalcode");   
User_local_Name = sessionStorage.getItem("UserName");      

index_submit_values = User_Verlof.Name.indexOf(document.getElementById("username_submit"));      

Verlof_Uren = User_Verlof.Uren[local_user_index_array];      
Verlof_InhaalRust = User_Verlof.InhaalRust[local_user_index_array];   
Verlof_Jaarlijks = User_Verlof.Jaarlijks[local_user_index_array];   
Verlof_Bijkomend = User_Verlof.Bijkomend[local_user_index_array];   
Verlof_Ancienniteit_20 = User_Verlof.Ancienniteit_20[local_user_index_array];   
Verlof_Ancienniteit_25 = User_Verlof.Ancienniteit_25[local_user_index_array];   
Verlof_Kermis = User_Verlof.Kermis[local_user_index_array];   
Verlof_Braderie = User_Verlof.Braderie[local_user_index_array];      

function submitDataArray(){   

User_Verlof.Uren[index_submit_values] = document.getElementById("uren_submit");   
User_Verlof.InhaalRust[index_submit_values] = document.getElementById("inhaalrust_submit");   
User_Verlof.Ancienniteit_20[index_submit_values] = document.getElementById("ancienniteit_20_submit");   
}         

// Verwelkoming   
document.getElementById("header_username").innerHTML = User_local_Name;            

// Verlof   
document.getElementById("Verlof_Uren").innerHTML = Verlof_Uren;       
document.getElementById("Verlof_InhaalRust").innerHTML = Verlof_InhaalRust;    
document.getElementById("Verlof_Jaarlijks").innerHTML = Verlof_Jaarlijks;   
document.getElementById("Verlof_Bijkomend").innerHTML = Verlof_Bijkomend;   
document.getElementById("Verlof_Ancienniteit_20").innerHTML = Verlof_Ancienniteit_20;       
document.getElementById("Verlof_Ancienniteit_25").innerHTML = Verlof_Ancienniteit_25;    
document.getElementById("Verlof_Braderie").innerHTML = Verlof_Braderie;   
document.getElementById("Verlof_Kermis").innerHTML = Verlof_Kermis;      

// Taal definiëren   

if (User_local_Taalcode == "NL"){    

document.getElementById("verlof_uren_name").innerHTML = "Uren";    
document.getElementById("verlof_jaarlijks_name").innerHTML = "Jaarlijks verlof";    
document.getElementById("verlof_inhaalrust_name").innerHTML = "Inhaalrustdag";    
document.getElementById("verlof_bijkomend_name").innerHTML = "Bijkomend verlof";    
document.getElementById("verlof_ancienniteit_20_name").innerHTML = "Ancienniteit 20 jaar";    
document.getElementById("verlof_ancienniteit_25_name").innerHTML = "Ancienniteit 25 jaar";    
document.getElementById("verlof_kermis_name").innerHTML = "Kermis";    
document.getElementById("verlof_braderie_name").innerHTML = "Braderie";        

document.getElementById("header_soort").innerHTML = "Soort";    
document.getElementById("header_aantal").innerHTML = "Aantal";    
}       

if (User_local_Taalcode == "FR"){    

document.getElementById("verlof_uren_name").innerHTML = "Heures";    
document.getElementById("verlof_jaarlijks_name").innerHTML = "Congé annuel";    
document.getElementById("verlof_inhaalrust_name").innerHTML = "Jour de compensation";    
document.getElementById("verlof_bijkomend_name").innerHTML = "Congé supplémentaire";    
document.getElementById("verlof_ancienniteit_20_name").innerHTML = "Anciennité 20 ans";    
document.getElementById("verlof_ancienniteit_25_name").innerHTML = "Anciennité 25 ans";    
document.getElementById("verlof_kermis_name").innerHTML = "Kermesse";    
document.getElementById("verlof_braderie_name").innerHTML = "Braderie";             

document.getElementById("header_soort").innerHTML = "Sorte";    
document.getElementById("header_aantal").innerHTML = "Quantité";
}
