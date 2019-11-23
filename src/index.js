import React , { Component }  from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { data: [], dataNetwork: []};
  }
  
  async componentDidMount() {
    try { 
          const response = await  fetch('http://18.209.137.246:30001/getNodeInfo');
          if (!response.ok) {throw Error(response.statusText);}
          const json = await response.json();
          const network =  json.network;
          this.setState({ data: json, dataNetwork: network });
          console.log(json);
        }   
    catch (error) {console.log(error);}
  }

  render() {
            return (
              <div><h1>IOST NodeInfo data (edit .js itself)</h1>
                   <li>build_time: {this.state.data.build_time}</li> 
                   <li>data.mode: {this.state.data.mode }</li>
                   <li>Network id: {this.state.dataNetwork.id} </li>
                   <li>Network peer_count: {this.state.dataNetwork.peer_count} </li>
                   <li>code_version: {this.state.data.code_version} </li>
                   <li>server_time: {this.state.data.server_time} </li>
              </div>
                    );
            }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
