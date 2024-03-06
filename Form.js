




function dataForm(event) {


   event.preventDefault();

    let pName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;





    let output = "Name:" + pName + "\n";
    output += "email:" + email + "\n";
    output += "password:" + password + "\n";


    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");














}



let regForm = document.getElementById("regForm");
regForm.addEventListener('submit', dataForm);