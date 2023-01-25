import { useRouter } from "next/router";

export const useGetField = (field: string) => {
  const router = useRouter();
  return router.query[field] as string;
};
