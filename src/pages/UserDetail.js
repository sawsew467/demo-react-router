import React from 'react'
import { useParams } from 'react-router'

function UserDetail() {
    const params = useParams()
    console.log(params);
  return (
    <div>Day la user {params.id}</div>
  )
}

export default UserDetail