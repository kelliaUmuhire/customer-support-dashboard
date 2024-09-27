import { useLocation, useNavigate } from "react-router-dom";

const useQueryParams = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);

  const setQueryParams = (params: Record<string, string>) => {
    Object.keys(params).forEach((key) => {
      query.set(key, params[key]);
    });
    navigate({ search: query.toString() }, { replace: true });
  };

  return { query, setQueryParams };
};

export default useQueryParams;
