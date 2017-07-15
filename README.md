
Johnny-Five Adapter for Nefry 

## Install

```
npm i --save johnny-five nefry-io
```

## How to use

```app.js
'use strict';

const five = require("johnny-five");
const Nefry = require('nefry-io');

const board = new five.Board({
    io: new Nefry('12.12.12.12') // Your IP Address
});

board.on("ready", () => {
    const led = new five.Led(18);
    led.blink(1000);
});
```