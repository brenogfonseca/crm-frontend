import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'

const isAuth = true
export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={() =>
      isAuth ? <DefaultLayout> {children} </DefaultLayout> : <Redirect to='/' />
    } />
  )
}
