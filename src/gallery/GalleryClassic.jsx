import React from 'react';
import GalleryItem from './GalleryItem';
import images from "../data.json";
import "./GalleryClassic.css";

const id = "wnd_PhotoGalleryBlock_20821647";

class GalleryClassic extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imageList: images.items
		};
	}

	render() {
		console.log("image", images);

		return (
			<div className="b-gal b-gal-classic b-gal-grid b grid-4" id={id}>
				<div className="b-gal-w grid">

					{this.state.imageList.map((image, index) =>
						<GalleryItem key={index}
			             type = {image.type}
			             small = {image.small}
						 medium = {image.medium}
						 large = {image.large}
			             alt = {image.alt}
			             width ={image.width}
			             height = {image.height}
                         sizes = {image.sizes}
						/>
					)}

				</div>
				<div></div>
			</div>
		)
	}
}

export default GalleryClassic;

// ReactDOM.render(<Gallery />, document.querySelector('.ez-c'));
