import React,{useEffect, useState} from 'react';

import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import Loader from '../../../components/Loader';

const ModalVideo = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [VideoModal, setVideoModal] = useState(null);

    useEffect(() => {
        import('react-modal-video').then((module) => {
          setVideoModal(() => module.default);
        });
      }, []);

      if (!VideoModal) {
        return <Loader/>;
      }

    return(
        <React.Fragment>
        <VideoModal channel='youtube' 
            autoplay = "1"
            muted = "1"
            isOpen={isOpen} 
            videoId={props.videoID} 
            onClose={() => setOpen(false)} 
        />

        <button className="" onClick={()=> setOpen(true)}>
            {/* <ImPlay2 /> */}
          <img loading="lazy" alt="play button" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-28  shadow-2xl rounded-full border-4 border-gray-50 " src="/Images/falling-gems/play-webp.webp" />
          <div className="absolute bottom-0 py-2 px-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white bg-contain" style={{backgroundImage:"url(/Images/falling-gems/text-area-webp.webp)"}}>
              Watch Level {props.level}
          </div>
        </button>
        </React.Fragment>
    )

}

export default ModalVideo