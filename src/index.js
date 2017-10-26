// index.js is the 'Entry Point' js file, or the central file that calls other js files to utilize their logic, and which has NO export modules

//module import/export types

//Common JS = Node.js
// 'require' || 'module.exports'

//ES2015 = modern javascript
// 'import' || 'export'
import './styles/image_viewer.css';

const sumCommon = require('./sumCommon'); // common js (node) import statement. note the relative path
import sumES2015 from './sumES2015';
//import './image_viewer'; //import the entire code block found in image_viewr.js (which will run itself)

const totalCommon = sumCommon(10, 5);
const totalES2015 = sumES2015(10, 5);
console.log(`common syntax import sum function: ${totalCommon}`);
console.log(`es2015 syntax import sum function: ${totalES2015}`);

const button = document.createElement('button');
button.innerText = 'Get Images';

button.onclick = () => { //example of how to only load code conditionally
    System.import('./image_viewer').then(module => {
        console.log(module);
    });
};

document.body.appendChild(button);