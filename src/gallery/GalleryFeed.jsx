import React from 'react';
import GalleryItem from './GalleryItem';
import images from "../data.json";
import "./GalleryFeed.css";

class GalleryFeed extends React.Component {
	constructor(props) {
		super(props);
		this.refGalWrapper = React.createRef();
		this.state = {
			imageList: images.items,
			grid: document.getElementsByClassName("grid")[0],
		};
    }

	render() {

		return (
			<>
				<h3>Gallery Feed s použitím CSS gridu</h3>
				<div className={`b-gal b-gal-feed b-gal-grid b grid-4`}>
				{/* <div className={`b-gal b-gal-feed b-gal-grid b grid-${this.props.data.gridCount}`}> */}
					<div className="b-gal-w" ref={this.refGalWrapper} >
						{this.state.imageList.map((image, id) =>
							<GalleryItem key={id}
								type = {image.type}
								small = {image.small}
								medium = {image.medium}
								large = {image.large}
								alt = {image.alt}
								width ={image.width}
								height = {image.height}
								sizes = {image.sizes}
								image={image}
								galWrapper={this.refGalWrapper}
							/>
						)}
					</div>
				</div>
			</>
		)
	}
}

export default GalleryFeed;