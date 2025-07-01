import React from "react";
import * as HiIcon from "react-icons/hi";

// This component is a placeholder for dynamically rendering icons based on the iconName prop.
interface DynamicIconProps {
  iconName: string | undefined;
}

const DynamicIcon = ({ iconName }: DynamicIconProps) => {
  const IconComponent = HiIcon[iconName as keyof typeof HiIcon];
  return IconComponent ? (
    <IconComponent
      className="size-6 text-navi group-hover:text-navi-hover"
      aria-hidden="true"
    />
  ) : null;
};

export default DynamicIcon;
