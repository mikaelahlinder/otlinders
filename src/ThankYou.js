import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Gallery from 'react-photo-gallery'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import Image from './Image'
import Images from './data'

const Video = styled.div`
  width: 100vw;
  height: calc(100vw * 0.41);
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default trackWindowScroll(({ scrollPosition }) => (
  <Fragment>
    <Video>
      <iframe
        src='https://player.vimeo.com/video/316364942?autoplay=1&loop=1'
        width='100%'
        height='100%'
        title='Sarah & Micke'
        frameBorder='0'
        allow='autoplay; fullscreen'
      />
    </Video>
    <Gallery
      photos={Images}
      direction='column'
      renderImage={({ photo, margin, top, left }) => (
        <LazyLoadImage
          {...photo}
          threshold={400}
          scrollPosition={scrollPosition}
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
))
