import { useQuery } from "@tanstack/react-query";

export type Issues = {
  id: string;
  title: string;
  labels: string[];
  comments: string[];
  number: string;
  status: string;
  createdDate: string;
  createdBy: string;
  assignee: string;
  dueDate: string;
  completedDate: string | null;
};

const fetchIssues = async (index: string | null): Promise<Issues[]> => {
  const res = await fetch(
    `https://ui.dev/api/courses/react-query/issues?labels[${index}]=bug`
  );
  return res.json();
};

export default function useIssuesQuery(index: string | null) {
  const query = useQuery({
    queryKey: ["issues", index],
    queryFn: () => fetchIssues(index),
    enabled: !!index,
  });
  return query;
}
