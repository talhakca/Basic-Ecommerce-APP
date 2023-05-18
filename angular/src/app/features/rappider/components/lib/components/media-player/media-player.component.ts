import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MediaPlayerProvider,
  MediaPlayerTrack,
} from '../../utils/media-player';

@Component({
  selector: 'rappider-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class RappiderMediaPlayerComponent implements OnInit, OnChanges {
  // #region Variables

  // #region Inputs

  /**
   * provider for media. (youtube, vimeo, etc)
   *
   * @type {MediaPlayerProvider}
   * @memberof RappiderMediaPlayerComponent
   */
  @Input() provider: MediaPlayerProvider;
  /**
   * Address of the media resource.
   *
   * @type {string}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() source: string;
  /**
   * video id for youtube, vimeo, etc.
   *
   * @type {string}
   * @memberof RappiderMediaPlayerComponent
   */
  @Input() videoId: string;
  /**
   * A URL for an image to be shown while the video is downloading.
   * If this attribute isn't specified, nothing is displayed until
   * the first frame is available, then the first frame is shown as the poster frame.
   *
   * @type {string}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() poster: string;
  /**
   * The track allows authors to specify explicit external
   * timed text tracks for media elements.
   *
   * @type {MediaPlayerTrack[]}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() tracks: MediaPlayerTrack[];
  /**
   * The aspect ratio of the player expressed as width:height (16:9).
   * This is only applied if the viewType is video and the player is not in fullscreen mode.
   *
   * @type {string}
   * @memberof VideoPlayerComponent
   */
  @Input() aspectRatio: string;
  /**
   * Whether the player should automatically pause
   * when another Vime player starts/resumes playback.
   *
   * @type {boolean}
   * @memberof VideoPlayerComponent
   */
  @Input() autoPause: boolean;
  /**
   *
   * Whether playback should automatically begin playing once the media is ready to do so.
   * This will only work if the browsers autoplay policies have been satisfied.
   *
   * @type {boolean}
   * @memberof VideoPlayerComponent
   */
  @Input() autoPlay: boolean;
  /**
   * Indicates whether a user interface should be shown for controlling the resource.
   * Set this to false when you want to provide your own custom controls,
   * and true if you want the current provider to supply its own default controls.
   *
   * @type {boolean}
   * @memberof VideoPlayerComponent
   */
  @Input() controls: boolean;
  /**
   * A double indicating the current playback time in seconds.
   * Defaults to 0 if the media has not started to play and has not seeked.
   * Setting this value seeks the media to the new time.
   * The value can be set to a minimum of 0 and maximum of the total length of the media
   * (indicated by the duration prop).
   *
   * @type {number}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() currentTime: number;
  /**
   * The current language of the player.
   * This can be any code defined via the extendLanguage method or the default en.
   * It's recommended to use an ISO 639-1 code as that'll be used by Vime when adding
   * new language defaults in the future.
   *
   * @type {string}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() language: string;
  /**
   * Whether media should automatically start playing
   * from the beginning every time it ends.
   *
   * @type {boolean}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() loop: boolean;
  /**
   * Whether the audio is muted or not.
   *
   * @type {boolean}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() muted: boolean;
  /**
   * A double indicating the rate at which media is being played back.
   * If the value is <1 then playback is slowed down;
   * if >1 then playback is sped up. Defaults to 1.
   * The playback rate can only be set to a rate found in the playbackRates prop.
   * Some providers may not allow changing the playback rate,
   * you can check if it's possible via canSetPlaybackRate().
   *
   * @type {number}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() playbackRate: number;
  /**
   * Whether the video is to be played "inline",
   * that is within the element's playback area.
   * Note that setting this to false does not imply
   * that the video will always be played in fullscreen.
   *
   * @type {boolean}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() playsInline: boolean;
  /**
   * Whether text tracks should be rendered by native player,
   * set to false if using custom display.
   *
   * @type {boolean}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() shouldRenderNativeTextTracks: boolean;
  /**
   * This property has no role other than scoping CSS selectors.
   *
   * @type {string}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() theme: string;
  /**
   * An int between 0 (silent) and 100 (loudest) indicating the audio volume.
   *
   * @type {number}
   * @memberof RappiderVideoPlayerComponent
   */
  @Input() volume;
  /**
   * The title of the current media.
   *
   * @type {string}
   * @memberof RappiderMediaPlayerComponent
   */
  @Input() mediaTitle: string;
  /**
   * Whether cookies should be enabled on the embed.
   *
   * @type {boolean}
   * @memberof RappiderMediaPlayerComponent
   */
  @Input() cookies: boolean;

  // #endregion End of Inputs

  // #region Output Events

  /**
   * Emitted when the provider starts loading a media resource.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() loadStart = new EventEmitter<CustomEvent<void>>();
  /**
   * The length of the media in seconds that has been downloaded by the browser.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() bufferedChange = new EventEmitter<CustomEvent<number>>();
  /**
   * Whether playback has temporarily stopped because of a lack of temporary data.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() bufferingChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted when the volume prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() volumeChange = new EventEmitter<CustomEvent<number>>();
  /**
   * Emitted when the muted prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() mutedChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted when the paused prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() pausedChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted when the currentTime prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() currentTimeChange = new EventEmitter<CustomEvent<number>>();
  /**
   * Emitted when fullscreen mode has been entered or exited.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() fullscreenChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted when PiP mode has been entered or exited.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() pipChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted when the mediaType prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() mediaTypeChange = new EventEmitter<CustomEvent<string>>();
  /**
   * Emitted when the language prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() languageChange = new EventEmitter<CustomEvent<string>>();
  /**
   * Emitted when the media is transitioning from paused to playing.
   * Event flow: paused -> play -> playing.
   * The media starts playing once enough content has buffered to begin/resume playback
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() play = new EventEmitter<CustomEvent<void>>();
  /**
   * Emitted when the media is ready to begin playback.
   * The following props are guaranteed to be defined when this fires:
   * mediaTitle, currentSrc, currentPoster, duration, mediaType, viewType.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() playbackReady = new EventEmitter<CustomEvent<void>>();
  /**
   * Emitted when the media initiates playback.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() playbackStarted = new EventEmitter<CustomEvent<void>>();
  /**
   * Emitted when playback reaches the end of the media.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() playbackEnd = new EventEmitter<CustomEvent<void>>();
  /**
   * Emitted when the playbackQuality prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() playbackQualityChange = new EventEmitter<CustomEvent<string>>();
  /**
   * Emitted when the playbackRate prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() playbackRateChange = new EventEmitter<CustomEvent<number>>();
  /**
   * Emitted when the seeking prop changes value.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() seekingChange = new EventEmitter<CustomEvent<boolean>>();
  /**
   * Emitted directly after the player has successfully transitioned/seeked
   *  to a new time position. Event flow: seeking -> seeked.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() seeked = new EventEmitter<CustomEvent<void>>();
  /**
   * Emitted when an any error has occurred within the player.
   *
   * @memberof RappiderMediaPlayerComponent
   */
  @Output() error = new EventEmitter<CustomEvent<any>>();

  // #endregion End of Output Events

  Provider = MediaPlayerProvider;

  visible = true;

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initDefaults();
    /* update view when source or videoId changed. */
    if (changes.videoId || changes.source) {
      this.visible = false;
      setTimeout(() => (this.visible = true), 1);
    }
  }

  initDefaults() {
    if (this.controls == null) {
      this.controls = true;
    }

    if (this.currentTime == null) {
      this.currentTime = 0;
    }

    if (this.shouldRenderNativeTextTracks == null) {
      this.shouldRenderNativeTextTracks = true;
    }

    if (this.volume == null) {
      this.volume = 50;
    }

    if (!this.provider) {
      this.provider = MediaPlayerProvider.Default;
    }
  }

  // #region End of Variables

  // #region Emit Event Functions

  onLoadStart(event: CustomEvent<void>) {
    this.loadStart.emit(event);
  }

  onBufferedChange(event: CustomEvent<number>) {
    this.bufferedChange.emit(event);
  }

  onBufferingChange(event: CustomEvent<boolean>) {
    this.bufferingChange.emit(event);
  }

  onVolumeChange(event: CustomEvent<number>) {
    this.volumeChange.emit(event);
  }

  onMutedChange(event: CustomEvent<boolean>) {
    this.mutedChange.emit(event);
  }

  onPausedChange(event: CustomEvent<boolean>) {
    this.pausedChange.emit(event);
  }

  onCurrentTimeChange(event: CustomEvent<number>) {
    this.currentTimeChange.emit(event);
  }

  onFullscreenChange(event: CustomEvent<boolean>) {
    this.fullscreenChange.emit(event);
  }

  onPiPChange(event: CustomEvent<boolean>) {
    this.pipChange.emit(event);
  }

  onMediaTypeChange(event: CustomEvent<string>) {
    this.mediaTypeChange.emit(event);
  }

  onLanguageChange(event: CustomEvent<string>) {
    this.languageChange.emit(event);
  }

  onPlay(event: CustomEvent<void>) {
    this.play.emit(event);
  }

  onPlaybackReady(event: CustomEvent<void>) {
    this.playbackReady.emit(event);
  }

  onPlaybackStarted(event: CustomEvent<void>) {
    this.playbackStarted.emit(event);
  }

  onPlaybackEnd(event: CustomEvent<void>) {
    this.playbackEnd.emit(event);
  }

  onPlaybackQualityChange(event: CustomEvent<string>) {
    this.playbackQualityChange.emit(event);
  }

  onPlaybackRateChange(event: CustomEvent<number>) {
    this.playbackRateChange.emit(event);
  }

  onSeekingChange(event: CustomEvent<boolean>) {
    this.seekingChange.emit(event);
  }

  onSeeked(event: CustomEvent<void>) {
    this.seeked.emit(event);
  }

  onError(event: CustomEvent<any>) {
    this.error.emit(event);
  }

  // #endregion End of Emit Event Functions
}
