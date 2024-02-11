import React, { useState } from "react";
import img1 from "../../assets/images/13884.jpg";
import img2 from "../../assets/images/15860.jpg";
import img3 from "../../assets/images/15892.jpg";
import img4 from "../../assets/images/197280.jpg";
import img5 from "../../assets/images/4241950.jpg";
import img6 from "../../assets/images/977057.jpg";
interface Images {
  id: number;
  src: string;
  alt: string;
}
const ImageGallery: React.FC = () => {
  const [selectedID, setSelectedID] = useState<number>();

  const images: Images[] = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
    { id: 4, src: img4, alt: "Image 4" },
    { id: 5, src: img5, alt: "Image 5" },
    { id: 6, src: img6, alt: "Image 6" },
  ];

  const selected = (id: number) => {
    setSelectedID(id);
  };
  return (
    <div className="mt-10 text-center">
      <h1 className="text-xl font-bold mb-4">Click on An Image To Select</h1>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {images.map((image) => (
          <img
            onClick={() => selected(image.id)}
            key={image.id}
            className="h-[200px] w-[240px]"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-8 justify-center items-center">
        <h1 className="text-xl font-bold">Selected Image</h1>
        {images
          .filter((image) => image.id === selectedID)
          .map((imagesource) => (
            <img
              className="h-[400px] w-[400px]"
              src={imagesource.src}
              alt={imagesource.alt}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
