import React from 'react'

export default ({ src, ...rest }) => <img src={require(`./img/${src}`)} {...rest} alt='' />
