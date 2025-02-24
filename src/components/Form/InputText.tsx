import { forwardRef, LegacyRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  width?: string;
  disabled?: boolean;
  placeholder: string;
  otherStyles?: string;
  error?: FieldError | undefined;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef(
  (
    { type, width, placeholder, otherStyles, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <>
        <div className={`${width ? `${width}` : "flex-1"}`}>
          <input
            type={type}
            placeholder={placeholder}
            className={`w-full bg-blue-500/10 ${otherStyles} outline-none text-black/75`}
            {...props}
            ref={ref}
            min={0}
          />
          {error && (
            <p className="text-[0.8rem] text-red-600 text-end px-2">
              {error.message}
            </p>
          )}
        </div>
      </>
    );
  }
);

export default FormInput;
