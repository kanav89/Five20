"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function MarketplacePage() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");
  // Projects data
  const projects = [
    {
      title: "Lettuce",
      price: "$10",
      quantity: "10 lbs",
      bestBy: "2022-12-12",
      supplier: "Microsoft, Grade-A Farms",
      ETA: "20 min",
      link: "https://stripe.com",
      imageLink:
        "https://foodprint.org/wp-content/uploads/2018/10/AdobeStock_195401764.jpeg",
    },
    // Add other projects here
    {
      title: "Potatoes",
      price: "$10",
      quantity: "10 lbs",
      bestBy: "2022-12-12",
      supplier: "Microsoft, Grade-A Farms",
      ETA: "5 min",
      link: "https://stripe.com",
      imageLink: "https://thumbs.dreamstime.com/b/bags-potatoes-20594198.jpg",
    },
    {
      title: "Tomatoes",
      price: "$10",
      quantity: "10 lbs",
      bestBy: "2022-12-12",
      supplier: "Microsoft, Grade-A Farms",
      ETA: "5 min",
      link: "https://stripe.com",
      imageLink:
        "https://extension.umaine.edu/publications/wp-content/uploads/sites/52/2019/06/tomatoes-for-sale.jpg",
    },
    {
      title: "Onions",
      price: "$10",
      quantity: "10 lbs",
      bestBy: "2022-12-12",
      supplier: "Microsoft, Grade-A Farms",
      ETA: "5 min",
      link: "https://stripe.com",
      imageLink: "https://freerangestock.com/sample/2853/onions.jpg",
    },
    {
      title: "Cheese",
      price: "$10",
      quantity: "10 lbs",
      bestBy: "2022-12-12",
      supplier: "Microsoft, Grade-A Farms",
      ETA: "5 min",
      link: "https://stripe.com",
      imageLink:
        "https://modernfarmer.com/wp-content/uploads/2022/05/shutterstock_636694300.jpg",
    },
  ];

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col items-center min-h-screen p-40">
      <h1>Welcome back Joe!</h1>
      <p>Based on our predictive model </p>
      <div className="search-div w-[200px]">
        <input
          type="text"
          placeholder="Search..."
          className="mb-4 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProjects.length > 0 ? (
        <HoverEffect items={filteredProjects} />
      ) : (
        <div>No ingridients found.</div>
      )}
    </div>
  );
}
