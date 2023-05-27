import React from 'react'
import "./DashboardTile.css"

const DashboardTile = () => {
    const tile = ()=>{
        console.log("Clicked")
    }
  return (
    <div onClick={tile} className="tile">DashboardTile</div>
  )
}

export default DashboardTile