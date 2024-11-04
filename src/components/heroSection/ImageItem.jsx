/* eslint-disable react/prop-types */
export default function ImageItem({ src, alt = "" }) {
  return (
    <div className="h-64 w-44 overflow-hidden rounded-lg ">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center "
      />
    </div>
  );
}
