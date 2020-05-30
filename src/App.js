import React, { Component } from 'react';

import axios from 'axios';


class App extends Component {
    state = {
            posts: [],
            assetsDatas: [],

        }
    
    
     async componentDidMount(){
        const response = await axios.get('https://tractian-data.s3.us-east-2.amazonaws.com/api.json')
       
        this.setState({posts: response.data.units})
        this.setState({assetsDatas: response.data.units})
//        console.log(this.assetsDatas)
    

    
       
       //this.setState({posts: response.data.units})
       //this.setState({assetsDatas: response.data.units.data.assetsData})
       //const {posts} = this.state;
     }
    
    render(){
             
        const {posts} = this.state;
        //const {assetsDatas} = this.state;

        //console.log(posts)
        //console.log(assetsDatas)

        const centreValues = Object.entries(posts).map(([title, value]) => ({ title, value}))

        console.log(centreValues)
      

        return (
        <div> 
        <ul>
            {posts.map(post => (
                <li key={post.name}>
                    Nome: {post.name} Resolvidos: {post.data.insightsChecked} 
                   
                    {//console.log(post.data.assetsData)}
    }
                </li> 
            ))}
        </ul>

        </div>
        )

 }

    
}



export default App;


