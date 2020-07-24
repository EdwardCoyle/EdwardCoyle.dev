import { Howl, Howler } from 'howler';
import moment from 'moment';
import React from 'react';
import Link from 'next/link';

const SVGPauseButton = require('./pause-btn.svg');
const SVGPlayButton = require('./play-btn.svg');

/**
 * UI Component that represents a sound effect with playback controls
 */
class AudioWave extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.state || {};
    this.props = props;
    this.imgAltTag = `${props.name}`;

    // Strip the word "public/" out of the URL for use within the link
    this.sndURL = props.path.replace('public/', '');
    this.nameWithoutExt = props.name.replace('.ogg', '');
    this.nameOfSender = this.nameWithoutExt.split('_')[0].replace('-', ' ');

    // Setup audio
    this.audio = new Howl({
      src: [ this.sndURL ]
    });

    // Bind event handlers to `this`
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.togglePlayback = this.togglePlayback.bind(this);
  }

  /**
   * @returns {string} representing the current playback button image
   */
  getCurrentPlaybackImage() {
    const imgData = this.state.playback ? SVGPauseButton : SVGPlayButton;

    return (
      <>
        <object className="audio-wave--play-pause-icon" type="image/svg+xml" data={imgData} role="img" aria-label="play-pause-icon">
          <div role="img" className="audio-wave--play-pause-icon fallback-image" aria-label="play-pause-icon"></div>
        </object>
      </>
    );
  }

  getFormattedDate() {
    return moment(this.props.date).format('dddd, MMMM D, YYYY @ h:mma');
  }

  play() {
    if (this.state.playback) {
      this.audio.stop();
    }

    this.audio.play();
    this.state.playback = true;
    this.setState(this.state);
  }

  pause() {
    if (!this.state.playback) {
      return;
    }

    this.audio.pause();
    this.state.playback = false;
    this.setState(this.state);
  }

  togglePlayback() {
    this[this.state.playback ? 'pause' : 'play']();
  }

  render () {
    /*
    <Link href={`${this.sndURL}`} as={`${this.sndURL}`}>
      <a className="audio-wave--url">{this.props.name}</a>
    </Link>
    */

    return (
      <li className="audio-wave">
        <div className="audio-wave--controls">
          <button className="audio-wave--play-pause-button" onClick={this.togglePlayback}>{this.getCurrentPlaybackImage()}</button>
        </div>
        <div className="audio-wave--details">
          <span className="audio-wave--name">{this.nameOfSender}</span>
          <span className="audio-wave--date">{this.getFormattedDate()}</span>
        </div>
      </li>
    );
  }
}

export default AudioWave;
