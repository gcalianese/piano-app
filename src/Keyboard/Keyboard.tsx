import PianoKey from "./pianoKey";
import notes from "./notes.json";

export default function Keyboard() {
    return (
        <div id="key-container">
            {Object.values(notes).map((note) => (
                <PianoKey key={note.name} note={note} />
            ))}
        </div>
    );
}