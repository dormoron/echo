import { JSX, createSignal } from 'solid-js';

import Comment from './comment';
import CommentForm from './form';
import {createMutation, useQueryClient} from '@tanstack/solid-query';

interface CommentsContainerProps {
    className: string;
    loggedUserId: string;
    comments: {
        _id: string;
        user: {
            _id: string;
            name: string;
            avatar: string;
        };
        createdAt: string;
        desc: string;
        replies: { _id: string,user: {
                _id: string;
                name: string;
                avatar: string;
            };
            createdAt: string;
            desc: string; }[];
    }[];
    postSlug: string;
}

const CommentsContainer = (props: CommentsContainerProps): JSX.Element => {
    const queryClient = useQueryClient();
    // const userState = useSelector((state) => state.user);
    const [affectedComment, setAffectedComment] = createSignal<{ type: string; _id: string } | null>(null);

    const { mutate: mutateNewComment, isPending: isLoadingNewComment } = createMutation({
        // mutationFn: ({ token, desc, slug, parent, replyOnUser }: any) => {
        //     return createNewComment({ token, desc, slug, parent, replyOnUser });
        // },
        // onError: (error: any) => {
        //     console.log(error);
        // },
    });

    // const { mutate: mutateUpdateComment } = createMutation({
    //     // mutationFn: ({ token, desc, commentId }: any) => {
    //     //     // return updateComment({ token, desc, commentId });
    //     // },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(['blog', props.postSlug]);
    //     },
    //     onError: (error: any) => {
    //         console.log(error);
    //     },
    // });

    // const { mutate: mutateDeleteComment } = createMutation({
    //     // "mutationFn": ({ token, desc, commentId }: any) => {
    //     //     // return deleteComment({ token, commentId });
    //     //     console.log(token)
    //     // },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(['blog', props.postSlug]);
    //     },
    //     onError: (error: any) => {
    //         console.log(error);
    //     },
    // });

    const addCommentHandler = (value: string, parent: string | null = null, replyOnUser: string | null = null) => {
        // mutateNewComment({
        //     desc: value,
        //     parent,
        //     replyOnUser,
        //     token: userState.userInfo.token,
        //     slug: props.postSlug,
        // });
        setAffectedComment(null);
    };

    const updateCommentHandler = (value: string, commentId: string) => {
        // mutateUpdateComment({
        //     token: userState.userInfo.token,
        //     desc: value,
        //     commentId,
        // });
        setAffectedComment(null);
    };

    const deleteCommentHandler = (commentId: string) => {
        // mutateDeleteComment({ token: userState.userInfo.token, commentId });
    };

    return (
        <div class={props.className}>
            <CommentForm
                btnLabel="Send"
                formSubmitHandler={(value: string) => addCommentHandler(value)}
                loading={isLoadingNewComment}/>
            <div class="space-y-4 mt-8">
                {props.comments.map((comment) => (
                    <Comment
                        comment={comment}
                        loggedUserId={props.loggedUserId}
                        affectedComment={affectedComment()}
                        setAffectedComment={setAffectedComment}
                        addComment={addCommentHandler}
                        updateComment={updateCommentHandler}
                        deleteComment={deleteCommentHandler}
                        replies={comment.replies}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentsContainer;
