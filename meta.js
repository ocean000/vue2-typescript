module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "platform": {
      "type": "list",
      "message": "Platform",
      "choices": [
        {
          "name": "底座",
          "value": "app",
          "short": "app"
        },
        {
          "name": "微信",
          "value": "wechat",
          "short": "wechat"
        }
      ]
    },
    "identifier": {
      "when": "platform == 'app'",
      "type": "string",
      "required": false,
      "message": "Project identifier",
      "default": "com.app.msd.identifier"
    }
  },
  "filters": {
    "CubeModule.json": "platform == 'app'",
    "src/platform/**/*": "platform == 'app'"
  },
  "skipInterpolation": "src/**/*.vue",
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
