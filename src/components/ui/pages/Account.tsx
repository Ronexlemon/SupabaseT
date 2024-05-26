"use client"
import React, {useState} from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../input";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "../button";
  import { Label } from "../label";
  
import { blogObject } from "@/helpers/blogdata";
import { Bloginterface } from "@/helpers/blogdata";

const Account = () => {
    const [isOpen,setIsopen]=useState<boolean>(false)
    const [title,setTitle]=useState<string>("")
    const [phoneNumber,setPhoneNumber]=useState<string>("")
    const [content,setContent]=useState<string>("")

    const handlePushData = async()=>{
        
    }
  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-end items-center h-20">
        <Button onClick={()=>setIsopen(true)} variant='destructive' >Create</Button>
      </div>
      <ScrollArea className="h-full w-full text-white p-4">
        <div className="w-full flex justify-center items-center">
        <AlertDialog open={isOpen}>
  <AlertDialogTrigger></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Create a blog</AlertDialogTitle>
      <div className="flex flex-col gap-4 ">
        <Label>Title</Label>
        <Input onChange={(event)=>setTitle(event.target.value)}  type="text" placeholder="The Greate Wall"/>

      </div>
      <div className="flex flex-col gap-4 ">
        <Label>Phone Number</Label>
        <Input  onChange={(event)=>setPhoneNumber(event.target.value)} type="number" placeholder="070170778"/>

      </div>
      <div className="flex flex-col gap-4 ">
        <Label>Content</Label>
        <Input onChange={(event)=>setContent(event.target.value)}  type="text-area" className="h-10" />

      </div>
     
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>setIsopen(false)}>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handlePushData} >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </div>
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
