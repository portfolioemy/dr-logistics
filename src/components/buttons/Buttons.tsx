import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  label: string;
  variant?: "outlined" | "text" | "contained";
  className?: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  className,
  icon,
  onClick,
  href,
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
      variant={variant}
      sx={{
        padding: "0.8rem 2rem",
        borderRadius: "5rem",
        backgroundColor: className?.includes("cta-blue") ? "#1B19E6" : "rgba(0, 0, 0, 0.5)",
        borderColor: className?.includes("cta-blue") ? "#1B19E6" : "#fff",
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
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderColor: "#fff",
          transform: "scale(1.05)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      {buttonContent}
    </Button>
  );
};
