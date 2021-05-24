import React from 'react';
import "./styles.css";
import {EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      word: '1234567',
      show: true,
    }
  }
  changeWord(){
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    return (
      <div className="App">
        <span className="word">{this.state.show ? this.state.word : '*******'}</span>
        {
          this.state.show ? <EyeOutlined onClick={()=>this.changeWord()}/> : <EyeInvisibleOutlined onClick={()=>this.changeWord()}/>
        }
      </div>
    );
  }
  
}
