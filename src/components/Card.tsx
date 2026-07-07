import type { ReactNode } from "react";

export default function Card({
  icon,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-surface border border-white/10 rounded-lg p-6">
      {icon && (
        <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
      <div className="text-gray-medium text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
