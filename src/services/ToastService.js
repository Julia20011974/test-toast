import React from "react";
import { Toast } from "../components/Toast/Toast";

const modalRoot = document.getElementById('portal')

export class ToastService extends React.Component{
  static myInstance = null;

  toasts = [];
  id = 0;

  static getInstance () {
    if(ToastService.myInstance === null)
    ToastService.myInstance = new ToastService();

    return this.myInstance
  }

  getToasts(){
    return this.toasts
  }

  createToast(prop){
    this.id++;
    return <Toast/>
  }

  removeToast(){
    modalRoot.removeChild()
  }
};