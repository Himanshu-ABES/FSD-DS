// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World';
// console.log(h1);

// document.querySelector('body').appendChild(h1);

// console.log(React);

var h1 = React.createElement('h1', null, 'Hello World');
var parent = document.querySelector('#parent');

var root = ReactDOM.createRoot(parent);
root.render(h1);