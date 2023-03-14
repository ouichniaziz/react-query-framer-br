import { useQuery } from "@tanstack/react-query";
import { delay } from "./utils";

type Label = {
  color: string;
  id: string;
  name: string;
};

const fetchLabels = async (): Promise<Label[]> => {
  const res = await fetch("https://ui.dev/api/courses/react-query/labels");
  await delay(3000);
  return res.json();
};

export default function useLabelsQuery() {
  const query = useQuery({
    queryKey: ["labels"],
    queryFn: fetchLabels,
  });
  return query;
}
