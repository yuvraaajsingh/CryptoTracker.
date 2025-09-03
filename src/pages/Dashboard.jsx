import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabComponent from "../components/Dashboard/TabComponent/TabComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import PaginationDashboard from "../components/Dashboard/PaginationDashboard/PaginationDashboard";
import Loader from "../components/Common/Loader/Loader";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  // Filter coins
  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Paginate filtered results
  const startIndex = (page - 1) * 10;
  const paginatedCoins = filteredCoins.slice(startIndex, startIndex + 10);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      params: { vs_currency: "usd", per_page: "100" },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      {isloading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponent coins={paginatedCoins} />
          <PaginationDashboard
            page={page}
            handlePageChange={(_, value) => setPage(value)}
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
