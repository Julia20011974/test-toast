import styled, { keyframes } from 'styled-components';


const cout = keyframes`
0%{
  transform: rotateY(180deg);
}
100%{
  transform: rotateY(360deg);
}
`
const zoom = keyframes`
0%{
  transform:scale(0.5)  
}
100%{
  transform:scale(1) 
}
`

export const ToastWrapper = styled.div`
  background-color:${props => props.bg};
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  animation: ${zoom} 0.1s linear forwards;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding:15px 0;
`