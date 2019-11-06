import Prism from 'prismjs';
import prismjsDebugger from './js/prismjs-debugger';
import './css/style.scss';

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  var whileDebugger = prismjsDebugger(document.getElementById('while-loop'), [
    { number: 2 },
    { number: 4 },
    { number: 5, console: '3' },
    { number: 6 },
    { number: 4 },
    { number: 5, console: '2' },
    { number: 6 },
    { number: 4 },
    { number: 5, console: '1' },
    { number: 6 },
    { number: 4 },
    { number: 9, console: 'Bonne année !!' }
  ], true).initialize();

  var functionDebugger = prismjsDebugger(document.getElementById('function-bonjour'), [
    { number: 1 },
    { number: 5 },
    { number: 1, console: '$pseudo = "John"' },
    { number: 2 },
    { number: 5, console: '$message = "Bonjour John"' },
    { number: 6, console: 'Bonjour John' }
  ], true).initialize();

});
