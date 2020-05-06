import axios from "axios";

export const fetchShow = () => {
  axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
     return res;
    })
    .catch(err => console.log("fetchShow axios err", err));
};
