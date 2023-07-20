import React from 'react';
import Masonry from 'react-masonry-component';
import GalleryItem from './GalleryItem';
import images from "../data.json";
import "./GalleryMasonry.css";

const id = "wnd_PhotoGalleryBlock_20821647";

const masonryOptions = {
    transitionDuration: 0,
	horizontalOrder: false
};

const imagesLoadedOptions = { background: 'tomato' }

class GalleryMasonry extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imageList: images.items,
			grid: document.getElementsByClassName("grid")[0]
		};
	}

	render() {
		console.log("image", images);
		console.log(this.state.grid);

		const childElements = this.state.imageList.map(function(image, index){
			return (
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
			 );
		 });

		return (
			<div className="b-gal b-gal-masonry" id={id}>
				<Masonry
					className={'b-gal-w'} // default ''
					elementType={'div'} // default 'div'
					options={masonryOptions} // default {}
					disableImagesLoaded={false} // default false
					updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					imagesLoadedOptions={imagesLoadedOptions} // default {}
				>
					{childElements}
				</Masonry>
			</div>
		)
	}
}

export default GalleryMasonry;
