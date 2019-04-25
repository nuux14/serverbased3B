import {User, xyz} from './usermodule.js';
let btn = document.getElementById('btnAdd');
btn.addEventListener('click', addUser);
function addUser(){
    var heading = document.querySelector('h3'),
        name = document.querySelector('#txtName'),
        email = document.querySelector('#txtEmail'),
        tbl = document.getElementById('tbl');

    var tr = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td');
//--------------------------------------------//
        td1.innerText= name.value;
        td2.innerText = email.value;
    var u = new User(name.value, email.value);
    usrsCollection.push(u);

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbl.appendChild(tr);    
}

var usrsCollection=[];

// function User(name,email){
//     this.userName=name;
//     this.userEmail=email;
// }

