export interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  idLyric: string;
  idIMVDB: any;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  strArtistAlternate: any;
  intCD: any;
  intDuration: string;
  strGenre: string;
  strMood: any;
  strStyle: any;
  strTheme: any;
  strDescriptionEN: string;
  strTrackThumb: string;
  strTrack3DCase: any;
  strTrackLyrics: string;
  strMusicVid: string;
  strMusicVidDirector: any;
  strMusicVidCompany: any;
  strMusicVidScreen1: any;
  strMusicVidScreen2: any;
  strMusicVidScreen3: any;
  intMusicVidViews: string;
  intMusicVidLikes: string;
  intMusicVidDislikes: string;
  intMusicVidFavorites: any;
  intMusicVidComments: any;
  intTrackNumber: string;
  intLoved: string;
  intScore: any;
  intScoreVotes: any;
  intTotalListeners: string;
  intTotalPlays: string;
  strMusicBrainzID: string;
  strMusicBrainzAlbumID: string;
  strMusicBrainzArtistID: string;
  strLocked: string;
}

export interface TrackObject {
  track: [];
}
