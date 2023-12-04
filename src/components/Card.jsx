import axios from 'axios'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import CardPage from '../CardPage'

function Card({item}) {

    const clickHandler = async  () => {
    const res = await axios.get(item.ProductLink.Href)
    console.log(res.data)
    return (<CardPage details={res.data}/>)
  }



  return (
    <a className=' cursor-pointer' href={`/cardpage/${item.MoonpigProductNo}`}>
      <img src={item.ProductImage.Link.Href} alt={item.ProductImage.Link.Title} />
    </a>
  )
}

export default Card
