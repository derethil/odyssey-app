import React, { Component } from 'react';

class Slideshow extends Component {

	state = { slide: 1 }

	onItemClick(e) {
		e.preventDefault()
		var direction = (e.target.className === "fas fa-angle-right") ? 1 : -1

		var newSlide = this.state.slide + direction;

		if (newSlide === 0) newSlide = 88;
		if (newSlide === 89) newSlide = 1;

		this.setState({ slide: newSlide });
	}



	render() {
		return (
			<div className="slideshow">
				<i className="fas fa-angle-left" onClick={e => this.onItemClick(e)} />
				<img id="slide" src={require(`../images/screenshots/${this.state.slide}.jpg`)} alt="The current slide" />
				<i className="fas fa-angle-right" onClick={e => this.onItemClick(e)} />
			</div>
		)
	}
}

export default Slideshow;