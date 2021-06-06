import React, { useState, useEffect } from "react";
import RenderHTML from "react-render-html";

const Auction = () => {
  const [auctionPage, setAuctionPage] = useState("");

  const getAuctionPage = () => {
    setAuctionPage(
      "<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>"
    );
  };

  useEffect(() => {
    getAuctionPage();
  });

  return <>{RenderHTML(auctionPage)}</>;
};

export default Auction;
