import React, { useEffect } from 'react';
import { Message } from '../Message';
import { ToastWrapper } from './style';
import { CloseButton } from '../CloseButton';
import { Icon } from '../Icon';
import { ProgressLabel } from '../ProgressLabel';
import { ContentWrapper } from './style';
import { color, type, time } from '../../constants';

const div = document.createElement('div');
const modalRoot = document.getElementById('portal')

export function Toast({bg, type, msg, time}) {
  modalRoot.appendChild(div);
  return (
    React.createPortal(
    <ToastWrapper bg={bg}>
      <CloseButton />
      <ContentWrapper>
      <Icon img={type}/>
      <Message msg={msg}/>
      </ContentWrapper>
      <ProgressLabel time={time} />
    </ToastWrapper>, 
    div)
  );
}

Toast.defaultProps = {
  bg: color[0],
  img: type[0],
  msg: 'info toast example',
  time: time[0]
}