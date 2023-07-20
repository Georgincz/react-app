import React from 'react';
import Picture from './Picture';

class GalleryItem extends React.Component {

	constructor(props) {
		super(props);

        this.refItem = React.createRef();
		this.refItemLink = React.createRef();
		this.refImgWrapper = React.createRef();
		this.refItemTitle = React.createRef();
		this.refPicture = React.createRef();

		this.state = {
            gridRowEnd: '',
			itemHeight: '',
		};
    }
	

    componentDidMount() {
		this.resizeItemGalleryFeed();
        window.addEventListener('resize', this.resizeItemGalleryFeed);
		
        // this.resizeHeightRowHorizontal();
        // window.addEventListener('resize', this.resizeHeightRowHorizontal);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeItemGalleryFeed);
		// window.removeEventListener('resize', this.resizeHeightRowHorizontal);
	}

    // Funkce Gallery Feed na resize obrázků -------------------------------------------------------
	resizeItemGalleryFeed = () => {
		const gridItem = this.refItem.current.parentNode;
		const rowHeightItem = parseInt(window.getComputedStyle(gridItem).getPropertyValue('grid-auto-rows'), 10);
		const rowGapItem = parseInt(window.getComputedStyle(gridItem).getPropertyValue('grid-row-gap'),10);

		const imgOrigWidth = this.props.width;
		const imgOrigHeight = this.props.height;
		const imgContWidth = this.refItemLink.current.getBoundingClientRect().width;

		let imgRealHeight = imgOrigHeight * (imgContWidth / imgOrigWidth);

		if (this.props.alt !== "") {
			imgRealHeight += parseInt(this.refItemTitle.current.getBoundingClientRect().height, 10);
		}

		const rowSpanItem = Math.ceil((imgRealHeight + rowGapItem) / (rowHeightItem + rowGapItem));
		this.setState({ gridRowEnd: `span ${rowSpanItem}` });
	}

    // Funkce Gallery Horizontal na připočtení výšky titlu k obrázku pokud je pod obrázkem ---------
	// resizeHeightRowHorizontal = () => {
	// 	const rowHeight = parseInt(this.refPicture.current.refImg.current.getBoundingClientRect().height, 10);
	// 	const titleRealHeight = parseInt(this.refItemTitle.current.getBoundingClientRect().height, 10);
	// 	const itemResizeHeight = rowHeight + titleRealHeight;
	// 	this.setState({ itemHeight: itemResizeHeight });
	// }


	// Funkce na vyrenderování titlu obrázku jestliže obrázek nějaký title má ----------------------
	isTitleImg = () => {
		if (this.props.alt) {
			return (
				<div className="b-gal-t title-position"
						ref={this.refItemTitle}
				>
					<span>
						<span>{this.props.alt}</span>
					</span>
				</div>
			);
		}
	}

	render() {

		return (
			<div className={`b-gal-item wnd-orientation-landscape`}
			     ref={this.refItem}
			     style={{gridRowEnd: this.state.gridRowEnd,
				     height: this.state.itemHeight,
				 }}
			>
				<a
					className="b-gal-a litebox"
					data-litebox-group="gallery"
					data-litebox-text={this.props.alt}
					href={this.props.large}
					width={this.props.width}
					height={this.props.height}
					ref={this.refItemLink}
				>
					<div className="b-gal-img"
					     ref={this.refImgWrapper}
					>
						<Picture
							ref={this.refPicture}
							type = {this.props.type}
							small = {this.props.small}
							medium = {this.props.medium}
							large = {this.props.large}
							alt = {this.props.alt}
							width ={this.props.width}
							height = {this.props.height}
							sizes = {this.props.sizes}
						/>
					</div>
				</a>
				{this.isTitleImg()}
			</div>
		);
	}
}

export default GalleryItem;