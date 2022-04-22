import React from "react";

import SwapCard from "../../Components/Swap/SwapCard";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Swap = () => {
  const auth = useSelector((state) => state.auth);
  const wallets = useSelector((state) => state.wallet);
  console.log(wallets);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return <SwapCard />;
};

export default Swap;
