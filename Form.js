




function dataForm(event) {


    event.preventDefault();

    let pName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let hobby = document.querySelectorAll('input[name="hobby"]:checked');

    let hobbyValue = [];

    hobby.forEach(

        function (hobby) {

            hobbyValue.push(hobby.Value);

        }




    );













    let output = "Name:" + pName + "\n";
    output += "email:" + email + "\n";
    output += "password:" + password + "\n";
    output += "Gender:" + gender + "\n";
    output += "Hobby:" + hobbyValue + "\n";


    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");














}



let regForm = document.getElementById("regForm");
regForm.addEventListener('submit', dataForm);