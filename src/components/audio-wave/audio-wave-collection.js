import { Howl, Howler } from 'howler';
import React from 'react';

class AudioWaveCollection extends React.Component {
  constructor(props) {
    super(props);

    this.children = props.children;
  }

  render() {
    return (
      <ul class="audio-waves">
        {this.children}
      </ul>
    );
  }
}

export default AudioWaveCollection;
