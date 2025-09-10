import React from "react";

const Button = ({ children, variant = "primary", size = "medium", disabled = false, className = "", ...props }) => {
  // Base styles - clean and professional
  const baseStyles =
    "font-medium transition-colors duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0e1717] disabled:opacity-50 disabled:cursor-not-allowed font-[var(--font-body)] cursor-pointer";

  // Size variants with improved spacing
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-2 text-base font-semibold",
    large: "px-6 py-2 text-medium font-semibold",
  };

  // Color variants - clean and modern
  const variantStyles = {
    // Background variants
    primary: "bg-[#16a34a] text-white hover:bg-[#15803d] focus:ring-[#16a34a]",
    secondary: "bg-white text-[#0e1717] hover:bg-gray-100 focus:ring-white",
    dark: "bg-[#0d0806] text-white hover:bg-[#374151] focus:ring-[#374151]",

    // Border variants - outline styles
    primaryOutline: "bg-transparent text-[#16a34a] border-2 border-[#16a34a] hover:bg-[#16a34a] hover:text-white focus:ring-[#16a34a]",
    secondaryOutline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0e1717] focus:ring-white",
    darkOutline: "bg-transparent text-[#374151] border-2 border-[#374151] hover:bg-[#374151] hover:text-white focus:ring-[#374151]",
  };

  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={buttonStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
