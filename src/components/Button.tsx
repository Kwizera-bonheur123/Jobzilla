import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface buttonProps {
  buttonType: "submit" | "reset" | "button";
  url?: string | null;
  title: string | ReactNode;
  otherStyles?: string;
  icon?: IconType;
  disabled?: boolean;
}
const Button: React.FC<buttonProps> = ({
  buttonType,
  url,
  title,
  otherStyles,
  icon: Icon,
  disabled = false,
}) => {
  return (
    <button
      type={buttonType}
      disabled={disabled}
      className={` px-3 sm:px-3 py-1 sm:py-2 rounded-lg ${otherStyles}`}
    >
      {!url ? (
        <span className="flex items-center gap-1 font-sans">
          {Icon && <Icon size="18px" />}
          {title}
        </span>
      ) : (
        <Link to="/" className="flex items-center gap-3 text-lg font-sans">
          {Icon && <Icon size="18px" />}
          {title}
        </Link>
      )}
    </button>
  );
};

export default Button;
