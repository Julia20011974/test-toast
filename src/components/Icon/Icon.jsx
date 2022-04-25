import React from 'react';
import { Image } from './style';
import { type } from '../../constants';

import error from './error.svg';
import success from './success.svg'
import question from './question.svg'
import warning from './warning.svg'

export function Icon({ img }) {

  const getImage = ()=>{
    switch(img){
      case type[0]:
        return question;
      case type[1]:
        return success
      case type[2]:
        return warning
      case type[3]:
        return error
        default:
          return new Error('not found img')
    }
  }  

  return <Image src={getImage} />;
}
