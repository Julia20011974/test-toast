import React, { memo } from 'react';
import { Text } from './style';

// eslint-disable-next-line no-unused-vars
export const Message = memo(( { msg } )=><Text>{msg}</Text>)