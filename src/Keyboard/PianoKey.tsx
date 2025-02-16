import React from "react";
import { Button } from "react-bootstrap";

interface Note {
    name: string;
    file: string;
    color: string;
}

export default function PianoKey({ note }: { note: Note }) {
    const handleClick = () => {
        const audio = new Audio(note.file);
        audio.play();
    };
    return (
        <Button
            className={note.name.includes("#") ? "black-key" : "white-key"}
            id={`p-${note.name}`}
            onClick={handleClick}
        >
            <label className="key-label">{note.name}</label>
        </Button>);
}