




function dataForm(event) {


    event.preventDefault();

    let pName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let Subject = document.getElementById('subject').value;
    let DOB = document.getElementById('dob').value;
    let Address = document.getElementById('address').value;
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');


    let hobbyValue = [];

    hobby.forEach(

        function(hobby) {
            hobbyValue.push(hobby.value);

        }

    );



    let output = "Name:" + pName + "\n";
    output += "email:" + email + "\n";
    output += "password:" + password + "\n";
    output += "Gender:" + gender + "\n";
    output += "Hobby:" +hobbyValue+ "\n";
    output += "Subject:" + Subject + "\n";
    output += "DOB:" + DOB + "\n";
    output += "Address:" + Address + "\n";


    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");














}



let regForm = document.getElementById("regForm"); 
 regForm.addEventListener('submit', dataForm);


