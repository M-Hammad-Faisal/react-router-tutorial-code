/* eslint-disable no-unused-vars */
import { useLocation, NavLink, useSearchParams, Link } from "react-router-dom";

export default function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}

export function BrandLink({ brand, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("brand").includes(brand);
    return (
      <Link
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?brand=${brand}`}
        {...props}
      />
    );
  }