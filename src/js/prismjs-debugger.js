module.exports = function(el, lines, console) {
  return {

    debuggerContainer: el,
    consoleContainer: null,
    buttons: {},
    lines: lines,
    console: console,
    lineHeight: 0,
    currentLine: 0,
    pointer: null,

    initialize: function() {
      this.lineHeight = parseFloat(window.getComputedStyle(this.debuggerContainer).getPropertyValue('line-height'));

      this.createDebugger();
      if (this.console === true) {
        this.createConsole();
      }
    },

    createDebugger() {
      const debuggerContainer = document.createElement('div');
      debuggerContainer.classList.add('prismjs-debugger');

      this.buttons.gotToStartButton = document.createElement('button');
      this.buttons.gotToStartButton.textContent = '⏮';
      this.buttons.gotToStartButton.addEventListener('click', this.goToStart.bind(this));
      debuggerContainer.appendChild(this.buttons.gotToStartButton);

      this.buttons.playButton = document.createElement('button');
      this.buttons.playButton.textContent = '⏯';
      this.buttons.playButton.addEventListener('click', this.play.bind(this));
      debuggerContainer.appendChild(this.buttons.playButton);

      this.debuggerContainer.insertBefore(debuggerContainer, this.debuggerContainer.childNodes[0]);
    },

    createConsole() {
      this.consoleContainer = document.createElement('div');
      this.consoleContainer.classList.add('prismjs-console');
      this.debuggerContainer.appendChild(this.consoleContainer);
    },

    goToStart: function() {
      this.currentLine = 0;
      this.consoleContainer.innerHTML = '';
      this.buttons.playButton.disabled = false;
      this.play();
    },

    play: function () {
      const currentLine = this.lines[this.currentLine];
      if (!this.pointer) {
        this.pointer = document.createElement('div');
        this.pointer.classList.add('prismjs-pointer');
        this.pointer.textContent = '>';
        this.debuggerContainer.appendChild(this.pointer);
      }
      if (this.currentLine <= this.lines.length - 1) {
        if (this.console && currentLine.console) {
          const consoleMsg = document.createElement('div');
          consoleMsg.classList.add('prismjs-console-msg');
          consoleMsg.textContent = currentLine.console;
          this.consoleContainer.appendChild(consoleMsg);
        }
        this.pointer.style.top = (currentLine.number - 1) * this.lineHeight + 'px';
        this.currentLine++;
        if (this.currentLine >= this.lines.length) {
          this.buttons.playButton.disabled = true;
        }
      }
    }

  };
};
