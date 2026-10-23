import { useState} from "react";

interface  AddFormProps{
    placeholder:string;
    buttonLabel:string;
    onAdd: (title:string) => void;
}

export function AddForm({placeholder, buttonLabel, onAdd}: AddFormProps){
    const [text, setText] = useState('');

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const title = text.trim()
        if(!title){
            return;
        }
        onAdd(title);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder={placeholder} />
            <button type="submit">
                {buttonLabel}
            </button>
        </form>
    )
}