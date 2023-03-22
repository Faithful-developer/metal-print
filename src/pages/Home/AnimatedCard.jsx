import {useEffect, useState} from "react";
import './AnimatedCard.scss'

const MetalLid = ({imageList}) => {


    const [imageSrc, setImageSrc] = useState(imageList[0]);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(rotation => rotation + 360); // increment rotation by 360 degrees
            setTimeout(() => setImageSrc(imageSrc => getNextImage(imageSrc)), 500); // change image after 0.5 seconds
        }, 5000); // update every 10 seconds
        return () => clearInterval(intervalId); // cleanup function to clear the interval when the component unmounts
    }, []); // empty dependency array to run effect only once on mount

    const getNextImage = (currentImageSrc) => {
        const currentIndex = imageList.indexOf(currentImageSrc);
        const nextIndex = currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
        return imageList[nextIndex];
    };


    return (
        <>
            <div className="preview-design-item">
                <img src={imageSrc} alt="" style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.5s ease-out', // add a transition to make the rotation smooth
                }}
                />
            </div>
        </>
    )
}

export default MetalLid
