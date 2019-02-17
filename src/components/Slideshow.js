import React, { Component } from 'react';

class Slideshow extends Component {
	render() {
		return (
			<div className="slideshow">
				<i className="fas fa-angle-left" onClick={this.props.onClick} />
				<img id="slide" src={require(`../images/screenshots/${this.props.slide}.jpg`)} alt="The current slide" />
				<i className="fas fa-angle-right" onClick={this.props.onClick} />
			</div>
		)
	}
}

export default Slideshow;