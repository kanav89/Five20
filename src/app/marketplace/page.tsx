import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll";
import { MagicButton } from "@/components/magic-button";
import { ShoppingBag, DollarSign } from "lucide-react";
const MarketplacePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-7xl mb-10">Marketplace</h1>
      <div className="mb-10 stats-div items-center w-[50%] text-center space-x-4">
        <MagicButton>
          <Link href="/marketplace/buy">
            <div className="flex flex-row items-center">
              <ShoppingBag />
              Buy
            </div>
          </Link>
        </MagicButton>
        <MagicButton>
          <Link href="/marketplace/sell">
            <div className="flex flex-row items-center">
              <DollarSign></DollarSign>
              Sell
            </div>
          </Link>
        </MagicButton>
      </div>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    </div>
  );
};

export default MarketplacePage;
