import {useState} from "react";
interface EditableTextProps {
    value: string;
    onSave: (v: string) => void;
}

export function EditableText({value , onSave}: EditableTextProps){
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(value);

    function startEditing(){
        setDraft(value)
        setIsEditing(true);
    }
    function save() {
        const trimmed = draft.trim();
        if(trimmed != ''){
            onSave(trimmed);
        }
        setIsEditing(false);
    }
    function cancel(){
        setIsEditing(false);
    }
    if(!isEditing){
        return ( <span onClick={startEditing}>{value}</span>)
    }
    return (
        <input autoFocus={true}
               value={draft}
               onChange={e => setDraft(e.target.value)}
               onBlur={save}
               onKeyDown={e => {
                   if(e.key === 'Enter'){
                       save()
                   } else if (e.key === 'Escape'){
                       cancel()
                   }
               }}
        />
    )
}