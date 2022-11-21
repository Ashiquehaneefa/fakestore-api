import { useState, useEffect } from "react";
import Products from "./components/Products/Products";
import SearchBar from "./components/SearchBar/SearchBar";
import Drawer from "./components/Drawer/Drawer";
import LoadingComponent from "./components/LoadingComponent";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState([]);

  const [input, setInput] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [priceValue, setPriceValue] = useState([0, 1000]);

  const [sortValue, setSortValue] = useState("");

  const [category, setCategory] = useState("");

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getData = () => {
      fetch(apiUrl)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Can't fetch api data");
          }
          return res.json();
        })
        .then(
          (result) => {
            setData(result);

            setLoading(false);
            console.log(result);
          },
          (err) => {
            setError(err);
            setLoading(true);
            alert(err.message);
            console.log(err.message);
          }
        );
    };
    getData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSort = (event) => {
    setSortValue(event.target.value);
  };

  const resetFilters = () => {
    setPriceValue([0, 1000]);
    setCategory("");
    setSortValue("");
    setInput("");
  };

  const sortPrice = (sortValue, data) => {
    if (sortValue === "lowtohigh" || sortValue === "hightolow") {
      data.sort((a, b) => {
        const diff = a.price - b.price;
        if (diff === 0) {
          return 0;
        }
        const sign = Math.abs(diff) / diff;
        return sortValue === "lowtohigh" ? sign : -sign;
      });
    } else {
      data.sort((a, b) => {
        const diff = a.id - b.id;
        if (diff === 0) {
          return 0;
        }
        const sign = Math.abs(diff) / diff;
        return sortValue === "" ? sign : 0;
      });
    }
  };

  return loading ? (
    <LoadingComponent />
  ) : (
    <div>
      <Navbar />
      <div className="container">
        <SearchBar handleChange={inputHandler} input={input} />
        <Drawer
          resetFilters={resetFilters}
          handlePriceChange={handlePriceChange}
          priceValue={priceValue}
          category={category}
          handleCategory={handleCategory}
          sortValue={sortValue}
          handleSort={handleSort}
        />
        <Products
          sortPrice={sortPrice}
          sortValue={sortValue}
          priceValue={priceValue}
          data={currentPosts}
          input={input}
          handleSlider={handlePriceChange}
          category={category}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
