import React from "react";
import ImageGallery from "react-image-gallery";

const pictures = [
    {
      original: "images/photography-site.jpg",
      thumbnail: "images/photography-site.jpg",
      description: `Sample Photography Site`,
      originalHeight: "450px",
    },
    {
        original: "images/compare-sorts.jpg",
        thumbnail: "images/compare-sorts.jpg",
        description: `Sort Algorithms Comparison Tool`,
        originalHeight: "450px",
      },
    {
        original: "images/library-app-wireframe.jpg",
        thumbnail: "images/library-app-wireframe.jpg",
        description: `Social Media Library App - Figma`,
        originalHeight: "450px",
    },
    {
        original: "images/monopoly-clone.jpg",
        thumbnail: "images/monopoly-clone.jpg",
        description: `Text-based Monopoly clone`,
        originalHeight: "450px",
    },
    {
        original: "images/star-wars-API.jpg",
        thumbnail: "images/star-wars-API.jpg",
        description: `API Site tha pulls data from the Star Wars API`,
        originalHeight: "450px",
    },
    {
        original: "images/task-manager.jpg",
        thumbnail: "images/task-manager.jpg",
        description: `CRUD app, created with Node.js and React`,
        originalHeight: "450px",
    },
    {
        original: "images/atlanta.jpg",
        thumbnail: "images/atlanta.jpg",
        description: `Coca Cola Museum`,
        originalHeight: "450px",
    },
    {
        original: "images/boone-nc.jpg",
        thumbnail: "images/boone-nc.jpg",
        description: `Blue Ridge Mountains, NC`,
        originalHeight: "450px",
    },
    {
        original: "images/miami.jpg",
        thumbnail: "images/miami.jpg",
        description: `View of the beach.`,
        originalHeight: "450px",
    },
    {
        original: "images/minneapolis.jpg",
        thumbnail: "images/minneapolis.jpg",
        description: `View of Downtown Minneapolis`,
        originalHeight: "450px",
    },

    ]

function GalleryPage() {
  return (

    <>
        <h2>Gallery</h2>

        <p>Gallery of Projects and Road Trips</p>

        <article>
            <ImageGallery items={pictures} />
        </article>
    </>
  );
}

export default GalleryPage;