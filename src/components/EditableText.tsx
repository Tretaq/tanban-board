import {useState} from "react";
interface EditableTextProps {
    text: string;
    onSave: (newValue: string) => void;
}

export function