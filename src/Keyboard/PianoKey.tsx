import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

interface Note {
    name: string;
    file: string;
    color: string;
    key: string;
}

export default function PianoKey({ note }: { note: Note }) {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        const audio = new Audio(note.file);
        audio.play();
    };

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key.toUpperCase() === note.key.toUpperCase()) {
            setIsPressed(true);
            const audio = new Audio(note.file);
            audio.play();
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key.toUpperCase() === note.key.toUpperCase()) {
            setIsPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [note.key]);


    const buttonClass = `${note.name.includes("#") ? "black-key" : "white-key"} ${isPressed ? "active-key" : ""
        }`;

    return (
        <Button
            className={buttonClass}
            id={`p-${note.name}`}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <label className="key-label">{note.name}</label>
        </Button>
    );
}