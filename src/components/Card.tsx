interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div 
      className={`glass p-6 rounded-xl ${hoverable ? 'hover:border-purple-primary/50 transition-all group' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-bold mb-3 text-purple-light ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-gray-medium mb-4 ${className}`}>
      {children}
    </p>
  );
}
