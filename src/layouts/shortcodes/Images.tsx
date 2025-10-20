import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Images = ({ image, alt }: { image: string; alt?: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback(
    (shouldZoom: boolean | ((prevState: boolean) => boolean)) => {
      setIsZoomed(shouldZoom);
    },
    [],
  );

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt={alt || "Image"}
        src={image}
        className="cursor-pointer rounded-xl sm:rounded-2xl w-full"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </ControlledZoom>
  );
};

export default Images;
