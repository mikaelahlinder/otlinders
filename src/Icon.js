import React from 'react'

export default ({ icon, prefix = 'fa', spin = false, ...rest }) => (
  <i className={`${prefix} fa-${icon} ${spin && 'fa-spin'}`} {...rest} />
)
