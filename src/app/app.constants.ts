import { VideoCategory } from "./youtube/models/video-category";

 const VideoCategory : VideoCategory = {
    id: '111',
    type: '',
    title: '',
    podcastNumber: '',
    description: '',
    imgUrl: '',
    urlVideo: "https://www.youtube.com",
    imageAlt: 'photo of the band',
    viewCount: '1',
    likeCount: '1',
    dislikeCount: '1',
    commentCount: '1',
}


export const videoCategories: VideoCategory[] = Array.from(Array(10).keys()).map(
    (key: number) => ({
        ...VideoCategory,
        id: key.toString(),
    }));
