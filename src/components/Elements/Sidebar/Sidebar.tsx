import { MenuGroup } from './MenuGroup';
import { MenuLink } from './MenuLink';

export const Sidebar = () => {
  return (
    <>
      <div className="mx-4 my-4">
        <MenuGroup name="Comment">
          <MenuLink to="/comments">List</MenuLink>
          <MenuLink to="/comments/add">Add</MenuLink>
        </MenuGroup>
      </div>
    </>
  );
};
