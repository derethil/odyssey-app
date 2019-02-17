import React, { Component } from 'react';

class Description extends Component {
	render() {
		return (
			<div className="desc-container">
				<div className="location">Lokris, Greece - 431 BC</div>
				<a href="http://wikipedia.org" className="wiki">Wikipedia Link</a>
			</div>
		)
	}
}

export default Description;