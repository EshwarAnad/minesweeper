import  React, { FC } from 'react';
import { CellState, CellValue } from '../types';
import "./Button.scss"

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

const Button: FC<ButtonProps> = ({ row, col, state, value }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.pressed) {
      if (value === CellValue.bomb) {
       return <span role="img" aria-label="bomb">💣</span>
      } else if (value === CellValue.none) {
        return null;
      }
      return value;

    } else if (state === CellState.flagged) {
      return <span role="img" aria-label="flag">🚩</span>
    } 

    return null; 
  }

    return (
      <div className={`Button ${state === CellState.pressed? "pressed" : ""} value-${value}`}>
        {renderContent()}
      </div>
    );
} 

export default Button;