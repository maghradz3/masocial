const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `/topic/${topicSlug}`;
  },
  postCreate(postSlug: string) {
    return `topics/${postSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topic/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
