import React from 'react'
import {  Route } from "react-router-dom";
import Layout from './Components/Layout';
const DashboardRoute = ({ component: Component }) => {
  return (
    <Route
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
    )}
  />
  )
}

export default DashboardRoute
