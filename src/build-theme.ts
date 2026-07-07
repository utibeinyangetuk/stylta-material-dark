type TokenColor = {
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: "italic" | "bold" | "underline" | "";
  };
};
type semanticTokenColor = {
  rules: Record<string, string>;
};
type VscodeTheme = {
  $schema: string;
  name: string;
  type: "dark" | "light";
  semanticHighlighting: boolean;
  semanticTokenColors?: semanticTokenColor;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
};
const baseColors = {
  git: {
    added: "#C3E88D",
    modified: "#82AAFF",
    conflicting: "#FF5370",
    stageModified: "#89DDFF",
    deleted: "#FF5370",
    stageDeleted: "#F78C6C",
    untracked: "#C3E88D",
    ignored: "#5A5A5A",
    submodule: "#C792EA",
  },
  border: { pry: "#bbbbbb29", sec: "#33333368", active: "#82AAFF" },
  button: {
    pry: "#82AAFF",
    pryHover: "#4D8DFF",
    pryForeground: "#000000",
    sec: "#1A1A1A",
    secHover: "#222222",
    secForeground: "#E0E0E0",
  },
  blue: "#82AAFF",
  background: "#000000",
  selection: "#1a1a1abc",
  dropBackground: "#0A0A0A",
  transparent: "#00000000",
  foreground: {
    pry: "#E0E0E0",
    sec: "#b3b3b3e6",
    inactive: "#8a8a8a7a",
    active: "#f5f5f5",
    black: "#000000",
    highlight: "#82AAFF",
  },
  error: {
    foreground: "#FF5370",
    background: "#2A1018",
    border: "#D94360",
  },
  warning: {
    foreground: "#FFCB6B",
    background: "#102014",
    border: "#D9AE54",
  },
  success: {
    foreground: "#C3E88D",
    background: "#102014",
    border: "#A8CC76",
  },
  info: {
    foreground: "#82AAFF",
    background: "#101B2D",
    border: "#6D95E8",
  },
  hover: {
    default: "#121212",
    active: "#1A1A1A",
  },
};
const darkTheme: VscodeTheme = {
  $schema: "vscode://schemas/color-theme",
  name: "Stylta Flow Dark",
  type: "dark",
  semanticHighlighting: true,
  colors: {
    //Backgrounds
    "editor.background": baseColors.background,
    "statusBar.background": baseColors.background,
    "dropdown.background": baseColors.background,
    "input.background": baseColors.background,
    "panel.background": baseColors.background,
    "button.background": baseColors.button.pry,
    "breadcrumb.background": baseColors.background,
    "breadcrumbPicker.background": baseColors.background,
    "checkbox.background": baseColors.background,
    "quickInput.background": baseColors.background,
    "keybindingLabel.background": baseColors.background,
    "statusBar.debuggingBackground": baseColors.blue,
    "debugToolBar.background": baseColors.background,
    "editorGroupHeader.tabsBackground": baseColors.background,
    "editorGroupHeader.noTabsBackground": baseColors.background,
    "editorGroup.emptyBackground": baseColors.background,
    "editorWidget.background": baseColors.background,
    "statusBar.noFolderBackground": baseColors.background,
    "statusBarItem.prominentBackground": baseColors.background,
    "activityBar.background": baseColors.background,
    "menu.background": baseColors.background,
    "sideBar.background": baseColors.background,
    "sideBarSectionHeader.background": baseColors.background,

    //indent trees in the sidebar
    "tree.inactiveIndentGuidesStroke": "#1A1A1A",
    "tree.indentGuidesStroke": "#222222",

    //Links
    "textLink.foreground": baseColors.blue,
    "textLink.activeForeground": "#89DDFF",

    //Unnecessary code
    "editorUnnecessaryCode.opacity": "#00000060",

    //ContrastBorder
    contrastBorder: baseColors.background,
    // 'contrastActiveBorder': '#ff0',

    //Extension
    "extensionBadge.remoteBackground": "#82AAFF",
    "extensionIcon.preReleaseForeground": "#89DDFF",
    "extensionIcon.sponsorForeground": "#C792EA",
    "extensionIcon.starForeground": "#FFCB6B",
    "extensionIcon.verifiedForeground": "#C3E88D",

    //focusBorder
    focusBorder: baseColors.transparent,

    //CodeLens
    "editorCodeLens.foreground": baseColors.foreground.sec,
    "editorLightBulb.foreground": "#FFCB6B",
    "editorLightBulbAutoFix.foreground": "#C3E88D",

    //Quickinnput
    "quickInput.foreground": baseColors.foreground.sec,
    "quickInputList.focusBackground": baseColors.hover.default,
    "quickInputList.focusForeground": baseColors.foreground.pry,
    "quickInputList.focusHighlightForeground": baseColors.blue,
    "quickInputList.focusIconForeground": baseColors.blue,

    //foreground
    foreground: baseColors.foreground.pry,

    // Welcome page and Walkthrough
    "walkThrough.embeddedEditorBackground": baseColors.background,
    "welcomePage.tileHoverBackground": baseColors.selection,
    "walkthrough.stepTitle.foreground": baseColors.foreground.pry,
    "welcomePage.progress.background": baseColors.button.pry,

    //StatusBar
    "statusBar.foreground": baseColors.foreground.sec,
    "statusBar.border": baseColors.transparent,
    "statusBar.debuggingBorder": baseColors.transparent,
    "statusBarItem.hoverBackground": baseColors.hover.default,
    "statusBar.focusBorder": baseColors.blue,
    "statusBarItem.remoteBackground": baseColors.blue,
    "statusBarItem.remoteForeground": baseColors.foreground.black,
    "statusBar.debuggingForeground": baseColors.foreground.black,
    "statusBar.noFolderBorder": baseColors.transparent,
    "statusBar.noFolderForeground": baseColors.foreground.sec,
    "statusBarItem.activeBackground": baseColors.background,
    "statusBarItem.warningBackground": baseColors.warning.background,
    "statusBarItem.warningForeground": baseColors.warning.foreground,
    "statusBarItem.errorBackground": baseColors.error.background,
    "statusBarItem.errorForeground": baseColors.error.foreground,
    "statusBarItem.compactHoverBackground": baseColors.background,
    "statusBarItem.prominentForeground": baseColors.foreground.pry,
    "statusBarItem.prominentHoverBackground": baseColors.background,

    // checkbox
    "checkbox.border": baseColors.border.pry,
    "checkbox.foreground": baseColors.foreground.pry,

    // git
    "gitDecoration.addedResourceForeground": baseColors.git.added,
    "gitDecoration.modifiedResourceForeground": baseColors.git.modified,
    "gitDecoration.conflictingResourceForeground": baseColors.git.conflicting,
    "gitDecoration.stageModifiedResourceForeground":
      baseColors.git.stageModified,
    "gitDecoration.deletedResourceForeground": baseColors.git.deleted,
    "gitDecoration.stageDeletedResourceForeground": baseColors.git.stageDeleted,
    "gitDecoration.untrackedResourceForeground": baseColors.git.untracked,
    "gitDecoration.ignoredResourceForeground": baseColors.git.ignored,
    "gitDecoration.submoduleResourceForeground": baseColors.git.submodule,
    "gitlens.trailingLineBackgroundColor": baseColors.transparent,

    //sideBar
    "sideBar.border": baseColors.transparent,
    "sideBar.foreground": baseColors.foreground.sec,
    "sideBar.dropBackground": baseColors.dropBackground,
    "sideBarSectionHeader.foreground": baseColors.foreground.pry,
    "sideBarSectionHeader.border": baseColors.border.sec,

    //dropDown
    "dropdown.border": baseColors.border.pry,
    "dropdown.foreground": baseColors.foreground.sec,

    // sash (the draggable divider between panels)
    "sash.hoverBorder": baseColors.border.pry,

    //Minimap
    "minimap.selectionHighlight": "#82AAFF66",
    "minimap.errorHighlight": "#FF537099",
    "minimap.findMatchHighlight": "#FFCB6B66",

    "minimap.foregroundOpacity": "#FFFFFF",

    "minimap.selectionOccurrenceHighlight": "#89DDFF66",
    "minimap.warningHighlight": "#F78C6C99",

    "minimapGutter.addedBackground": "#C3E88D",
    "minimapGutter.deletedBackground": "#FF5370",
    "minimapGutter.modifiedBackground": "#82AAFF",

    // Menu
    "menu.border": baseColors.border.sec,
    "menu.selectionBackground": baseColors.selection,
    "menu.foreground": baseColors.foreground.sec,
    "menu.selectionBorder": baseColors.border.sec,
    "menu.separatorBackground": baseColors.border.sec,

    //SymbolIcon
    "symbolIcon.arrayForeground": "#9CA3AF",
    "symbolIcon.booleanForeground": "#D946EF",
    "symbolIcon.classForeground": "#22D3EE",
    "symbolIcon.constantForeground": "#FB923C",
    "symbolIcon.constructorForeground": "#60A5FA",
    "symbolIcon.enumeratorMemberForeground": "#FB923C",
    "symbolIcon.eventForeground": "#60A5FA",
    "symbolIcon.fieldForeground": "#F472B6",
    "symbolIcon.fileForeground": "#9CA3AF",
    "symbolIcon.folderForeground": "#A78BFA",
    "symbolIcon.functionForeground": "#60A5FA",
    "symbolIcon.interfaceForeground": "#22D3EE",
    "symbolIcon.keyForeground": "#A78BFA",
    "symbolIcon.keywordForeground": "#8B5CF6",
    "symbolIcon.methodForeground": "#60A5FA",
    "symbolIcon.moduleForeground": "#F43F5E",
    "symbolIcon.namespaceForeground": "#F43F5E",
    "symbolIcon.nullForeground": "#D946EF",
    "symbolIcon.numberForeground": "#F97316",
    "symbolIcon.objectForeground": "#C084FC",
    "symbolIcon.operatorForeground": "#22D3EE",
    "symbolIcon.packageForeground": "#F43F5E",
    "symbolIcon.propertyForeground": "#D1D5DB",
    "symbolIcon.snippetForeground": "#8B5CF6",
    "symbolIcon.stringForeground": "#4ADE80",
    "symbolIcon.structForeground": "#22D3EE",
    "symbolIcon.textForeground": "#E5E7EB",
    "symbolIcon.typeParameterForeground": "#E879F9",
    "symbolIcon.unitForeground": "#F97316",
    "symbolIcon.variableForeground": "#D1D5DB",

    //Tabs
    "tab.border": baseColors.transparent,
    "tab.inactiveBackground": baseColors.background,
    "tab.inactiveForeground": baseColors.foreground.inactive,
    "tab.activeBackground": baseColors.background,
    "tab.activeForeground": baseColors.foreground.active,
    "tab.activeModifiedBorder": baseColors.border.active,
    "tab.hoverBackground": baseColors.selection,
    "tab.hoverForeground": baseColors.foreground.active,
    "tab.dragAndDropBorder": baseColors.border.pry,
    "tab.activeBorderTop": baseColors.border.active,
    "tab.unfocusedActiveBorderTop": baseColors.background,
    "editorGroupHeader.border": baseColors.background,

    //breadCrumbs
    "breadcrumb.foreground": baseColors.foreground.sec,
    "breadcrumb.focusForeground": baseColors.foreground.pry,
    "breadcrumb.activeSelectionForeground": baseColors.foreground.pry,

    //editorLine number
    "editorLineNumber.foreground": baseColors.foreground.sec,
    "editorLineNumber.activeForeground": baseColors.blue,

    //keybinding label
    "keybindingLabel.border": baseColors.border.pry,
    "keybindingLabel.bottomBorder": baseColors.transparent,
    "keybindingLabel.foreground": baseColors.foreground.pry,

    // List
    "list.hoverBackground": baseColors.selection,
    "list.inactiveSelectionBackground": baseColors.selection,
    "list.activeSelectionBackground": baseColors.selection,
    "list.inactiveFocusBackground": baseColors.selection,
    "list.focusBackground": baseColors.selection,
    "list.dropBackground": baseColors.dropBackground,

    //EditorGroup
    "editorGroup.border": baseColors.border.sec,
    "editorGroup.dropBackground": baseColors.dropBackground,
    "editorGroupHeader.tabsBorder": baseColors.border.sec,

    //badges
    "badge.background": baseColors.blue,
    "badge.foreground": baseColors.foreground.black,

    //settings page
    "settings.headerBorder": baseColors.border.sec,
    "settings.focusedRowBorder": baseColors.border.pry,

    //Notifications
    "notificationCenter.border": baseColors.border.pry,
    "notificationCenterHeader.background": baseColors.background,
    "notificationCenterHeader.foreground": baseColors.foreground.pry,
    "notifications.background": baseColors.background,
    "notifications.foreground": baseColors.foreground.sec,
    "notificationToast.border": baseColors.border.pry,
    "notificationLink.foreground": baseColors.foreground.highlight,

    //Scrollbar
    "scrollbar.shadow": "#00000022",
    "scrollbarSlider.background": baseColors.hover.default,
    "scrollbarSlider.hoverBackground": baseColors.hover.active,
    "scrollbarSlider.activeBackground": "#82AAFF66",

    //activity bar
    "activityBar.activeBorder": baseColors.transparent,
    "activityBar.border": baseColors.transparent,
    "activityBar.foreground": baseColors.foreground.pry,
    "activityBar.inactiveForeground": baseColors.foreground.inactive,
    "activityBarBadge.background": baseColors.blue,
    "activityBarBadge.foreground": baseColors.foreground.black,

    // Button
    "button.hoverBackground": baseColors.button.pryHover,
    "button.foreground": baseColors.button.pryForeground,
    "button.secondaryBackground": baseColors.button.sec,
    "button.secondaryHoverBackground": baseColors.button.secHover,
    "button.secondaryForeground": baseColors.button.secForeground,
    "button.border": baseColors.border.sec,
    "button.secondaryBorder": baseColors.border.sec,
    "button.separator": baseColors.border.sec,

    //Input
    "input.border": baseColors.border.pry,
    "input.foreground": baseColors.foreground.pry,
    "input.placeholderForeground": baseColors.foreground.sec,
    "inputValidation.errorBorder": baseColors.error.border,
    "inputValidation.errorBackground": baseColors.error.background,
    "inputValidation.infoBorder": baseColors.info.border,
    "inputValidation.infoBackground": baseColors.info.background,
    "inputValidation.infoForeground": baseColors.info.foreground,
    "inputValidation.warningBorder": baseColors.warning.border,
    "inputValidation.warningForeground": baseColors.warning.foreground,
    "inputValidation.warningBackground": baseColors.warning.background,

    //TitleBar
    "titleBar.activeBackground": baseColors.background,
    "titleBar.inactiveBackground": baseColors.background,
    "titleBar.activeForeground": baseColors.foreground.pry,
    "titleBar.inactiveForeground": baseColors.foreground.inactive,

    // Widget (find/replace, tooltip, suggest widget when typing and hovering and the rest)
    "widget.shadow": "#00000022",
    "editorSuggestWidget.foreground": baseColors.foreground.sec,
    "editorSuggestWidget.highlightForeground": baseColors.foreground.highlight,
    "editorSuggestWidget.selectedBackground": baseColors.selection,
    "editorSuggestWidget.border": baseColors.border.pry,
    "editorHoverWidget.border": baseColors.border.pry,
    "editorHoverWidget.background": "#121111",
    "editorHoverWidget.foreground": baseColors.foreground.pry,

    //debug
    "debugToolBar.border": baseColors.border.pry,
    "debugConsole.errorForeground": baseColors.error.foreground,
    "debugConsole.infoForeground": baseColors.info.foreground,
    "debugConsole.warningForeground": baseColors.warning.foreground,
    "debugExceptionWidget.background": baseColors.background,
    "debugExceptionWidget.border": baseColors.error.foreground,

    //EditorOverviewRuler
    "editorOverviewRuler.currentContentForeground": "#82AAFF",
    "editorOverviewRuler.incomingContentForeground": "#C3E88D",
    "editorOverviewRuler.commonContentForeground": "#8A8A8A",

    // MergeEditor Conflict
    "merge.currentHeaderBackground": "#82AAFF33",
    "merge.currentContentBackground": "#82AAFF1A",
    "merge.incomingHeaderBackground": "#C3E88D33",
    "merge.incomingContentBackground": "#C3E88D1A",
    "merge.border": baseColors.transparent,
    "mergeEditor.conflict.handledFocused.border": "#82AAFF",
    "mergeEditor.conflict.handledUnfocused.border": "#C3E88D",
    "mergeEditor.conflict.handled.minimapOverViewRuler": "#C3E88D",
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#F78C6C",
    "mergeEditor.conflict.unhandledFocused.border": "#82AAFF",
    "mergeEditor.conflict.unhandledUnfocused.border": "#F78C6C",
    "mergeEditor.conflictingLines.background": "#FF53701A",
    "mergeEditor.change.background": "#C3E88D22",
    "mergeEditor.change.word.background": "#C3E88D40",

    // Charts
    "charts.blue": "#82AAFF",
    "charts.green": "#C3E88D",
    "charts.orange": "#F78C6C",
    "charts.purple": "#C792EA",
    "charts.red": "#FF5370",
    "charts.yellow": "#FFCB6B",
    "charts.foreground": "#B3B3B3",
    "charts.lines": "#222222",

    //Editor Brackets
    "editorBracketHighlight.foreground1": "#C792EA",
    "editorBracketHighlight.foreground2": "#82AAFF",
    "editorBracketHighlight.foreground3": "#89DDFF",
    "editorBracketHighlight.foreground4": "#C3E88D",
    "editorBracketHighlight.foreground5": "#FFCB6B",
    "editorBracketHighlight.foreground6": "#F78C6C",
    "editorBracketHighlight.unexpectedBracket.foreground": "#FF5370",
    "editorBracketPairGuide.activeBackground1": "#C792EAcc",
    "editorBracketPairGuide.activeBackground2": "#82AAFFcc",
    "editorBracketPairGuide.activeBackground3": "#89DDFFcc",
    "editorBracketPairGuide.activeBackground4": "#C3E88Dcc",
    "editorBracketPairGuide.activeBackground5": "#FFCB6Bcc",
    "editorBracketPairGuide.activeBackground6": "#F78C6Ccc",
    "editorBracketMatch.background": "#121212",
    "editorBracketMatch.border": "#82aaff83",

    // Icons
    "selection.background": baseColors.selection,
    errorForeground: baseColors.error.foreground,
    "icon.foreground": baseColors.foreground.sec,
    "progressBar.background": baseColors.blue,
    "problemsErrorIcon.foreground": baseColors.error.foreground,
    "problemsInfoIcon.foreground": baseColors.blue,
    "problemsWarningIcon.foreground": baseColors.warning.foreground,

    //diff editor
    "diffEditor.diagonalFill": "#222222",
    "diffEditor.insertedLineBackground": "#102014eb",
    "diffEditor.insertedTextBackground": "#C3E88D33",
    "diffEditor.removedLineBackground": "#2a1018eb",
    "diffEditor.removedTextBackground": "#FF537033",
    "diffEditor.unchangedCodeBackground": baseColors.background,
    "diffEditor.unchangedRegionBackground": "#1A1A1A",
    "diffEditor.unchangedRegionForeground": "#8A8A8A",
  },
  semanticTokenColors: {
    rules: {
      "variable.defaultLibrary": "#C792EA",
      operatorOverload: "#89DDFF",
      memberOperatorOverload: "#89DDFF",
      "variable.defaultLibrary:javascript": "#C792EA",
      "property.defaultLibrary:javascript": "#C792EA",
      "variable.defaultLibrary:javascriptreact": "#C792EA",
      "property.defaultLibrary:javascriptreact": "#C792EA",
      "class:typescript": "#FFCB6B",
      "interface:typescript": "#FFCB6B",
      "enum:typescript": "#F78C6C",
      "enumMember:typescript": "#F78C6C",
      "namespace:typescript": "#82AAFF",
      "property.defaultLibrary:typescript": "#C792EA",
      "class:typescriptreact": "#FFCB6B",
      "interface:typescriptreact": "#FFCB6B",
      "enum:typescriptreact": "#F78C6C",
      "enumMember:typescriptreact": "#F78C6C",
      "namespace:typescriptreact": "#82AAFF",
      "variable.defaultLibrary:typescriptreact": "#C792EA",
      "property.defaultLibrary:typescriptreact": "#C792EA",
      "intrinsic:python": "#C792EA",
      "module:python": "#82AAFF",
      "class:python": "#FFCB6B",
      "macro:rust": "#82AAFF",
      "namespace:rust": "#82AAFF",
      "selfKeyword:rust": "#FF5370",
      function: "#82AAFF",
      method: "#82AAFF",
      variable: "#E0E0E0",
      parameter: "#D4D4D4",
      property: "#89DDFF",
      keyword: "#C792EA",
      string: "#C3E88D",
      number: "#F78C6C",
      typeParameter: "#FFCB6B",
      "property:jsx": "#89DDFF",
      "parameter:jsx": "#D4D4D4",
      "class:jsx": "#FFCB6B",
      type: "#FFCB6B",
      decorator: "#C792EA",
      label: "#82AAFF",
      regexp: "#C3E88D",
      operator: "#C792EA",
    },
  },
  tokenColors: [
    //  EMBEDDED LANGUAGES
    {
      scope: [
        "meta.embedded.block.html",
        "meta.embedded.block.javascript",
        "meta.embedded.block.css",
      ],
      settings: {
        foreground: "#E0E0E0",
      },
    },
    {
      scope: [
        "source.css.embedded.html",
        "source.js.embedded.html",
        "source.js.embedded.vue",
        "source.ts.embedded.vue",
      ],
      settings: {
        foreground: "#E0E0E0",
      },
    },
    {
      scope: [
        "source.css.embedded.html",
        "source.js.embedded.html",
        "source.js.embedded.vue",
        "source.ts.embedded.vue",
      ],
      settings: {
        foreground: "#E0E0E0",
        fontStyle: "",
      },
    },
    {
      scope: [
        "markup.heading",
        "markup.bold",
        "markup.italic",
        "markup.strikethrough",
        "markup.underline",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "bold",
      },
    },
    //  MARKDOWN
    {
      scope: [
        "markup.quote",
        "markup.raw",
        "markup.raw.block.fenced",
        "markup.link",
        "markup.list",
      ],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    {
      scope: ["markup.code", "markup.inline.raw"],
      settings: {
        foreground: "#C3E88D",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.operator.type.ts",
        "keyword.other.type.ts",
        "entity.name.type.interface.ts",
        "storage.type.ts",
        "storage.type.js",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.control.flow.python",
        "keyword.control.import.python",
        "storage.type.python",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["meta.function.parameters.python"],
      settings: {
        foreground: "#D4D4D4",
        fontStyle: "",
      },
    },
    {
      scope: [
        "storage.type.c",
        "storage.type.cpp",
        "storage.type.cs",
        "storage.type.go",
        "storage.type.java",
        "storage.type.rust",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: ["keyword.control.c", "keyword.control.cpp"],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.other.DML.sql",
        "keyword.other.DDL.sql",
        "keyword.other.DCL.sql",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["support.function.builtin.sql"],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    // LANGUAGE SPECIFIC OVERRIDES
    {
      scope: [
        "keyword.operator.type.ts",
        "keyword.other.type.ts",
        "entity.name.type.interface.ts",
        "storage.type.ts",
        "storage.type.js",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.control.flow.python",
        "keyword.control.import.python",
        "storage.type.python",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["meta.function.parameters.python"],
      settings: {
        foreground: "#D4D4D4",
        fontStyle: "",
      },
    },
    {
      scope: [
        "storage.type.c",
        "storage.type.cpp",
        "storage.type.cs",
        "storage.type.go",
        "storage.type.java",
        "storage.type.rust",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: ["keyword.control.c", "keyword.control.cpp"],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.other.DML.sql",
        "keyword.other.DDL.sql",
        "keyword.other.DCL.sql",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["support.function.builtin.sql"],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    // DIFF / GIT
    {
      scope: ["markup.deleted.diff"],
      settings: {
        foreground: "#FF5370",
        fontStyle: "",
      },
    },
    {
      scope: ["markup.inserted.diff"],
      settings: {
        foreground: "#C3E88D",
        fontStyle: "",
      },
    },
    {
      scope: ["markup.changed.diff"],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    // HTML / CSS / PUG / VUE / SVELTE
    {
      scope: [
        "entity.name.tag",
        "entity.name.tag.html",
        "entity.name.tag.pug",
        "entity.name.tag.vue",
        "entity.name.tag.svelte",
        "meta.tag",
      ],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    {
      scope: [
        "entity.other.attribute-name",
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.class",
        "keyword.attribute.pug",
      ],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword.other.pug",
        "keyword.other.at-rule",
        "keyword.other.important",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["support.type.property-name.css", "meta.property-name.css"],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: ["constant.other.color.rgb-value", "constant.other.color.hex"],
      settings: {
        foreground: "#F78C6C",
        fontStyle: "",
      },
    },
    //JSON / YAML / TOML
    {
      scope: [
        "support.type.property-name.json",
        "meta.object-literal.key",

        "entity.name.tag.yaml",
        "constant.other.anchor.yaml",
        "entity.name.tag.reference.yaml",

        "entity.name.section.toml",
        "entity.name.key.toml",
      ],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    // REGEX
    {
      scope: ["string.regexp"],
      settings: {
        foreground: "#C3E88D",
        fontStyle: "",
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "constant.other.character-class.regexp",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: ["string.regexp.group"],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: ["keyword.operator.regexp"],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    //  FUNCTIONS
    {
      scope: [
        "entity.name.function",
        "support.function",
        "support.function.builtin",
        "support.function.construct",
        "meta.function-call",
        "meta.function",
      ],
      settings: {
        foreground: "#82AAFF",
        fontStyle: "",
      },
    },
    {
      scope: ["entity.name.function.decorator"],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    {
      scope: ["meta.function.parameters"],
      settings: {
        foreground: "#D4D4D4",
        fontStyle: "",
      },
    },
    // TYPES + CLASSES + INTERFACES + ENUMS
    {
      scope: ["entity.name.class", "support.class"],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.interface",
        "entity.name.enum",
        "support.type",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    // KEYWORDS + CONTROL FLOW + STORAGE + MODULES
    {
      scope: [
        "keyword.operator",
        "keyword.operator.assignment",
        "keyword.operator.logical",
        "keyword.operator.comparison",
      ],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.control.flow",
        "keyword.control.import",
        "keyword.control.export",
        "storage",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: "#C792EA",
        fontStyle: "",
      },
    },
    // LANGUAGE CONSTANTS: this, self, super, true, false, null
    {
      scope: [
        "variable.language",
        "variable.language.this",
        "variable.language.super",
        "variable.language.self",
        "variable.language.special",
        "constant.language",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined",
      ],
      settings: {
        foreground: "#F78C6C",
        fontStyle: "",
      },
    },
    // LITERALS: STRINGS
    {
      scope: [
        "string",
        "string.quoted",
        "string.quoted.double",
        "string.quoted.single",
        "string.quoted.triple",

        "string.template",

        "meta.string",
        "meta.string.contents",
      ],
      settings: {
        foreground: "#C3E88D",
        fontStyle: "",
      },
    },
    {
      scope: ["string.template.punctuation", "constant.other.placeholder"],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    // LITERALS: NUMBERS + CONSTANTS
    {
      scope: ["constant.numeric", "constant.character"],
      settings: {
        foreground: "#F78C6C",
        fontStyle: "",
      },
    },
    {
      scope: ["constant.other", "support.constant"],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    // COMMENTS
    {
      scope: [
        "comment",
        "comment.line",
        "comment.block",
        "comment.block.documentation",
        "punctuation.definition.comment",
      ],
      settings: {
        foreground: "#666666",
        fontStyle: "italic",
      },
    },
    // VARIABLES + PARAMETERS + PROPERTIES
    {
      scope: [
        "variable",
        "variable.other",
        "variable.other.readwrite",
        "entity.name.variable",
        "support.variable",
      ],
      settings: {
        foreground: "#E0E0E0",
        fontStyle: "",
      },
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: "#D4D4D4",
        fontStyle: "",
      },
    },
    {
      scope: ["variable.other.property", "meta.property-name"],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: [
        "punctuation.definition.parameters.begin",
        "punctuation.definition.parameters.end",
        "punctuation.section.brackets",
        "punctuation.section.brackets.begin",
        "punctuation.section.brackets.end",
        "meta.brace",
        "meta.bracket",
        "meta.paren",
      ],
      settings: {
        foreground: "#B3B3B3",
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.accessor", "punctuation.separator.method"],
      settings: {
        foreground: "#89DDFF",
        fontStyle: "",
      },
    },
    {
      scope: [
        "punctuation.separator.comma",
        "punctuation.separator.key-value",
        "punctuation.separator.parameter",
      ],
      settings: {
        foreground: "#B3B3B3",
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.terminator", "punctuation.separator.statement"],
      settings: {
        foreground: "#8A8A8A",
        fontStyle: "",
      },
    },
    {
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
      ],
      settings: {
        foreground: "#FFCB6B",
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation"],
      settings: {
        foreground: "#B3B3B3",
        fontStyle: "",
      },
    },
    // CATCH-ALL DEFAULT
    {
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#FF5370",
        fontStyle: "",
      },
    },
    {
      scope: ["source"],
      settings: {
        foreground: "#E0E0E0",
        fontStyle: "",
      },
    },
  ],
};

// write to JSON file
import * as fs from "node:fs";
fs.writeFileSync(
  "themes/Stylta-Flow-Dark.json",
  JSON.stringify(darkTheme, null, 2),
);
console.log("---Theme generated---");
