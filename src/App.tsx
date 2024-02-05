import Landing from "./pages/Landing";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setTemp } from "./redux/temperatureReducer";
import axios from "axios";
import { FunctionComponent, useEffect } from "react";

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("http://dushnila.gooddelo.com/data").then((res) => res.data),
    refetchInterval: 60000,
  });

  useEffect(() => {
    if (data) dispatch(setTemp(data));
  }, [data]);

  return (
    <>
      <Landing />
    </>
  );
};

export default App;
