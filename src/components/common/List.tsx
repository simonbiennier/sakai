import { FC, ReactNode } from "react";

export interface ListItem {
  label?: string | ReactNode;
  content?: string | ReactNode;
  end?: ReactNode;
}

interface ListProps {
  data: ListItem[];
}

const List: FC<ListProps> = (props) => {
  return (
    <ul className="list-none p-0 m-0">
      {props.data.map((item, idx) => (
        <li
          key={idx}
          className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div className="text-500 w-6 md:w-2 font-medium">{item.label}</div>
          <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {item.content}
          </div>
          <div className="w-6 md:w-2 flex justify-content-end">{item.end}</div>
        </li>
      ))}
    </ul>
  );
};

export default List;
