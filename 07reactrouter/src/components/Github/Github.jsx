import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data=useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/dhruv226-student')
  //   .then(res => res.json())
  //   .then(data => {
  //     setData(data)
  //   })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>

      Github name : {data.name}
      <img className='flex' src={data.avatar_url} alt="Git Picure" width={300}  />
      <p>{data.bio}</p>
    </div>
  )
}

export const githubInfoLoader = async()=>{
 const response= await fetch('https://api.github.com/users/dhruv226-student')
 


return response.json()


}