import React from "react";

export default class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.txtName = React.createRef();
    }
    Clickme(){
        alert(this.txtName.current.value )

    }
    render() { 
        return ( 
            <>
                <input ref={this.txtName} ></input>
                <input ref={this.txtName} ></input>
                <button onClick={()=>this.Clickme()}>Convert</button>
            </>
         );
    }
}