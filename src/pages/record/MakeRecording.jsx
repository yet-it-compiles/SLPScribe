/**
 * @file Record.jsx
 *
 * @description This file is responsible for providing an interface for the
 * user to record, and playback audio.
 *
 * @requires react
 * @requires Record.module.scss
 *
 * @exports MakeRecording
 *
 * @TODO
 * 1. Editable Title
 * 2. 180 mic icon on b
 */

import React, { useState } from "react";
import styles from "./record.module.scss";
import { CiMicrophoneOn } from "react-icons/ci";

/**
 * Responsible for handling the recording feature by providing the user the
 * ability to press the record icon.
 *
 * Accomplished by setting up an event listener waiting for the user to click
 * the record icon. Once the user clicks record, an audio wave animation starts
 * playng.
 *
 * @returns {JSX.Element} - Representing text, and a single button
 */
const MakeRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showWaveAnimation, setShowWaveAnimation] = useState(false);

  const handleIsRecording = () => {
    setIsRecording((prev) => !prev);
    setShowWaveAnimation((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.directive}>
        {isRecording ? (
          <h1>Recording ...</h1>
        ) : (
          <h1>Please tap the record icon when you're ready</h1>
        )}
      </h1>
      <button
        className={styles.bounceInTop}
        type="submit"
        onClick={handleIsRecording}
      >
        <span>
          {isRecording ? (
            <CiMicrophoneOn className={styles.recording} />
          ) : (
            <CiMicrophoneOn className={styles.icons} />
          )}
        </span>
      </button>

      {showWaveAnimation && <AudioWaveAnimation />}
    </div>
  );
};

/**
 * Generates a wave animation that will be connected to the playback audio
 *
 * This is accomplished by
 *
 * @returns {JSX.Element} Representing an audio wave animation
 */
const AudioWaveAnimation = () => {
  const audioWaves = Array.from(
    { length: 20 },
    (_, eachIndex) => eachIndex + 1
  );
  return (
    <div className={styles.waveContainer}>
      {audioWaves.map((eachWave) => (
        <span
          key={eachWave}
          style={{
            left: `${6 * eachWave}px`,
            animationDelay: `${0.3 * eachWave}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MakeRecording;
