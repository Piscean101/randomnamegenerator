import { boyName, girlName, lastName } from "./components/name.js";


var checked = (document.getElementById('lock').checked); 
let b = boyName.length;
let g = girlName.length;
let l = lastName.length;
let t = b + g + l
console.log(`${b} ${(b/t).toFixed(2)*100}%`);
console.log(`${g} ${(g/t).toFixed(2)*100}%`);
console.log(`${l} ${(l/t).toFixed(2)*100}%`);
console.log(t);

function names (firstName, lastName) { 
    var checked = (document.getElementById('lock').checked);
    const lockname = [];
    if (checked) {
        lockname.push(document.getElementById('lastname').innerHTML);
    }
    if (firstName == 'boy') {
        var given = boyName[Math.floor(Math.random()*b)];
    } else if (firstName == 'girl') {
        var given = girlName[Math.floor(Math.random()*g)];
    }   
    var surname = lastName[Math.floor(Math.random()*l)]; 
    let display_first = (`${given}`);
    let display_last = (`${surname}`);
    document.getElementById('firstname').innerHTML = display_first;
    document.getElementById('lastname').innerHTML = display_last;
    if (checked) {
        document.getElementById('lastname').innerHTML = lockname;
    }
 }
$('#boyName').on('click', () => {
    return (
        names('boy', lastName)
    ) 
});
$('#girlName').on('click', () => {
    return (
        names('girl', lastName)
    )
});
$('.btn').on('click', () => {
    document.getElementById('name-lock').style.visibility = 'visible';
})


