"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
