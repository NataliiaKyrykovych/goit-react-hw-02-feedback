import styled from 'styled-components';

const stylesConfig = {
  good: {
    default: {
      background: 'lightgray',
      color: 'black',
      border: '1px solid lightgray',
    },
    hover: {
      background: 'green',
      color: 'white',
      border: '1px solid lightgreen',
    },
  },
  neutral: {
    default: {
      background: 'lightgray',
      color: 'black',
      border: '1px solid lightgray',
    },
    hover: {
      background: 'yellow',
      color: 'black',
      border: '1px solid lightyellow',
    },
  },
  bad: {
    default: {
      background: 'lightgray',
      color: 'black',
      border: '1px solid lightgray',
    },
    hover: {
      background: 'red',
      color: 'white',
      border: '1px solid lightcoral',
    },
  },
};

export const OptionBtn = styled.button`
  background-color: ${props =>
    stylesConfig[props.option]?.default.background || 'gray'};

  color: ${props => stylesConfig[props.option]?.default.color || 'black'};
  border: ${props =>
    stylesConfig[props.option]?.default.border || '2px solid gray'};

  &:hover {
    background-color: ${props =>
      stylesConfig[props.option]?.hover.background || 'darkgray'};
    color: ${props => stylesConfig[props.option]?.hover.color || 'white'};
    border: ${props =>
      stylesConfig[props.option]?.hover.border || '2px solid gray'};
  }

  margin-right: 20px;
  width: 75px;
  height: 30px;
`;