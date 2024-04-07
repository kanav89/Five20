import { cn } from "@/lib/utils";
import { MagicButton } from "@/components/magic-button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

// Define a type for the person data to ensure type safety
type Person = {
  name: string;
  description: string;
  width: string;
};

// Person data
const people: Person[] = [
  {
    name: "Dhruv Bansal",
    description: "Sophomore majoring in Computer Science at ASU",
    width: "w-[250px]",
  },
  {
    name: "Kanav Gupta",
    description: "Sophomore majoring in Computer Science at ASU",
    width: "w-[250px]",
  },
  {
    name: "Tawanda Vera",
    description: "Graduate student studying Global Management at ASU",
    width: "w-[280px]",
  },
  {
    name: "Shreyas Bachiraju",
    description: "Sophomore majoring in Informatics at ASU",
    width: "w-[280px]",
  },
  {
    name: "Vansh Gupta",
    description: "Sophomore majoring in Computer Science at ASU",
    width: "w-[280px]",
  },
];

// Reusable Card component for each person
const PersonCard = ({ name, description, width }: Person) => (
  <Card className={cn(width)}>
    <CardHeader>
      <CardTitle className="text-lg">{name}</CardTitle>
      <CardDescription className="text-md">{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <MagicButton className="w-full">Learn More</MagicButton>
    </CardFooter>
  </Card>
);

export function AboutPage() {
  // Group people by row based on the array indices
  const firstRowPeople = people.slice(0, 2);
  const secondRowPeople = people.slice(2);

  return (
    <div className="flex-col flex items-center pt-28 flex-wrap text-center h-min-screen">
      {/* First row with cards */}
      <div className="flex justify-center w-full mb-8 space-x-4 text-center items-center">
        {firstRowPeople.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
      {/* Second row with cards */}
      <div className="flex justify-center w-full mb-8 space-x-4 text-center items-center">
        {secondRowPeople.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
