var rad_value;
var sub_value="";
var students="";
function collectData(){
    var n=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var phno=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var addr=document.getElementById("address").value;

    var rad = document.getElementsByName("gender");
    for(var i = 0; i < rad.length; i++){
        if(rad[i].checked){
        rad_value = rad[i].value;
        }
    }
    var sub= document.getElementsByName("subject");
    for (var i = 0; i < sub.length; i++) {
        if (sub[i].checked){
            sub_value += sub[i].value+'<br>';
        } 
    }   

    var studentList=[];
    var student={name:n, 
                age:age, 
                radio:rad_value, 
                phone:phno, 
                email:email, 
                address:addr, 
                checkbox:sub_value
            };
    
    studentList.push(student);
    //alert(studentList.length);
    studentList.forEach(function(value, key){
    students += '<tr><td>'+studentList[key].name+'</td><td>'+studentList[key].age+'</td><td>'+studentList[key].radio+'</td><td>'+studentList[key].phone+'</td><td>'+studentList[key].email+'</td><td>'+studentList[key].address+'</td><td>'+studentList[key].checkbox+'</td></tr>';
    });
    document.getElementById("stutable").innerHTML=students;
}
function clearData(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    rad_value="";
    sub_value="";
}
