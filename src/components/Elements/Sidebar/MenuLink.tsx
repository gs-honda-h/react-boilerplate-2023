import { Link, To } from 'react-router-dom';

type MenuLinkProps = {
  to: To;
  children: React.ReactNode;
};

export const MenuLink = ({ children, to }: MenuLinkProps) => {
  return (
    <div className="py-1.5 pl-4 text-gray-400">
      <Link to={to}>{children}</Link>
    </div>
  );
};
