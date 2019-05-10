import React, { Fragment } from 'react'
import Gallery from 'react-photo-gallery'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Image from './Image'
import Images from './data'

export default () => (
  <Fragment>
    <Gallery
      photos={Images}
      direction='column'
      renderImage={({ photo, margin, top, left }) => (
        <LazyLoadImage
          {...photo}
          src={'https://raw.githubusercontent.com/mikaelahlinder/otlinders/master/public' + photo.src}
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
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Thank you</h2>
      <Image
        src='heart.png'
        style={{
          marginTop: '100px',
          height: '20px'
        }}
      />
    </div>
  </Fragment>
)