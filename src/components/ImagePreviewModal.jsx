import React, { useEffect } from "react";

const ImagePreviewModal = ({ images, index, onClose, isOpen, setIndex }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, setIndex, images.length]);

  const showNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="image-preview-modal active" onClick={onClose}>
      <img
        src={images[index]}
        alt="Preview"
        className="preview-img show"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="modal-prev"
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
      >
        &#10094;
      </button>
      <button
        className="modal-next"
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
      >
        &#10095;
      </button>
      <span className="close-btn" onClick={onClose}>
        &#10006;
      </span>
    </div>
  );
};

export default ImagePreviewModal;
