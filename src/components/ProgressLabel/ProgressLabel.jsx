import React, {memo} from 'react';
import { Progress } from './style';

export const ProgressLabel = memo(({time}) =>  <Progress time={time} />);
