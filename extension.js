// Show a notification.
function didOpen(params) {
  return; // Temporary disabled.
  AuroraEditor.respond("showNotification", {
    message: "Opened " + params.file,
  });
}

//  + " in " + val.workspace || "None",
// AuroraEditor.respond("openWindow", {
//   view: "test.JSext/test",
// });

// Open a JSON View.
AuroraEditor.respond("openWindow", {
  view: '[{"type": "Text","title": "Wait, am i generating views from JSON?"},{"type": "Button","title": "Click me!"},{"type": "Button","title": "Click me for a custom message!","eventHandler":"CustomEventHandler"}]',
});

// Create 2 files (test.extJSON and test.extHTML) if they do not exist.
AuroraEditor.respond("createFiles", {
  files: [
    {
      name: "test.extJSON",
      content: "Custom Editor",
      overwrite: false,
    },
    {
      name: "test.extHTML",
      content: "Custom Editor",
      overwrite: false,
    },
  ],
});

// Can we open the provided file?
function canOpen(params) {
  if (params.file.endsWith("extHTML") || params.file.endsWith("extJSON")) {
    return true;
  }

  return false;
}

// Build the custom editor.
function buildEditor(params) {
  if (params.file.endsWith("extJSON")) {
    return {
      view: [
        {
          type: "Text",
          title: "Wait, am i generating views from JSON?",
          modifiers: { foregroundStyle: "red", opacity: 0.6 },
        },
        {
          type: "Button",
          title: "Click me",
          eventHandler: "CustomEventHandler",
        },
        {
          type: "Toggle",
          title: "Toggle me",
          identifier: "my.toggle.1",
        },
      ],
    };
  }

  if (params.file.endsWith("extHTML")) {
    return {
      view: "<center><style>*{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>\") 16 0,auto;}</style><h1><img src='https://avatars.githubusercontent.com/u/106490518?s=256&v=4'><br>I AM A CUSTOM EDITOR!<br><marquee>This looks like fun?</marquee></h1></center>",
    };
  }

  return {
    view: [
      {
        type: "Text",
        title: "WARNING: This file is not supported",
        modifiers: { foregroundStyle: "red", opacity: 0.6 },
      },
    ],
  };
}

// Handle the event.
function uiElementChanged(params) {
  AuroraEditor.log(params);
  AuroraEditor.respond("showNotification", {
    message:
      "Clicked on a " +
      params.component.type +
      " with title " +
      params.component.title,
  });
}

// Custom event handler.
function CustomEventHandler(params) {
  AuroraEditor.respond("showNotification", {
    message: "i am a custom handler :)",
  });
}
