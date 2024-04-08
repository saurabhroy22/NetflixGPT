const VideoTitle=({title, overview})=>{

    return (<div className=" w-screen aspect-video absolute px-20 pt-[25%] bg-gradient-to-r from-black  text-white ">
        <h1 className=" font-bold text-2xl">{title}</h1>
        <p className=" w-2/4 my-2 font-serif"> {overview}</p>
        <div>
            <button className=" bg-white text-black font-serif px-6 py-2 rounded-md mr-2 hover:opacity-80">▶ Play</button>
            <button className=" bg-gray-600 font-serif px-6 py-2 rounded-md text-white hover:opacity-80">More info</button>
        </div>
    </div>)
}

export default VideoTitle;