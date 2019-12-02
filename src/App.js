import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

class App extends Component {
  contructor() {
    this.onChange = this.onChange.bind(this);
    const editor = this.ace.editor;
  }
  onChange(newValue, e) {
    console.log(newValue, e);

  }
  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="github"
        onChange={this.onChange}
        enableBasicAutocompletion={true}
        style={{ height: '400px' }}
        ref={instance => { this.ace = instance; }}
      />
    );
  }
}
export default App