"use client"
import React, {useState} from "react";
import { Input } from "../input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label"
import { login,signup } from "@/app/signup/action";



  const Login =()=>{
    const [email,setEmail] = useState<string>("");
    const [pass,setpass] = useState<string>("");
    return(
        <div className="w-full h-full flex justify-center items-center ">
 <Card className="w-1/2">
      <CardHeader>
        <CardTitle>LOGIN</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="jondoe@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="password" onChange={(event)=>setpass(event.target.value)} type="password"  />
            </div>
            <div className="flex flex-col space-y-1.5">
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        
      <Button  onClick={()=>login({email:email,password:pass})} >login</Button>
      </CardFooter>
      <CardFooter className="flex">
      <CardDescription>No Account?</CardDescription>
      <Button variant="link">signup</Button>

      </CardFooter>
     
    </Card>
        </div>
       
    )
  }

  export default Login;