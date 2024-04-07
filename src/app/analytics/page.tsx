import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
const AnalyticsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="stats-div items-center w-[50%] text-center">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
