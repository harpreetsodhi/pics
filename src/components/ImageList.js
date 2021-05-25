import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(

        // (image) => <div key={image.id}>
        //     <img alt="X" src={image.urls.regular} />
        // </div>
        // we have to assign key to the root element in the array - in the above case it is the div

        // (image) => <img key={image.id} alt={image.description} src={image.urls.regular} />
        // here we are making use of the image keyword multiple times so what we can do instead is 
        // desctructure the properties out

        (image) =>
         <ImageCard key={image.id} image={image} />
    );
    return <div className="image-list">{images}</div>
};

export default ImageList;