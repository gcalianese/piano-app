import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

interface Note {
    name: string;
    file: string;
    color: string;
    key: string;
}

export default function PianoKey({ note }: { note: Note }) {
    const handleClick = () => {
        const audio = new Audio(note.file);
        audio.play();
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key.toUpperCase() === note.key.toUpperCase()) {
            handleClick();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [note.key]);

    return (
        <Button
            className={note.name.includes("#") ? "black-key" : "white-key"}
            id={`p-${note.name}`}
            onClick={handleClick}
        >
            <label className="key-label">{note.name}</label>
        </Button>);
}