"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BarLoader from "react-spinners/BarLoader";
import { Spotlight } from "@/components/ui/spotlight";
const AnalyticsPage = () => {
  const [llmOutput, setLlmOutput] = useState(""); // Removed any type since it's not valid here.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/analytics-report", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setLlmOutput(data.answer);
        setLoading(false);
      } catch (error) {
        // Catch block for any errors in the try block
        setLoading(false);
        setLlmOutput("An unexpected error occurred");
      }
    };

    fetchData();
  }, []); // Correctly closed the useEffect hook

  // Define words to show in TextGenerateEffect (can be static or dynamic)
  const words = "Fetching your customized analytics report...";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="stats-div items-center w-[50%] text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="black"
        />
        <h1 className="font-bold text-8xl">Analytics</h1>
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-10">
            <TextGenerateEffect words={words} />
            <BarLoader />
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center space-y-10"
            style={{ whiteSpace: "pre-line" }}
          >
            No data found. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
