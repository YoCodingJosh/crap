import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { increment } from './cheeseCounterSlice';

import { Button } from 'react-bootstrap';

import ReactPlayer from 'react-player';

import prizeImage from '../grand_prize.png';

export const CheeseCounter = () => {
  const count = useSelector((state: any) => state.cheeseCounter.value);
  const dispatch = useDispatch();

  const rickRollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const nyanCatUrl = 'https://www.youtube.com/watch?v=QH2-TGUlwu4';
  const cheeseUrl = '/cheese.mp4';

  const winningScore = 420;

  let [incrementDisabled, setIncrementDisabled] = useState(false);
  let [playingVideo, setPlayingVideo] = useState(false);

  const getVideoUrl = (): string | null => {
    if (count > 2 && count % 8 === 0) {
      return nyanCatUrl;
    } else if (count > 2 && count % 69 === 0) {
      return rickRollUrl;
    } else if (count === winningScore) {
      return null;
    } else {
      return cheeseUrl;
    }
  };

  const handleIncrement = () => {
    dispatch(increment());

    setIncrementDisabled(true);
    setPlayingVideo(getVideoUrl() !== null);
  };

  const onVideoEnd = () => {
    setIncrementDisabled(false);
    setPlayingVideo(false);
    console.log("finished video!");
  };

  const videoPlayer = () => {
    if (playingVideo) {
      return (
        <ReactPlayer url={getVideoUrl()!} playing={true} onEnded={onVideoEnd} />
      );
    } else {
      if (count === winningScore) {
        return (
          <>
            <h1>You win!</h1>
            <img src={prizeImage} alt="Grand prize" />
          </>
        );
      } else {
        return null;
      }
    }
  };

  console.log("playingVideo: " + playingVideo);
  console.log("incrementDisabled: " + incrementDisabled);
  console.log("count: " + count);
  console.log("getVideoUrl(): " + getVideoUrl());
  console.log(videoPlayer());

  return (
    <div>
      <Button variant='warning' onClick={ () => { handleIncrement(); } } disabled={incrementDisabled}>Get Cheese</Button>
      <span>Your score: { count }</span>
      <div className='video-container'>
        { videoPlayer() }
      </div>
    </div>
  );
};

