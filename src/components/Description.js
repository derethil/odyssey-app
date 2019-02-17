import React, { Component } from 'react';

class Description extends Component {
	render() {
		return (
			<div className="desc-container">
				<div className="location">{this.props.location}Greece - 431 BCE</div>
				<a href={this.props.link} className="wiki">Wikipedia Link</a>
				<div className = "description">{this.props.description}</div>
			</div>
		)
	}
}

export default Description;