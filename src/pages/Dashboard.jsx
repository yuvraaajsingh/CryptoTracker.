import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabComponent from "../components/Dashboard/TabComponent/TabComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import PaginationDashboard from "../components/Dashboard/PaginationDashboard/PaginationDashboard";
import Loader from "../components/Common/Loader/Loader";
import BottomtoTop from "../components/Common/BottomtoTop/BottomtoTop";
import get100coin from "../function/get100coin";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
    get100coins();
  }, []);

  async function get100coins() {
    const getCoins = await get100coin();
    if (getCoins) {
      setCoins(getCoins);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          {filteredCoins.length === 0 ? (
            <p style={{ textAlign: "center", margin: "3rem" }}>
              No Crypto Currencies Found
            </p>
          ) : (
            <>
              <TabComponent coins={paginatedCoins} />
              {search ? (
                ""
              ) : (
                <PaginationDashboard
                  page={page}
                  handlePageChange={(_, value) => setPage(value)}
                />
              )}
            </>
          )}
          <BottomtoTop />
        </div>
      )}
    </>
  );
};

export default Dashboard;
