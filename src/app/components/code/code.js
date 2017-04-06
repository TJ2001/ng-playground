class CodeController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const code = {
  template: require('./code.html'),
  controller: CodeController
};

