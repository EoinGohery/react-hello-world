import { Component } from "react";

export default class Message extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           active: props.active
        }
    }

    onClick = () => {
        this.setState(oldState => {
            return {
                active: !oldState.active
            }
        });
    }

    render() {
        //called to render the component
        //called when the props change
        //called when state variable changes

        return (
            <div className="message">
                <h1 onClick={this.onClick}>{this.props.title}</h1><hr/>
                <p>{this.props.text}</p>
                { this.props.active && <><hr /><p>ACTIVE</p></>}
            </div>
        )
    }
}