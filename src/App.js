import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import JobLogPage from './pages/JobLogPage.js';
import JobCreatePage from './pages/JobCreatePage.js';
import JobEditPage from './pages/JobEditPage.js';
import TopicsPage from './pages/TopicsPage.js';

import { GrPersonalComputer } from 'react-icons/gr';

import './App.css';

function App() {
  const [job, setJob] = useState([])
  return (
    <>

      <BrowserRouter>

        <header className='App-header'>

          <h1><i className='App-logo' alt='Laptop'>  <GrPersonalComputer />
          </i> Luis Sosa - Showcase Site
          </h1>
        </header>

        <Nav />

        <main>

          <section>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/jobLog' element={<JobLogPage setJob={setJob} />} />
              <Route path='/add-job' element={<JobCreatePage />} />
              <Route path='/edit-job' element={<JobEditPage job={job} />} />
              <Route path='/topics' element={<TopicsPage />} />
              <Route path='/gallery' element={<GalleryPage />} />
              <Route path='/staff' element={<StaffPage />} />
              <Route path="/order" element={<OrderPage products={products} />} />
            </Routes>
          </ section>

        </main>

        <footer>
          <p>&copy; 2023 Luis Sosa</p>
        </footer>

      </BrowserRouter>

    </>
  );
}

export default App;