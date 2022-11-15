import React, { useState, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { increment, enableTurbo, disableTurbo } from './cheeseCounterSlice';

import { Button, Form } from 'react-bootstrap';

import YouTubePlayer from 'react-player/youtube';
import FilePlayer from 'react-player/file';

import { isIOS } from 'react-device-detect';

import prizeImage from '../grand_prize.png';

import styles from './cheeseCounter.module.css';

export const CheeseCounter = () => {
  const countState = useSelector((state: any) => state.cheeseCounter.value);
  const turbo = useSelector((state: any) => state.cheeseCounter.turbo);

  const dispatch = useDispatch();

  const rickRollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const cheeseUrl = 'https://www.youtube.com/watch?v=SyimUCBIo6c';
  const cheeseUrlCdn = '//grabbag.public-cdn-1.hypeworks.net/cheese.mp4';
  const rickRollCdn = '//grabbag.public-cdn-1.hypeworks.net/dQw4w9WgXcQ.mp4';

  const winningScore = 69;

  const count = useRef(countState);
  const playingVideoCount = useRef(0);
  const [incrementDisabled, setIncrementDisabled] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);

  const getVideoUrl = (): string | null => {
    if (count.current > 0 && count.current % 68 === 0) {
      return rickRollUrl;
    } else if (count.current === winningScore) {
      return null;
    } else {
      return cheeseUrl;
    }
  };

  const handleIncrement = async () => {
    dispatch(increment());
    
    count.current += 1;

    setIncrementDisabled(true);
    setPlayingVideo(getVideoUrl() !== null);

    playingVideoCount.current = count.current;
  };

  const onVideoEnd = () => {
    playingVideoCount.current -= 1;

    if (playingVideoCount.current === 0) {
      setIncrementDisabled(false);
      setPlayingVideo(false);
    }
  };

  const ReactPlayer = () => {
    let videoUrl = getVideoUrl()!;

    if (false) {
      if (videoUrl === cheeseUrl) {
        videoUrl = cheeseUrlCdn;
      } else if (videoUrl === rickRollUrl) {
        videoUrl = rickRollCdn;
      }
    }

    if (false) {
      return (
        <FilePlayer url={videoUrl} playing={true} onEnded={onVideoEnd} />
      );
    } else {
      return (
        <YouTubePlayer url={videoUrl} playing={true} onEnded={onVideoEnd} />
      );
    }
  }

  const videoPlayer = () => {
    let component = (
      <>
        {ReactPlayer()}
      </>
    );

    if (playingVideo) {
      if (getVideoUrl() === cheeseUrl) {
        let videoList = [];
        for (let i = 0; i < count.current; i++) {
          videoList.push(React.cloneElement(component, { key: i }));
        }
        return (
          <div className={styles.cheeseContainer}>
            {videoList}
          </div>
        )
      } else {
        return (
          <>
            {component}
          </>
        );
      }
    } else {
      if (count.current === winningScore) {
        return (
          <>
            <h1>You win!</h1>
            <img src={prizeImage} alt="Grand prize" />
            <img src="https://cdn.frankerfacez.com/emoticon/418189/4" alt="YEP" />
          </>
        );
      } else {
        return null;
      }
    }
  };

  const iOSWarning = () => {
    if (isIOS) {
      return (
        <p>Does not work properly on iOS. <img src="https://cdn.frankerfacez.com/emoticon/425196/1" alt="Sadge"></img></p>
      );
    }
  };

  return (
    <div>
      {iOSWarning()}
      <Form.Switch 
        label="Turbo?"
        id="turbo-switch"
        onChange={() => { turbo ? dispatch(disableTurbo()) : dispatch(enableTurbo()); }}
      />
      <Button variant='warning' onClick={ () => { handleIncrement(); } } disabled={incrementDisabled}>Get Cheese</Button>
      <span>Your score: { count.current }</span>
      { videoPlayer() }
    </div>
  );
};
