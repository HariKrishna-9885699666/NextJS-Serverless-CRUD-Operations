import React, {useState} from 'react';
import {Layout} from '../components/shared';
import '../styles/globals.css';
import { AboutIcon } from '../components/shared';

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
  };
  return <>
    <Layout open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen}>
      <Component {...pageProps} open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen}/>
      <AboutIcon setShowModal={setShowModal} />
    </Layout>
  </>
}

export default MyApp
