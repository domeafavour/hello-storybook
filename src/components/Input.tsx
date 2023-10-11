import React from "react";

export type InputProps = {
  initialValue?: string;
  placeholder?: string;
};

export function Input({ initialValue = "", placeholder }: InputProps) {
  return (
    <input
      defaultValue={initialValue}
      placeholder={placeholder}
      style={{ borderRadius: 4, border: "1px solid #efefef", padding: 8 }}
    />
  );
}
