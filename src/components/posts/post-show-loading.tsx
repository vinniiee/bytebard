import { Skeleton } from "../ui/skeleton"

const PostShowLoading = () => {
  return (
    <div className="m-4 flex w-full flex-col gap-4">
      <Skeleton className="h-6 w-1/2"/>
      <Skeleton className="h-4 w-full border rounded"/>
      <Skeleton className="h-4 w-full border rounded"/>
      <Skeleton className="h-4 w-full border rounded"/>{/* <CommentCreateForm postId={postId}/> */}
    </div>
  )
}

export default PostShowLoading