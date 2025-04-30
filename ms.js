function result (){
    var name = document.getElementById('name').value;
    var sub1 = parseInt(document.getElementById('Sub1').value);
    var sub2 = parseInt(document.getElementById('Sub2').value);
    var sub3 = parseInt(document.getElementById('Sub3').value);
    var sub4 = parseInt(document.getElementById('Sub4').value);
    

    var totalmarks = 400;
    var obtmarks = sub1 + sub2 + sub3 + sub4;
    var percentage = (obtmarks / totalmarks)* 100;
  

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else if (percentage >= 50) {
        grade = "Fail";
    }
    document.getElementById('rName').innerHTML= name;
    document.getElementById('Total').innerHTML= obtmarks;
    document.getElementById('Average').innerHTML= percentage. toFixed(2) + "%";;
    document.getElementById('Grade').innerHTML= grade;

    


}




