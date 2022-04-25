import { ToastService } from './services/ToastService';
import { element } from './constants';
import { useState } from 'react';
import { ToastContainer } from './container/ToastContainer/ToastContainer';


const service = ToastService.getInstance();
const  obj = {
  name:'qww',
  fullname:'1222'
}

function App() {
   
  const handleClick = () => {
    service.createToast(obj)
  }

  return (
    <>
    <button onClick={handleClick} >
      создать тост
    </button>
    </>
  );
}

export default App;
