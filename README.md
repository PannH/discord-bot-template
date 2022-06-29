# 💻 Discord.js v13 - Template 🤖

A Discord bot template which works with slash commands. Made for [Discord.js v13](https://discord.js.org/#/docs/discord.js/v13/general/welcome).
This template includes an event handler, a command handler and built-in functions.

If you need help using the template, contact PannH by joining [dsc.gg/leo-support](https://dsc.gg/leo-support).

## 📥 Setup

- Install NPM packages with `npm install`.

- Provide your client's token in `.env` file.

- Start the program using `npm run start` command.

## 📡 Events

Events can be found in `src/events` directory.
Here's an event code example :
```js
const Event = require('../structures/Event');

// Replace EVENT_NAME with the event name (e.g.: 'interactionCreate').
// Replace '...params' with the event parameters (example with interactionCreate event: 'async (client, interaction) => {...}')
module.exports = new Event('EVENT_NAME', async (client, ...params) => {

    // Code to execute goes here...

});
```
> You can have more events with the `discord-events.js` package.

## ⌨️ Commands

Commands can be found in `src/commands` directory.
Here's a command code example :
```js
const SlashCommand = require('../structures/SlashCommand');

module.exports = new SlashCommand(async (ctx) => {

    // Code to execute goes here...

}, {
    // Replace COMMAND_NAME with the command name (e.g.: 'ping').
    name: 'COMMAND_NAME',
    slashData: {
        // Check https://discord.js.org/#/docs/discord.js/stable/typedef/ApplicationCommandData.
    }
});
```

## 🧮 Built-in Functions

### `randomElement(...)`
> Returns a random element from a given array.
Code example :
```js
const randomElement = require('path/to/functions/randomElement');

const fruitsArray = ['apple', 'pear', 'orange', 'strawberry'];
console.log(randomElement(fruitsArray)); // => Random element from 'fruitsArray'
```

### `randomInteger(...)`
> Returns a random integer between two given numbers.
Code example :
```js
const randomInteger = require('path/to/functions/randomInteger');

console.log(randomInteger(1, 5)); // => Random integer from 1 (included) to 5 (excluded)
```

### `removeElement(...)`
> Remove an element from a given array.
Code example :
```js
const removeElement = require('path/to/functions/removeElement');

const fruitsArray = ['apple', 'pear', 'orange', 'strawberry'];
removeElement(fruitsArray, 'pear'); // => Transform 'fruitsArray' to ['apple', 'orange', 'strawberry']
```

### `timestamp(...)`
> Format a timestamp to fit in Discord messages.
Code example :
```js
const timestamp = require('path/to/functions/timestamp');

console.log(timestamp(1656535980, 'f')); // Check the result below
```
![Timestamp Result](https://media.discordapp.net/attachments/737366213813862521/991809462799175700/unknown.png)
You can get the available types here: https://www.reddit.com/r/discordapp/comments/ob2h2l/discord_added_new_timestamp_formatting/
