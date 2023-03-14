import { useQuery } from "@tanstack/react-query";
import { Issues } from "./useIssuesQuery";
import { delay } from "./utils";

type SearchDeps = {
  count: number;
  items: Issues[];
};

export const useSearchIssuesQuery = (search: string) => {
  const query = useQuery({
    queryKey: ["issues", "search", search],
    queryFn: (): Promise<SearchDeps> =>
      fetch(
        `https://ui.dev/api/courses/react-query/search/issues?q=${search}`
      ).then((res) => res.json()),
    enabled: !!search,
  });
  return query;
};
