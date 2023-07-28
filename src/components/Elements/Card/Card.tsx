type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className="m-4 rounded-lg border border-gray-200 p-6 shadow">{children}</div>;
};
