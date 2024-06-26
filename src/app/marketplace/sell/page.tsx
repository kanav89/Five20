import { FoodItem, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<FoodItem[]> {
  // Fetch data from your API here.
  return [
    {
      ingredient: "flour",
      quantity: 79,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "tomatoes",
      quantity: 2,
      unit: "lbs",
      shelfLife: 2,
      perishable: true,
    },
    {
      ingredient: "mozzarella",
      quantity: 2,
      unit: "lbs",
      shelfLife: 15,
      perishable: true,
    },
    {
      ingredient: "basil",
      quantity: -10,
      unit: "lbs",
      shelfLife: 0,
      perishable: true,
    },
    {
      ingredient: "spaghetti",
      quantity: 22,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "pancetta",
      quantity: 11,
      unit: "lbs",
      shelfLife: 25,
      perishable: true,
    },
    {
      ingredient: "eggs",
      quantity: 82,
      unit: "count",
      shelfLife: 16,
      perishable: true,
    },
    {
      ingredient: "parmesan",
      quantity: -11,
      unit: "lbs",
      shelfLife: 55,
      perishable: true,
    },
    {
      ingredient: "lasagna noodles",
      quantity: 14,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "ground beef",
      quantity: 24,
      unit: "lbs",
      shelfLife: 3,
      perishable: true,
    },
    {
      ingredient: "tomato sauce",
      quantity: 32,
      unit: "lbs",
      shelfLife: 2,
      perishable: true,
    },
    {
      ingredient: "arborio rice",
      quantity: 6,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "mushrooms",
      quantity: 11,
      unit: "lbs",
      shelfLife: 5,
      perishable: true,
    },
    {
      ingredient: "chicken broth",
      quantity: 16,
      unit: "liters",
      shelfLife: 0,
      perishable: true,
    },
    {
      ingredient: "onion",
      quantity: 1,
      unit: "lbs",
      shelfLife: 25,
      perishable: true,
    },
    {
      ingredient: "penne",
      quantity: 17,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "vodka",
      quantity: 1.4,
      unit: "liters",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "heavy cream",
      quantity: 5,
      unit: "liters",
      shelfLife: 10,
      perishable: true,
    },
    {
      ingredient: "chicken breast",
      quantity: 28,
      unit: "lbs",
      shelfLife: 0,
      perishable: true,
    },
    {
      ingredient: "breadcrumbs",
      quantity: -2,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "mascarpone",
      quantity: 2.5,
      unit: "lbs",
      shelfLife: 9,
      perishable: true,
    },
    {
      ingredient: "espresso",
      quantity: 5,
      unit: "liters",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "ladyfingers",
      quantity: 150,
      unit: "count",
      shelfLife: 55,
      perishable: true,
    },
    {
      ingredient: "egg yolks",
      quantity: 25,
      unit: "count",
      shelfLife: 16,
      perishable: true,
    },
    {
      ingredient: "cocoa powder",
      quantity: 2.5,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "bread",
      quantity: 5.5,
      unit: "loaves",
      shelfLife: 0,
      perishable: true,
    },
    {
      ingredient: "garlic",
      quantity: -5,
      unit: "lbs",
      shelfLife: 55,
      perishable: true,
    },
    {
      ingredient: "olive oil",
      quantity: 6,
      unit: "liters",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "balsamic vinegar",
      quantity: 5,
      unit: "liters",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "polenta",
      quantity: 14,
      unit: "lbs",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "veal shanks",
      quantity: 20,
      unit: "lbs",
      shelfLife: 1,
      perishable: true,
    },
    {
      ingredient: "carrot",
      quantity: 5,
      unit: "lbs",
      shelfLife: 25,
      perishable: true,
    },
    {
      ingredient: "celery",
      quantity: 5,
      unit: "lbs",
      shelfLife: 25,
      perishable: true,
    },
    {
      ingredient: "white wine",
      quantity: 0,
      unit: "liters",
      shelfLife: null,
      perishable: false,
    },
    {
      ingredient: "gnocchi",
      quantity: 0,
      unit: "lbs",
      shelfLife: 25,
      perishable: true,
    },
    {
      ingredient: "pine nuts",
      quantity: -2,
      unit: "lbs",
      shelfLife: 85,
      perishable: true,
    },
    {
      ingredient: "calamari",
      quantity: -2,
      unit: "lbs",
      shelfLife: 2,
      perishable: true,
    },
    {
      ingredient: "lemon",
      quantity: -1,
      unit: "lbs",
      shelfLife: 15,
      perishable: true,
    },
    {
      ingredient: "marinara sauce",
      quantity: 5.6,
      unit: "liters",
      shelfLife: 2,
      perishable: true,
    },
    {
      ingredient: "sausage",
      quantity: 11,
      unit: "lbs",
      shelfLife: 2,
      perishable: true,
    },
    {
      ingredient: "potatoes",
      quantity: 21,
      unit: "lbs",
      shelfLife: 55,
      perishable: true,
    },
    {
      ingredient: "kale",
      quantity: 10.5,
      unit: "lbs",
      shelfLife: 2,
      perishable: true,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
