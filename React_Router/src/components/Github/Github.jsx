import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {
  //   const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Usman6768')
  //   .then((res) => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // })

  const data = useLoaderData();
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='' src={data.avatar_url} alt="Github Profile Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader =  async () => {
  const response = await fetch('https://api.github.com/users/Usman6768')
  return response.json();
}