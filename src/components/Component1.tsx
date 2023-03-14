import { motion } from "framer-motion";
import { useState } from "react";
import useDebounce from "../helpers/useDebounce";
import { useSearchIssuesQuery } from "../helpers/useSearchIssuesQuery";

function Component1() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const searchDeps = useSearchIssuesQuery(debouncedSearch);

  return (
    <>
      <div>
        <label>
          Search:
          <input
            value={search}
            type="text"
            name="search"
            placeholder="search"
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <motion.h2
        style={{ display: "flex", gap: "12px" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        Results : {searchDeps?.data?.count}
      </motion.h2>
      {searchDeps.fetchStatus === "idle" &&
      searchDeps.isLoading ? null : searchDeps.isLoading ? (  
        <p>Loading....</p>
      ) : (
        <ul>
          {searchDeps?.data?.items.map((res) => (
            <li>{res.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Component1;
