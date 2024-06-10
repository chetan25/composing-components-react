import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        Simple examples to show how to compose components in different ways
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/basic">Basic Composition</NavLink>
          </li>
          <li>
            <NavLink to="/props">Props based Composition</NavLink>
          </li>
          <li>
            <NavLink to="/children">Children based Composition</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
