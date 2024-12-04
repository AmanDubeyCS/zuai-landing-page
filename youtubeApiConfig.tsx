const channelId = "UCrzMQ38sRyAx_PIETNJjN-Q"
export const config = {
  getYoutubePlaylist: `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`,
  getVideosFromPlaylist: (playlistID: string) =>
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&key=${process.env.YOUTUBE_KEY}&maxResults=50`,
  getVideoFromVideoId: (videoID: string) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${process.env.YOUTUBE_KEY}`,
}
