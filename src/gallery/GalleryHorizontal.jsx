import React from 'react';
import GalleryItem from './GalleryItem';
import images from "../data.json";
import "./GalleryHorizontal.css";

class GalleryHorizontal extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			imageList: images.items
		};
	}

	render() {
		return (
			<div className="b-gal b-gal-horizontal b">
				<div className="b-gal-w">
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
				<div className="wnd-empty" />
			</div>
		)
	}
}

export default GalleryHorizontal;
