import React from 'react';

const loading = "lazy";

class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.refImg = React.createRef();
	}

	render() {
		return (
			<picture>
				<source type={this.props.type} srcSet={`${this.props.small} 450w, ${this.props.medium} 750w, ${this.props.large} 1920w`} sizes={this.props.sizes} />
				<img 
					ref={this.refImg}
					src={this.props.small} 
					alt={this.props.alt} 
					width={this.props.width} 
					height={this.props.height} 
					loading={loading} 
				/>
			</picture>
		);
	}
}

export default Picture;