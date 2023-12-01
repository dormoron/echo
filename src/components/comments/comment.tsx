import { createSignal } from 'solid-js';

import { FiMessageSquare, FiEdit2, FiTrash } from 'solid-icons/fi';

import images from '@/constants/image';
import CommentForm from './form';

interface CommentProps {
    comment: {
        _id: string;
        user: {
            _id: string;
            name: string;
            avatar: string;
        };
        createdAt: string;
        desc: string;
    };
    loggedUserId: string | null;
    affectedComment: {
        type: string;
        _id: string;
    } | null;
    setAffectedComment: (comment: { type: string; _id: string } | null) => void;
    addComment: (value: string, repliedCommentId: string, replyOnUserId: string) => void;
    parentId?: string | null;
    updateComment: (value: string, commentId: string) => void;
    deleteComment: (commentId: string) => void;
    replies: {
        _id: string;
        user: {
            _id: string;
            name: string;
            avatar: string;
        };
        createdAt: string;
        desc: string;
    }[];
}

const Comment = (props: CommentProps) => {
    const [isEditing, setIsEditing] = createSignal(false);
    const [isReplying, setIsReplying] = createSignal(false);

    const {
        comment,
        loggedUserId,
        affectedComment,
        setAffectedComment,
        addComment,
        parentId = null,
        updateComment,
        deleteComment,
        replies,
    } = props;

    const isUserLoggined = Boolean(loggedUserId);
    const commentBelongsToUser = loggedUserId === comment.user._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    const handleEdit = () => {
        setIsEditing(true);
        setAffectedComment({ type: 'editing', _id: comment._id });
    };

    const handleDelete = () => {
        deleteComment(comment._id);
    };

    const handleReply = () => {
        setIsReplying(true);
        setAffectedComment({ type: 'replying', _id: comment._id });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsReplying(false);
        setAffectedComment(null);
    };

    const handleUpdate = (value: string) => {
        updateComment(value, comment._id);
        setIsEditing(false);
    };

    const handleAddReply = (value: string) => {
        addComment(value, repliedCommentId, replyOnUserId);
        setIsReplying(false);
    };

    return (
        <div class="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
            <img
                src={
                    // comment?.user?.avatar
                    //     ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
                    //     : images.userImage
                    images.userImage
                }
                alt="user profile"
                class="w-9 h-9 object-cover rounded-full"
            />
            <div class="flex-1 flex flex-col">
                <h5 class="font-bold text-dark-hard text-xs lg:text-sm">{comment.user.name}</h5>
                <span class="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
          })}
        </span>
                {!isEditing() && (
                    <p class="font-opensans mt-[10px] text-dark-light">{comment.desc}</p>
                )}
                {isEditing() && (
                    <CommentForm
                        btnLabel="Update"
                        formSubmitHandler={handleUpdate}
                        formCancelHandler={handleCancel}
                        initialText={comment.desc}
                    />
                )}
                <div class="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
                    {isUserLoggined && (
                        <button class="flex items-center space-x-2" onClick={handleReply}>
                            <FiMessageSquare class="w-4 h-auto" />
                            <span>Reply</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button class="flex items-center space-x-2" onClick={handleEdit}>
                                <FiEdit2 class="w-4 h-auto" />
                                <span>Edit</span>
                            </button>
                            <button class="flex items-center space-x-2" onClick={handleDelete}>
                                <FiTrash class="w-4 h-auto" />
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying() && (
                    <CommentForm
                        btnLabel="Reply"
                        formSubmitHandler={handleAddReply}
                        formCancelHandler={handleCancel}
                    />
                )}
                {replies.length > 0 && (
                    <div>
                        {replies.map((reply) => (
                            <Comment
                                addComment={addComment}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                comment={reply}
                                deleteComment={deleteComment}
                                loggedUserId={loggedUserId}
                                replies={[]}
                                updateComment={updateComment}
                                parentId={comment._id}></Comment>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;