'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../util/supabase/serve'
interface Formdata{
    email:string,
    password:string
}
export interface blogint{
    phone_number:string,
    created_at?:string,
    blog_text:string,
    blog_title:string

}

export async function login(formData: Formdata) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password,
  }
  console.log("the data is data",data)
  

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: Formdata) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password,
  }
  console.log("the data is data",data)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}


export async function fetchdata(){
    const supabase = createClient()
    console.log("satrting")
    const {data,error} = await supabase.from('blogs').select("*")
    ;
    if (error){
        console.log("error is error",error)

    }
   
    return data
}


export async function createBlog(formdata:blogint){
    const supabase = createClient()
    const {data,error} = await supabase.from('blogs').insert([formdata]).select();
    if(error){
        console.log("error is error",error)
    }
    return data

}