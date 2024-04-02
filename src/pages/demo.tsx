import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import AppLayout from "~/components/layouts/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

const cardSchema = z.object({
  id: z.string(),
  scryfallId: z.string(),
  name: z.string(),
  set: z.string(),
  quantity: z.number(),
  isFoil: z.boolean(),
  isAlter: z.boolean(),
  isProxy: z.boolean(),
  images: z.object({
    small: z.string(),
    normal: z.string(),
    large: z.string(),
  }),
});

const decklistSchema = z.object({
  decklist: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    format: z.string(),
    publicUrl: z.string().url(),
    createdBy: z.string(),
    createdAt: z.string(),
    lastUpdated: z.string(),
    importedFrom: z.string(),
    commanders: z.array(cardSchema),
    mainboard: z.array(cardSchema),
  }),
});

const Demo = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["xWxahoovlUmP1ZJo4BXTYw"],
    queryFn: async () =>
      fetch(
        "http://localhost:3001/api/decklist?url=https://www.moxfield.com/decks/xWxahoovlUmP1ZJo4BXTYw",
      )
        .then((response) => response.json())
        .then((data) => decklistSchema.parse(data)),
  });

  if (isLoading)
    return (
      <AppLayout>
        <div>Loading...</div>
      </AppLayout>
    );

  if (error)
    return (
      <AppLayout>
        <div>Error: {error.message}</div>
      </AppLayout>
    );

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {/* {data?.decklist.commanders.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src={card.images.normal} alt={card.name} />
            </CardContent>
          </Card>
        ))} */}
        <DeckBox color="White" />
        <DeckBox color="Slate" />
        <DeckBox color="Gray" />
        <DeckBox color="Zinc" />
        <DeckBox color="Neutral" />
        <DeckBox color="Stone" />
        <DeckBox color="Red" />
        <DeckBox color="Orange" />
        <DeckBox color="Amber" />
        <DeckBox color="Yellow" />
        <DeckBox color="Lime" />
        <DeckBox color="Green" />
        <DeckBox color="Emerald" />
        <DeckBox color="Teal" />
        <DeckBox color="Cyan" />
        <DeckBox color="Sky" />
        <DeckBox color="Blue" />
        <DeckBox color="Indigo" />
        <DeckBox color="Violet" />
        <DeckBox color="Purple" />
        <DeckBox color="Fuchsia" />
        <DeckBox color="Pink" />
        <DeckBox color="Rose" />
        <DeckBox color="White" opacity={0.25} addNew />
      </div>
    </AppLayout>
  );
};

type Color =
  | "White"
  | "Slate"
  | "Gray"
  | "Zinc"
  | "Neutral"
  | "Stone"
  | "Red"
  | "Orange"
  | "Amber"
  | "Yellow"
  | "Lime"
  | "Green"
  | "Emerald"
  | "Teal"
  | "Cyan"
  | "Sky"
  | "Blue"
  | "Indigo"
  | "Violet"
  | "Purple"
  | "Fuchsia"
  | "Pink"
  | "Rose";

type Opacity = 0.25 | 0.5 | 0.75 | 1;

type DeckboxProps = {
  color: Color;
  opacity?: Opacity;
  addNew?: boolean;
};

const getColorClassNames = (color: Color) => {
  if (color === "White") {
    return {
      border: `border-gray-400`,
      bg: `bg-gray-100`,
      bgLight: `bg-white`,
      bgDark: `bg-gray-200`,
    };
  }
  return {
    border: `border-${color.toLowerCase()}-950`,
    bg: `bg-${color.toLowerCase()}-800`,
    bgLight: `bg-${color.toLowerCase()}-700`,
    bgDark: `bg-${color.toLowerCase()}-900`,
  };
};

const getOpacityClassName = (opacity: Opacity) => {
  switch (opacity) {
    case 0.25:
      return "opacity-25";
    case 0.5:
      return "opacity-50";
    case 0.75:
      return "opacity-75";
    case 1:
      return "opacity-100";
  }
};

const DeckBox = ({ color, opacity, addNew }: DeckboxProps) => {
  const { border, bg, bgLight, bgDark } = getColorClassNames(color);
  const opacityClassName = getOpacityClassName(opacity ?? 1);

  return (
    <Card>
      <CardContent>
        <Link
          href="/"
          className="opacity relative flex items-center justify-center pt-6 transition hover:scale-105"
        >
          <span
            className={cn(
              "rounded-0 mb-12 ml-14 mt-14 h-24 w-24 -skew-y-[15deg]",
              opacityClassName,
            )}
          >
            <span
              className={cn(
                "rounded-0 rounded-br-2 absolute left-[-2.8rem] top-[-1.5rem] h-32 w-12 skew-y-[45deg] rounded-bl-sm border-b-2 border-l-2 border-solid",
                border,
                bgDark,
              )}
            ></span>
            <span
              className={cn(
                "rounded-0 rounded-t-2 absolute left-[-3rem] top-[-1.5rem] h-24 w-12 skew-y-[45deg] rounded-b-sm border-2 border-solid",
                border,
                bg,
              )}
            ></span>
            <span
              className={cn(
                "rounded-0 absolute left-[-1.5rem] top-[-3rem] h-[3.05rem] w-24 skew-x-[45deg] rounded-t-sm border-r-2 border-t-2 border-solid",
                border,
                bg,
              )}
            ></span>
            <span
              className={cn(
                "rounded-0 rounded-bl-2 absolute left-[0.2rem] top-[5rem] h-[3rem] w-[5.5rem] rounded-br-sm border-b-2 border-l-2 border-r-2 border-solid",
                border,
                bg,
              )}
            ></span>
            <span
              className={cn(
                "rounded-0 absolute h-24 w-24 rounded-b-sm border-b-2 border-r-2 border-t-2 border-solid ",
                border,
                bgLight,
              )}
            ></span>
          </span>
          {addNew && (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gray-300 p-4 text-center">
              Add
            </span>
          )}
        </Link>
      </CardContent>
    </Card>
  );
};

export default Demo;
