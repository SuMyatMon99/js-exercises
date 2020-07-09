var rad_value;
var sub_value="";
function collectData(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var addr=document.getElementById("address").value;
    var year=document.getElementById("year").value;

    var rad = document.getElementsByName("gender");
    for(var i = 0; i < rad.length; i++){
        if(rad[i].checked){
        rad_value = rad[i].value;
        }
    }
    var sub= document.getElementsByName("subject");
    for (var i = 0; i < sub.length; i++) {
        if (sub[i].checked){
            sub_value += sub[i].value+' ';
        } 
    } 

    var nameTN=document.createTextNode(name);
    var ageTN=document.createTextNode(age);
    var radioTN=document.createTextNode(rad_value);
    var phoneTN=document.createTextNode(phone);
    var emailTN=document.createTextNode(email);
    var addrTN=document.createTextNode(addr);
    var yearTN=document.createTextNode(year);
    var subTN=document.createTextNode(sub_value);

   var tbody=document.getElementById("stuTable");
    var row=document.createElement("tr");
    var n=document.createElement("td");
    var age=document.createElement("td");
    var gen=document.createElement("td");
    var phno=document.createElement("td");
    var mail=document.createElement("td");
    var addr=document.createElement("td");
    var y=document.createElement("td");
    var sub=document.createElement("td");

    tbody.appendChild(row);
    row.appendChild(n);
    row.appendChild(age);
    row.appendChild(gen);
    row.appendChild(phno);
    row.appendChild(mail);
    row.appendChild(addr);
    row.appendChild(y);
    row.appendChild(sub);

    n.appendChild(nameTN);  
    age.appendChild(ageTN);
    gen.appendChild(radioTN);
    phno.appendChild(phoneTN);  
    mail.appendChild(emailTN);
    addr.appendChild(addrTN);
    y.appendChild(yearTN);
    sub.appendChild(subTN);
    
}
function clearData(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("year").value="";
    rad_value="";
    sub_value="";
}

             
