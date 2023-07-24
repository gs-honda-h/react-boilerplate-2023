type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className="mx-4 my-4 p-6 border border-gray-200 rounded-lg shadow">{children}</div>;
};
