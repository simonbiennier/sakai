import { Fragment } from "react";
import Link from "next/link";
import { MenuItem } from "primereact/menuitem";
import { FC } from "react";

interface PathProps {
  root?: MenuItem;
  data?: MenuItem[];
}

const Path: FC<PathProps> = (props) => {
  const { root, data } = props;

  if (!root) return null;

  return (
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3 ml-4">
      <li key="root">
        {root.url ? (
          <Link href={root.url}>
            <a className="text-500 no-underline line-height-3 cursor-pointer">
              {root.label}
            </a>
          </Link>
        ) : (
          <span className="text-500 line-height-3 cursor-pointer">
            {root.label}
          </span>
        )}
      </li>
      {data &&
        data.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <li className="px-2">
                <i className="pi pi-angle-right text-500 line-height-3" />
              </li>
              <li>
                <span
                  className={`${
                    idx === data.length - 1 ? "text-900" : "text-500"
                  } line-height-3`}
                >
                  {item.label}
                </span>
              </li>
            </Fragment>
          );
        })}
    </ul>
  );
};

export default Path;
