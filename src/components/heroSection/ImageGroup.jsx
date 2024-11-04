/* eslint-disable react/prop-types */
import ImageItem from "./ImageItem";

export default function ImageGroup({ images }) {
  return (
    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
      {images.map((image, index) => (
        <ImageItem key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
