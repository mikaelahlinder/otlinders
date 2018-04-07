import React from 'react'

export default ({ src, ...rest }) => {
  const _src = require(`./img/${src}`)
  return <img src={_src} {...rest} alt="" />
}
