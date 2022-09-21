import React, {useState} from 'react';
import {Layout} from '../components/shared';
import '../styles/globals.css';
import { AboutIcon } from '../components/shared';
import { ToastContainer } from 'react-toastify';
import { Circles } from  'react-loader-spinner';

function MyApp({ Component, pageProps }) {
  const [ loader, setLoader ] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [allProductList, setAllProductList] = useState([]);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
  };
  return <>
    <Layout open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen} setLoader={setLoader} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}>
      <Component {...pageProps} open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen} loader={loader} setLoader={setLoader} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} allProductList={allProductList} setAllProductList={setAllProductList}/>
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
