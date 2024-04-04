import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Timeline from './Components/Pages/Timeline/Timeline';
import Testimonial from './Components/Pages/Testimonial/Testimonial';
import Contact from './Components/Pages/Contact/Contact';
import Skills from './Components/Pages/Skills/Skills';
import Projects from './Components/Pages/Projects/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/testimonial",
        element: <Testimonial></Testimonial>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
