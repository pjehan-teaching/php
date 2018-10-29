(function() {

  // TODO: Fix this hack within ReavealExpress so it would start this script after loading the HTML into the DOM
  setTimeout(function() {

    prismjsDebugger.initialize(document.getElementById('while-loop'), [
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
    ], true);

    prismjsDebugger.initialize(document.getElementById('function-bonjour'), [
      { number: 1 },
      { number: 5 },
      { number: 1, console: '$pseudo = "John"' },
      { number: 2 },
      { number: 5, console: '$message = "Bonjour John"' },
      { number: 6, console: 'Bonjour John' }
    ], true);

  }, 500);

})();