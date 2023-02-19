import { boyName, girlName, lastName } from "./components/name.js";
var checked = (document.getElementById('lock').checked); 
let b = boyName.length;
let g = girlName.length;
let l = lastName.length;
console.log(b, g, l);
console.log(b + g + l);

function names (firstName, lastName) { 
    var checked = (document.getElementById('lock').checked);
    const lockname = [];
    if (checked) {
        lockname.push(document.getElementById('lastname').innerHTML);
        console.log(lockname);
    }
    if (firstName == 'boy') {
        var given = boyName[Math.floor(Math.random()*b)];
    } else if (firstName == 'girl') {
        var given = girlName[Math.floor(Math.random()*g)];
    }   
    var surname = lastName[Math.floor(Math.random()*l)]; 
    let display_first = (`${given}`);
    let display_last = (`${surname}`)
    let display = display_first + ' ' + display_last;
    console.log(display);
    document.getElementById('firstname').innerHTML = display_first;
    document.getElementById('lastname').innerHTML = display_last;
    if (checked) {
        document.getElementById('lastname').innerHTML = lockname;
    }
 }

$('#lock').on('click', () => {
    var checked = (document.getElementById('lock').checked);
    console.log(checked);
})
$('#boyName').on('click', () => {
    if (checked) {
        return (
            names('boy', null)
        )
    } else {
    return (
        names('boy', lastName)
    ) }
});

$('#girlName').on('click', () => {
    return (
        names('girl', lastName)
    )
});
$('.btn').on('click', () => {
    document.getElementById('name-lock').style.visibility = 'visible';
})


