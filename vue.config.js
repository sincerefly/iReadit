module.exports = {
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
            "productName": "iReadit",
            "compression": "normal",
            "electronVersion": "6.0.9",
            "asar": true,
            "win": {
                "target": [
                    "dir"
                ],
                "icon": "src/assets/open-book.png",
                "files": [
                    "!logs",
                    "!databases"
                ]
            },
            "nsis": {
                "shortcutName": "iReadit",
                "oneClick": false,
                "perMachine": true,
                "allowToChangeInstallationDirectory": true
            },
            "extraFiles": [
                "EncryptDll.dll"
            ]
        },
      }
    }
  }