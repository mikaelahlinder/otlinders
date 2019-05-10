import React from 'react'
import Gallery from 'react-photo-gallery'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Images from './data'

export default () => (
  <Gallery
    photos={Images}
    direction='column'
    renderImage={({ photo, margin, top, left }) => (
      <LazyLoadImage
        {...photo}
        effect='opacity'
        style={{
          display: 'block',
          position: 'absolute',
          left,
          top,
          margin
        }}
      />
    )}
  />
)
