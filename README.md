# Screenshot

<img width="793" alt="image" src="https://user-images.githubusercontent.com/1012787/191533089-bf4f1e04-8372-4744-9173-f59b49544ac8.png">

# What

This is a fork of [this original repo](https://github.com/aestellwag/plugin-call-disposition) to update the source-code to Flex 2.0

If you need to run this Plugin under Flex 1.x, go to branch `flex-1.x`.

# How

Create a task with these attributes, else the component won't render:

`{"reasonsUnselected": ["Login error","Change personal details"], "reasonsSelected": ["Insufficient Funds", "Failed Payment"]}`

# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

This plugin provides a modal Call Disposition window to agent after hangup (wrap up) to encourage agents to select the call outcome, before completing the call.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy --changelog "deploying plugin"
```

Then later execute the command that will show in the console, something like:

```bash
twilio flex:plugins:release --plugin ......
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.
