type TokenColor = {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: "italic" | "bold" | "underline";
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
    inactive: "#8a8a8ae4",
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
    // 'badge.background': baseColors.background,
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

    //dropDown
    "dropdown.border": baseColors.border.pry,
    "dropdown.foreground": baseColors.foreground.sec,

    // sash (the draggable divider between panels)
    "sash.hoverBorder": baseColors.border.pry,

    // Menu
    "menu.border": baseColors.border.sec,

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

    // List
    "list.hoverBackground": baseColors.selection,
    "list.inactiveSelectionBackground": baseColors.selection,
    "list.activeSelectionBackground": baseColors.selection,
    "list.inactiveFocusBackground": baseColors.selection,
    "list.focusBackground": baseColors.selection,

    //EditorGroup
    "editorGroup.border": baseColors.border.sec,
    "editorGroup.dropBackground": baseColors.dropBackground,
    "editorGroupHeader.tabsBorder": baseColors.border.sec,

    //settings page
    "settings.headerBorder": baseColors.border.sec,
    "settings.focusedRowBorder": baseColors.border.pry,

    //Scrollbar
    "scrollbar.shadow": "#00000022",
    "scrollbarSlider.background": baseColors.hover.default,
    "scrollbarSlider.hoverBackground": baseColors.hover.active,
    "scrollbarSlider.activeBackground": "#82AAFF",

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
  },
  semanticTokenColors: {
    rules: {},
  },
  tokenColors: [],
};

// write to JSON file
import * as fs from "node:fs";
fs.writeFileSync(
  "themes/Stylta-Flow-Dark.json",
  JSON.stringify(darkTheme, null, 2),
);
console.log("---Theme generated---");
