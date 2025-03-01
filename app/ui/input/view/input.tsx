import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   placeholder?: string;
   type?: string;
   value?: string;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
   onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
   disabled?: boolean;
   required?: boolean;
   name?: string;
   'aria-label'?: string;
}

const Input: FC<InputProps> = ({
   placeholder,
   type = 'text',
   value,
   onChange,
   onFocus,
   onBlur,
   disabled,
   required,
   name,
   'aria-label': ariaLabel,
   ...props
}) => {
   return (
      <input
         className="rounded-[50px] border-[3px] border-black py-[12px] px-[14px] max-w-[711px] w-full bg-white outline-0 placeholder:font-semibold text-[#7D8087]"
         placeholder={placeholder}
         type={type}
         value={value}
         onChange={onChange}
         onFocus={onFocus}
         onBlur={onBlur}
         disabled={disabled}
         required={required}
         name={name}
         aria-label={ariaLabel}
         {...props}
      />
   );
};

export default Input;
