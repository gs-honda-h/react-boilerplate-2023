type MenuGroupProps = {
  name: string;
  children: React.ReactNode;
};

export const MenuGroup = ({ children, name }: MenuGroupProps) => {
  return (
    <div>
      <div className="mb-2 font-bold">{name}</div>
      <div>{children}</div>
    </div>
  );
};
