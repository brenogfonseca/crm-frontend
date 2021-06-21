import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default function Breadcrumbs({ page }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}