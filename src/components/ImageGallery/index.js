import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImageIndex: 0
        }
    }


    selectImage = (e) => {
        this.setState({
            selectedImageIndex: e.target.dataset.index
        });
    }

    render() {
        const { images } = this.props;
        const { selectedImageIndex } = this.state;
        const selectedImage = images[selectedImageIndex];

        return (
            <section className="c-image-gallery">
                <div className="c-image-gallery__selected">
                    <img src={selectedImage.url} alt={selectedImage.caption} />
                </div>

                <ul className="c-image-gallery__thumblist">
                    {images.map((image, i) => (
                        <li className="c-image-gallery__thumbitem" key={image.url}>
                            <button 
                                className={
                                    'c-image-gallery__thumb' + ((i == selectedImageIndex) ? ' c-image-gallery__thumb--selected' : '')
                                } 
                                style={{backgroundImage: `url('${ image.url}')`}}
                                aria-label={image.caption}
                                onClick={this.selectImage}
                                data-index={i}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        )
    }

}

export default ImageGallery;
