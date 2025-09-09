const key = "AIzaSyCAU6btJzfGfRYq2t3OaNBEUisutMk8LQ8";

export const videosUrl = ` https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=${key}`;

export const searchApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=${key}&q="
`;

export const videoDetailsApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=${key}&id=`;

export const videoPlayerUrl = `https://www.youtube.com/embed/`; // add video id at the end of it

export const channelDetailsApi = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=${key}&id=`; // add channel id at the end

export const liveMessageLimit = 250;
