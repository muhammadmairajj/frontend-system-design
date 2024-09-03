import React from "react";

function Button({
  label,
  onClick,
  children,
  type = "button",
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  variant,
}) {
  if (children) {
    return (
      <button
        label={label}
        onClick={onClick}
        type={type}
        icon={icon}
        iconPosition={iconPosition}
        size={size}
        loading={loading}
        variant={variant}
        disabled={disabled}
      >
        {loading ? "Loading ..." : children}
      </button>
    );
  }
  return (
    <button
      label={label}
      onClick={onClick}
      type={type}
      icon={icon}
      iconPosition={iconPosition}
      size={size}
      loading={loading}
      variant={variant}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
