import React, { useState, useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import artscrafts from '../data/artscrafts.json';
import '../styles/styles.css';

const ArtsCrafts = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState(artscrafts);

  const types = [
    {
      key: 'Embroidery/Sewing',
      text: 'Embroidery/Sewing',
      value: 'embroidery/sewing',
      label: { color: 'purple', empty: true, circular: true },
    },
    {
      key: 'Perler Beads',
      text: 'Perler Beads',
      value: 'perler',
      label: { color: 'pink', empty: true, circular: true },
    },
    {
      key: 'Painting',
      text: 'Painting',
      value: 'painting',
      label: { color: 'blue', empty: true, circular: true },
    },
    {
      key: 'Drawing',
      text: 'Drawing',
      value: 'drawing',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      key: 'Wood',
      text: 'Wood',
      value: 'wood',
      label: { color: 'yellow', empty: true, circular: true },
    },
  ];

  const filter = (type) => {
    setImages(artscrafts.filter((image) => image.type === type));
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Dropdown
        text='Filter'
        icon='filter'
        floating
        labeled
        button
        className='filter-button icon'
      >
        <Dropdown.Menu>
          <Dropdown.Divider />
          <Dropdown.Header icon='tags' content='Type' />
          <Dropdown.Menu scrolling>
            {types.map((option) => (
              <Dropdown.Item
                key={option.value}
                {...option}
                onClick={() => filter(option.value)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
      <Gallery photos={images} direction={'column'} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((image) => ({
                ...image,
                srcset: image.srcSet,
                caption: image.description,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default ArtsCrafts;
