# Aurora Editor

## Test JavaScript Extension.

This is a test extension for the Aurora Editor. It is written in JavaScript and demonstrates how to create a simple extension for the Aurora Editor.

### (Automated) Installation

To install this extension automatically, run the following command in the root directory of the Aurora Editor:

```bash
# Create "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext"
mkdir -p "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext"

# Curl the extension manifest file into the directory
curl -o "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext/extension.json" https://raw.githubusercontent.com/0xWDG/AEJSExtension/main/extension.json

# Curl the extension script file into the directory
curl -o "$HOME/Library/Application Support/com.auroraeditor/Extensions/test.JSext/extension.js" https://raw.githubusercontent.com/0xWDG/AEJSExtension/main/extension.js
```

### (Manual) Installation

To install this extension, clone this repository and move the files to the `~/Library/Application Support/com.auroraeditor/Extensions/test.JSext` directory.
