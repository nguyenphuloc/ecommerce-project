import { forwardRef } from 'react';
import './style.css';

interface IInputState {
  id?: string;
  type?: string;
  placeholder?: string;
  step?: string;
  required?: boolean;
  defaultValue?: string | number;
}

interface ICheckboxState {
  id?: string;
  checked?: boolean;
}

interface IInputProps {
  clsName?: string;
  label?: string;
  input?: IInputState;
  checkbox?: ICheckboxState;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className="input-component">
      <label htmlFor={props.input?.id}>
        {props.input?.required && <span>*</span>}
        {props.label}
      </label>
      <input
        className={props.clsName}
        id={props.input?.id}
        min={props.min}
        max={props.max}
        ref={ref}
        {...props.input}
        disabled={props.disabled}
      />
    </div>
  );
});

export default Input;
