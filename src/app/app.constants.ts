import { AdminCategory } from "./admin/models/admin-category";
import { UserCategory } from "./user/models/user-category";

 const UserCategory : UserCategory = {
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


export const userCategories: UserCategory[] = Array.from(Array(10).keys()).map(
    (key: number) => ({
        ...UserCategory,
        id: key.toString(),
    }));


export const adminCategories: AdminCategory[] = userCategories.map((category) => {
    return {
        ...category,
        isActive: true,
    };
});
