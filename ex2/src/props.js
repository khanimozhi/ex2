import React from 'react';
import ReactDOM from 'react-dom';
 class Parent extends React.Component{
    render(){
        return(
                <div>
                    <h2>COSMETICS</h2>
                    <Child name="Lipstick" userId = "190"/>
                </div>
            );
    }
}
 
// Child Component
class Child extends React.Component{
    render(){
        console.log(this.props);
        return(
                <div>
                    <h3>Product Name: {this.props.name}</h3>
                    <h3>Product price: {this.props.userId}</h3>
                </div>
            );
    }
}
 
ReactDOM.render(
    // passing props
    <Parent />,
    document.getElementById("root")
);

export default Parent;