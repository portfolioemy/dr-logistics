import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  label: string;
  className?: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  colorVariant?: "default" | "secondary";
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  className,
  icon,
  onClick,
  href,
  colorVariant = "default",
}) => {
  const buttonContent = (
    <>
      {icon && (
        <Image
          src={icon}
          alt="button-icon"
          className="w-4 h-4 sm:w-5 sm:h-5"
          width={100}
          height={100}
        />
      )}
      {label}
    </>
  );

  return (
    <Button
      component={href ? Link : "button"}
      href={href}
      onClick={onClick}
      sx={buttonStyles(colorVariant)}
      className={className}
    >
      {buttonContent}
    </Button>
  );
};

const buttonStyles = (colorVariant: "default" | "secondary") => ({
  padding: "0.8rem 2rem",
  borderRadius: "5rem",
  backgroundColor: colorVariant === "secondary" ? "#1B19E6" : "rgba(0, 0, 0, 0.5)",
  border: `1px solid ${colorVariant === "secondary" ? "#1B19E6" : "#fff"}`,
  color: "#fff",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  fontSize: "1.2rem",
  gap: "1rem",
  fontFamily: "Inter",
  transition: "all 0.3s ease-in-out",
  transform: "scale(1)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colorVariant === "secondary" ? "rgba(0, 0, 0, 0.7)" : "#1B19E6",
    borderColor: "#fff",
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  },
});
