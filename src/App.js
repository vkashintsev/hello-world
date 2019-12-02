import ReactAce from 'react-ace-editor';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import 'brace/mode/java';
import 'brace/theme/github';




class App extends React.Component {
  editor;

  static propTypes = {
    mode: PropTypes.string,
    content: PropTypes.string,
  };

  static defaultProps = {
    mode: 'javascript',
    code: '//write your code here',
  };

  componentDidMount(){
 //   let Mode = require("modes/java").Mode;
 //   this.editor.getSession().setMode(new Mode());
    this.editor = this.ace.editor;
    this.editor.setTheme("ace/theme/clouds");
    this.editor.setShowPrintMargin(false);
    this.editor.setOptions({minLines: 25});
    this.editor.setOptions({maxLines: 50});
    this.editor.setStyle({height: '500px'});
  }

  onCreate(e){
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    console.log(newValue, e);

  }
  render() {
    return (
      <ReactAce
        onCreate={this.onCreate}
        onChange={this.onChange}
        enableBasicAutocompletion={true}
        ref={instance => { this.ace = instance; }}
      />
    );
  }
}
export default App