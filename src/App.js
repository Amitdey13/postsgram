import React, { Component } from 'react'
import Create from "./components/newPost"
import View from "./components/viewPosts"
import { GiPostStamp } from "react-icons/gi";
import { FaRegPlusSquare } from "react-icons/fa";
import './App.css';
import './components/style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       viewPost: true
    }
  }

  render() {
    const {viewPost} = this.state
    return (
      <div>
        <div className="headbar">
          Postsgram
        </div>
        <div className="post_section">
          {viewPost?<View />:<Create />}
        </div>
        <div className="nav">
          <div onClick={()=>this.setState({viewPost:false})}><FaRegPlusSquare /></div>
          <div onClick={()=>this.setState({viewPost:true})}><GiPostStamp /></div>
        </div>
      </div>
    )
  }
}

export default App

