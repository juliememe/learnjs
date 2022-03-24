// A switch statement can replace multiple if checks.
// switch(x) {
//     case 'value1':  // if (x === 'value1') //value in every case should be strict equal to the switch value
//     ...   // if it is so the code here is executed
//         [break] //if there is no break, it goes further WITHOUT any other checks and execute all other code
//
//     case 'value2':  // if (x === 'value2')
//     ...
//         [break]
//
//     default: // use it in a case if we don't have any option in case
//     ...
//         [break]
// }

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}

//Any expression can be a switch/case argument
let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        alert("this doesn't run");
}


//Several variants of case which share the same code can be grouped.
let a = 3;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

// Tasks
// Rewrite the "switch" into an "if"
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}
if( browser === 'Edge'){
    alert( "You've got the Edge!" );
} else if(browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera' ){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}

//Rewrite "if" into "switch"
let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}
let a = +prompt('a?', '');
switch (a){
    case 0:
        alert (0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}