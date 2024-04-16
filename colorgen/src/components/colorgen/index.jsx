import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length) //math random generates a number between 0 and 1 that is a whole number nor 1
        //Multiplying math by the length of hex chooses a number between 1 and 15 and math.floor rounds it
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9,
            'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#' //since hexColor is a string, we can add numbers and they wont get added to each other

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)] // passes in length which then gives back value between 1 and 15 and then adds it to hex
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        //math.random times 256 generates a number between 1-256

        setColor(`rgb(${r},${g},${b})`);
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}
        >
            <button onClick={() => setTypeOfColor('hex')}> Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}> Create RGB Color</button>
            <button onClick={typeOfColor === 'hex'
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor}>
                Generate Random Color
            </button>
            <div style={{ //letters showing the color smack middle of the screen
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffffff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1> {color} </h1>
            </div>
        </div>
    );
}