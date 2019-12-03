

import ReactAce from 'react-ace-editor';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const test = require("../src/ace/theme/theme-chrome")



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
    this.editor = this.ace.editor;
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showPrintMargin: false,
      maxLines: Infinity,
      fontSize: "100%"
    });
    this.editor.setTheme("./ace/theme/theme-chrome.js");
    this.editor.renderer.setOption("showLineNumbers", false);
    this.editor.session.setMode("C:\\Users\\vkash\\Desktop\\nodejs\\hello-world\\ace\\mode\\java");
    this.editor.defaultProps = App.defaultProps;
    console.log(this.editor.getSession().getMode().toString());
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
        ref={instance => { this.ace = instance; }}
      />
    );
  }
}
export default App