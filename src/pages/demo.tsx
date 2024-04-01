import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
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
      <div className="grid grid-cols-4 gap-4 p-4">
        {data?.decklist.commanders.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src={card.images.normal} alt={card.name} />
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>{data?.decklist.name}</CardTitle>
            <CardDescription>{data?.decklist.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-64 flex-col gap-1">
                <span className="flex h-3/4 w-full rounded-sm bg-red-700"></span>
                <span className="flex h-1/4 w-full rounded-sm bg-red-800"></span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Demo;
