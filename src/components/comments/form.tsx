import {Component, createSignal, onCleanup} from 'solid-js';

export interface CommentFormProps {
    initialText?:string;
    formSubmitHandler: (value: string) => void;
    formCancelHandler?: () => void;
    loading?:boolean;
    btnLabel:string;
}

const CommentForm:Component<CommentFormProps> = (props) => {
    const [value, setValue] = createSignal(props.initialText);

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.formSubmitHandler(value() as string);
        setValue("");
    };

    onCleanup(() => {
        setValue(""); // 清空 value
    });

    return (
        <form onSubmit={submitHandler}>
            <div class="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
            class="w-full focus:outline-none bg-transparent"
            rows="5"
            placeholder="Leave your comment here..."
            value={value()}
            onInput={(e) => setValue(e.target.value)}
        />
                <div class="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
                    {props.formCancelHandler && (
                        <button
                            onClick={props.formCancelHandler}
                            class="px-6 py-2.5 rounded-lg border border-red-500 text-red-500"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        disabled={props.loading}
                        type="submit"
                        class="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {props.btnLabel}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;