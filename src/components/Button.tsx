import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface buttonProps {
  buttonType: "submit" | "reset" | "button";
  url?: string | null;
  title: string;
  otherStyles?: string;
  icon?: IconType;
}
const Button: React.FC<buttonProps> = ({
  buttonType,
  url,
  title,
  otherStyles,
  icon: Icon,
}) => {
  return (
    <button
      type={buttonType}
      className={` px-3 sm:px-3 py-1 sm:py-2 rounded-lg ${otherStyles}`}
    >
      {!url ? (
        <span className="flex items-center gap-3 text-lg font-sans">
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
