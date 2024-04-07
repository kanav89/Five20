"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/ui/images-slider";

const donate = () => {
  const images = [
    "https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696786914221-81b1618bc50f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [error, setError] = useState('');
  const [data, setData] = useState<any>('');
  const [zipcodes, setZipcodes] = useState<string[]>([]);
  const [zipcode, setZipcode] = useState('');
  const [isZipcodeValid, setIsZipcodeValid] = useState<boolean | null>(null);
  const [agencyName, setAgencyName] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoodPantryData = async () => {
      try {
        
        const response = await fetch('https://data.mo.gov/resource/eb3y-vtsa.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
        
        // Extract zip codes from fetched data
        const extractedZipcodes = data.map((item: any) => {
          const humanAddress = JSON.parse(item?.location?.human_address || '{}');
          return humanAddress.zip || '';
        });
        setZipcodes(extractedZipcodes.filter((zipcode: string) => zipcode)); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };
    
    fetchFoodPantryData();
  }, []);

  useEffect(() => {
    setIsZipcodeValid(zipcodes.includes(zipcode));
  }, [zipcode, zipcodes]);

  const handleZipcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  useEffect(() => {
    if (isZipcodeValid && data.length > 0) {
      const entry = data.find((item: any) => {
        const humanAddress = JSON.parse(item?.location?.human_address || '{}');
        return humanAddress.zip === zipcode;
      });
      if (entry) {
        setAgencyName(entry.agency_name);
      } else {
        setAgencyName(null);
      }
    } else {
      setAgencyName(null);
    }
  }, [isZipcodeValid, zipcode, data]);

  const defaultImage = "https://your-default-image-url.com/default_image.jpg"; // Provide your default image URL here

  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col items-center min-h-screen p-40">

      <div className="search-div w-full items-start">
        <input
          type="text"
          placeholder={`Search for agency...`}
          className="mb-4 p-2 border rounded ml-4 w-full"
          value={zipcode}
          onChange={handleZipcodeChange}
        />
      </div>
      
      {agencyName === null ? (
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Food Banks Near you
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Visit their website →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      ) : (
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {agencyName}
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Visit their website →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      )}

    </div>
  );
};

export default donate;
