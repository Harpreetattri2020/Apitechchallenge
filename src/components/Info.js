import React from 'react'

const Info = ({id,album,name,website,img,email}) => {
    return (
        
            <div className="m-28  ">
                <div className="flex space-x-14 ">
                <img className="w-60 h-48 rounded-md" src={img} alt="" />
                <div className="flex flex-col justify-center items-center ">
                <h1 className="text-xl font-bold">{album}</h1>
                <h1 className="text-gray-800" >{name}</h1>
                <h2 className="text-md">{email}</h2>
                <span className="text-blue-500">{website}</span>
                </div>
                </div>
        </div>
    )
}

export default Info
