import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./button";
import toast, { Toaster } from "react-hot-toast";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    price: string;
    quantity: string;
    bestBy: string;
    supplier: string;
    ETA: string;

    imageLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            image={item.imageLink}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            bestBy={item.bestBy}
            supplier={item.supplier}
            ETA={item.ETA}
          />
        </>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  image,
  title,
  price,
  quantity,
  bestBy,
  supplier,
  ETA,
}: {
  className?: string;
  image?: string;
  title: string;
  price: string;
  quantity: string;
  bestBy: string;
  supplier: string;
  ETA: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full object-cover h-40"
        />
      )}
      <div className="relative z-50 p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription
          price={price}
          quantity={quantity}
          bestBy={bestBy}
          supplier={supplier}
          ETA={ETA}
        />
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  price,
  quantity,
  bestBy,
  supplier,
  ETA,
}: {
  price: string;
  quantity: string;
  bestBy: string;
  supplier: string;
  ETA: string;
}) => {
  const notify = () => toast.success("Added your items to cart.");
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
              textSizeAdjust: "auto",
              fontSize: "15px",
              minBlockSize: "70px",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
        containerStyle={{
          top: 110,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <p className="text-zinc-700 text-sm mt-2">Price: {price}</p>
      <p className="text-zinc-700 text-sm">Quantity: {quantity}</p>
      <p className="text-zinc-700 text-sm">Best By: {bestBy}</p>
      <p className="text-zinc-700 text-sm">Supplier: {supplier}</p>
      <p className="text-zinc-700 text-sm mb-2">ETA: {ETA}</p>
      <Button onClick={() => notify()}>Add to Cart</Button>
    </>
  );
};
