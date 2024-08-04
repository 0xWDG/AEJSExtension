#/usr/bin/env bash

# Create "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext"
mkdir -p "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext"

# Curl the extension manifest file into the directory
curl -o "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext/extension.json" https://raw.githubusercontent.com/0xWDG/AEJSExtension/main/extension.json

# Curl the extension script file into the directory
curl -o "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext/extension.js" https://raw.githubusercontent.com/0xWDG/AEJSExtension/main/extension.js