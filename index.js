const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "e9a5c027",
      //   s: "avengers",
      s: searchTerm,
    },
  });

  return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async(event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
