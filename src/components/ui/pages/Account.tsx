import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogObject } from "@/helpers/blogdata";
import { Bloginterface } from "@/helpers/blogdata";

const Account = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-end items-center h-20"></div>
      <ScrollArea className="h-full w-full text-white p-4">
        <div className="h-full w-full grid grid-cols-2 gap-4">
          {blogObject.map((element: Bloginterface, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{element.title}</CardTitle>
                <CardDescription>{element.content}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contact: {element.phoneNumber}</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Account;
