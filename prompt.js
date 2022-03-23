let name = prompt('What is you name?'); //prompt ask us something
alert(`Hello, ${name}!`); //alert just shows message
let result = confirm('Do you want to come in?'); //confirm yes/no options
alert(result ? `Welcome to the party, ${name}!` : `Ok, See you, ${name}!`);

// as thees modal windows pause script execution
// we cannot change its view
// its view depend on browser
// usually it appeared in the center of the browser window