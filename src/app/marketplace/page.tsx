"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function MarketplacePage() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");
  // Projects data
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    // Add other projects here
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-row items-center min-h-screen mt-30">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        className="mb-4 p-2 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display filtered projects */}
      {filteredProjects.length > 0 ? (
        <HoverEffect items={filteredProjects} />
      ) : (
        <div>No projects found.</div>
      )}
    </div>
  );
}
