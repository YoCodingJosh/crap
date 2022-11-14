import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { increment, enableTurbo, disableTurbo } from './cheeseCounterSlice';

import { Button, Form } from 'react-bootstrap';

import ReactPlayer from 'react-player/lazy';

import prizeImage from '../grand_prize.png';

export const CheeseCounter = () => {
  const count = useSelector((state: any) => state.cheeseCounter.value);
  const turbo = useSelector((state: any) => state.cheeseCounter.turbo);

  const dispatch = useDispatch();

  const rickRollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const nyanCatUrl = 'https://www.youtube.com/watch?v=QH2-TGUlwu4';
  const cheeseUrl = 'https://www.youtube.com/watch?v=SyimUCBIo6c';

  const winningScore = 69;

  const [incrementDisabled, setIncrementDisabled] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);

  const getVideoUrl = (): string | null => {
    if (count > 0 && count % 68 === 0) {
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
    let component = (
      <ReactPlayer url={getVideoUrl()!} playing={true} onEnded={onVideoEnd} />
    );

    if (playingVideo) {
      if (getVideoUrl() === cheeseUrl) {
        let videoList = [];
        for (let i = 0; i < count; i++) {
          videoList.push(React.cloneElement(component, { key: i }));
        } 
        return (
          <>
            {videoList}
          </>
        )
      } else {
        return (
          <>
            {component}
          </>
        );
      }
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
      <Form.Switch 
        label="Turbo?"
        id="turbo-switch"
        onChange={() => { turbo ? dispatch(disableTurbo()) : dispatch(enableTurbo()); }}
      />
      <Button variant='warning' onClick={ () => { handleIncrement(); } } disabled={incrementDisabled}>Get Cheese</Button>
      <span>Your score: { count }</span>
      { videoPlayer() }
    </div>
  );
};
