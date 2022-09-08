import React, {useState} from 'react';
import {Layout} from '../components/shared';
import '../styles/globals.css';
import { AboutIcon } from '../components/shared';
import { ToastContainer } from 'react-toastify';
import { Circles } from  'react-loader-spinner';

function MyApp({ Component, pageProps }) {
  const [ loader, setLoader ] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
  };
  return <>
    <Layout open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen} setLoader={setLoader}>
      <Component {...pageProps} open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen} loader={loader} setLoader={setLoader} />
      <AboutIcon setShowModal={setShowModal} />
      <ToastContainer />
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="centered"
        visible={loader}
      />
    </Layout>
  </>
}

export default MyApp
