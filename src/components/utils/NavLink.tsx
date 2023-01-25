import { useRouter } from "next/router";
import Link from "next/link";
import { FC, HTMLAttributeAnchorTarget } from "react";

interface NavLinkProps {
  href: string;
  activeclassname: string;
  exact: boolean;
  role: string;
  target: HTMLAttributeAnchorTarget;
  ariaLabel: string;
}

const NavLink: FC<
  NavLinkProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = ({ href, exact, children, role, target, ariaLabel, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active-route";
  }

  return (
    <Link href={href} role={role} target={target}>
      <a aria-label={ariaLabel} {...props}>
        {children}
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
