export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="font-display font-bold text-3xl tracking-tight">
        <span className="text-primary">hub</span>
        <span className="text-gray-logo">Tech</span>
      </span>
      <span className="text-gray-medium text-xs tracking-[2.5px] mt-1">
        TECNOLOGIA
      </span>
    </div>
  );
}
