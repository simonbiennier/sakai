import { Accordion, AccordionTab } from "primereact/accordion";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";
import List, { ListItem } from "../common/List";

export const SampleSkeleton: FC = () => {
  const skeletonList: ListItem[] = [
    {
      label: <Skeleton width="5rem" height="1.25rem" />,
      content: (
        <div className="flex">
          <Skeleton
            width="4rem"
            height="2rem"
            className="mr-2"
            borderRadius="25px"
          />
          <Skeleton
            width="4rem"
            height="2rem"
            className="mr-2"
            borderRadius="25px"
          />
          <Skeleton
            width="4rem"
            height="2rem"
            className="mr-2"
            borderRadius="25px"
          />
        </div>
      ),
    },
    {
      label: <Skeleton width="5rem" height="1.25rem" />,
      content: <Skeleton width="10rem" height="1.25rem" />,
    },
    {
      label: <Skeleton width="5rem" height="1.25rem" />,
      content: <Skeleton width="10rem" height="1.25rem" />,
    },
  ];

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <div className="flex mb-2">
            <Skeleton width="20%" height="2.5rem" />
            <div className="flex-1" />
            <Skeleton
              width="2.5rem"
              height="2.5rem"
              className="ml-4"
              borderRadius="100px"
            />
            <Skeleton
              width="2.5rem"
              height="2.5rem"
              className="ml-4"
              borderRadius="100px"
            />
          </div>
          <div className="text-500 mb-5">
            <Skeleton width="15%" height="1rem" />
          </div>

          <List data={skeletonList} />
          <Accordion className="mt-4">
            <AccordionTab
              disabled
              key="skeleton"
              header={<Skeleton width="5rem" className="ml-2" />}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};
