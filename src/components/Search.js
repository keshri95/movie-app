import { useGlobalContext } from "./context";

const Search = () => {
  const { query,setQuery, isError } = useGlobalContext();

  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="my-3">
            <input
              className="form-control"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div>
          <p>{isError.show && isError.msg}</p>
        </div>
      </div>
    </>
  );
};

export default Search;
