import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface IconWrapperProps {
  name: string;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ name, size = 24, className = '' }) => {
  // Convert the name to proper case for Lucide icons (e.g., "github" -> "Github")
  const iconName = name.charAt(0).toUpperCase() + name.slice(1) as IconName;
  const Icon = LucideIcons[iconName];
  
  if (!Icon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }
  
  return <Icon size={size} className={className} />;
};

export default IconWrapper;