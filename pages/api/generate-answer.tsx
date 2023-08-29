import { NextApiRequest,NextApiResponse } from "next";
import openai from "@/utils/openai";
import { deflate } from "zlib";

type Data={
  name:string
}



export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse<any>
){

  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  
  const { message } = req.body;

  try{
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content":`${message}`}],
  });
  const response=chatCompletion.choices[0].message.content
  res.status(200).json({response})
} catch(error){
  res.status(500).json({error: 'An error occurred while generating the response.'})
}

}