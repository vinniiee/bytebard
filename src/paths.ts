export const paths = {
  home: () => {
    return "/";
  },
  topicShow: (topic: string) => {
    return `/topics/${topic}/posts`;
  },
  createPost: (topic: string) => {
    return `/topics/${topic}/post/new`;
  },
  showPost: (topic: string, postId: string) => {
    return `/topics/${topic}/posts/${postId}`;
  },
  allTopicsShow:()=>{
    return "/topics"
  }
};
