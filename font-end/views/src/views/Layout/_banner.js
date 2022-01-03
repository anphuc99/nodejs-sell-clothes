import React from "react";

class Banner extends React.Component {
    render() {
        return (<div className="banner-top">
            <div className="container">
                <h1>{this.props.name}</h1>
                <em></em>
                <h2><a href="index.html">Home</a><label>/</label>{this.props.name}</h2>
            </div>
        </div>);
    }
}

export default Banner