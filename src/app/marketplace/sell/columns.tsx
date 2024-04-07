"use client";
import toast, { Toaster } from "react-hot-toast";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, BadgeEuro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge, BadgeDelta } from "@tremor/react";
import { CheckIcon } from "lucide-react";
import { XIcon } from "lucide-react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type FoodItem = {
  ingredient: string;
  quantity: number;
  unit: string;
  shelfLife: number | null;
  perishable: boolean;
};

export const columns: ColumnDef<FoodItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ingredient",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ingredient
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // Assume getValue now returns a string that we want to capitalize
      const text: string = row.getValue("ingredient"); // Replace yourTextColumnName with the actual column name

      // Function to capitalize the first letter of each word in a string
      const capitalizeWords = (str: string) =>
        str
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");

      // Use the capitalizeWords function on the text string
      const capitalizedText = capitalizeWords(text);

      return <div className="text-center font-normal">{capitalizedText}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "shelfLife",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Shelf Life
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // Assume getValue now returns a string that we want to capitalize
      const text: string = row.getValue("shelfLife"); // Replace yourTextColumnName with the actual column name

      // Function to capitalize the first letter of each word in a string
      const displayValueFunc = (str: any) => {
        if (str != null) {
          return str;
        } else {
          return "N/A";
        }
      };

      // Use the capitalizeWords function on the text string
      const displayValue = displayValueFunc(text);

      return <div className="text-center font-normal">{displayValue}</div>;
    },
  },
  {
    accessorKey: "perishable",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Perishable
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value: boolean = row.getValue("perishable");
      return (
        <div className="text-center">
          {value ? (
            <Badge icon={CheckIcon} size={"md"}></Badge>
          ) : (
            <Badge icon={XIcon} size={"md"}></Badge>
          )}
        </div>
      );
    },
  },
];
