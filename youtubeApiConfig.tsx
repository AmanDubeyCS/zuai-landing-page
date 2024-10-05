export const config = {
  getYoutubePlaylist: `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCrzMQ38sRyAx_PIETNJjN-Q&maxResults=25&key=AIzaSyDRoqhL9_pd9CeSa2Z6RECcmlCPB8dEass`,
  getVideosFromPlaylist: (playlistID: string) =>
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&key=AIzaSyDRoqhL9_pd9CeSa2Z6RECcmlCPB8dEass&maxResults=50`,
}
