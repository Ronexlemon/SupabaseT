import React from "react";
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




  const SignUp =()=>{
    return(
        <div className="w-full h-full flex justify-center items-center ">
 <Card className="w-1/2">
      <CardHeader>
        <CardTitle>SIGNUP</CardTitle>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">phone Number</Label>
              <Input id="name" placeholder="0701707773" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" type="password"  />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Confirm Password</Label>
              <Input id="name" type="password"  />
            </div>
            <div className="flex flex-col space-y-1.5">
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        
      <Button >SignUp</Button>
      </CardFooter>
      <CardFooter className="flex">
      <CardDescription>Have Account?</CardDescription>
      <Button variant="link">login</Button>

      </CardFooter>
     
    </Card>
        </div>
       
    )
  }

  export default SignUp;