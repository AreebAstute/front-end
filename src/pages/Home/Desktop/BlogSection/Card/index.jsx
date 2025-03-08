import React from 'react'
import './style.css'
const Card = () => {
    return (
        <div className="min-h-400 cursor-pointer transform transition w-280 sm:w-320 duration-500 hover:scale-110 ">
            <div className=" flex flex-col overflow-hidden rounded-2xl    blog_card">
                <div className="">
                    <img src="/Images/blog_sample_image.webp" alt="card_image" className=""  />
                </div>
                <div className="flex flex-col p-4 space-y-2 text-base space-y-2 ">
                {/* <div className="card__body"> */}
                    <span className=" flex self-start px-4 rounded-xl bg-yellow-400 text-white ">Technology</span>
                    <h1 className='text-2xl'>What's new in 2022 Tech</h1>
                    <p className='text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="flex pb-4 px-4 mt-3">
                {/* <div className="card__footer"> */}
                    <div className="flex items-center space-x-2">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="rounded-full" />
                        <div className="">
                            <h5>Jane Doe</h5>
                            {/* <small>2h ago</small> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card