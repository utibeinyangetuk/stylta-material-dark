type TokenColor = {
	name: string;
	scope: string | string[];
	settings: {
		foreground?: string;
		background?: string;
		fontStyle?: 'italic' | 'bold' | 'underline';
	};
};
type semanticTokenColor = {
	rules: Record<string, string>;
};
type VscodeTheme = {
	name: string;
	type: 'dark' | 'light';
	semanticHighlighting: boolean;
	semanticTokenColors?: semanticTokenColor;
	colors: Record<string, string>;
	tokenColors: TokenColor[];
};
const baseColors = {
	git: {
		added: '#C3E88D',
		modified: '#82AAFF',
		conflicting: '#FF5370',
		stageModified: '#89DDFF',
		deleted: '#FF5370',
		stageDeleted: '#F78C6C',
		untracked: '#C3E88D',
		ignored: '#5A5A5A',
		submodule: '#C792EA',
	},
	border: { pry: '#bbbbbb35', sec: '#33333368', active: '#82AAFF' },
	button: {
		pry: '#82AAFF',
		pryHover: '#4D8DFF',
		pryForeground: '#000000',
		sec: '#1A1A1A',
		secHover: '#222222',
		secForeground: '#E0E0E0',
	},
	background: '#000000',
	selection: '#1a1a1a',
	dropBackground: '#0A0A0A',
	transparent: '#00000000',
	foreground: { pry: '#E0E0E0', sec: '#B3B3B3', inactive: '#8a8a8ae4', active: '#f5f5f5' },
	error: { foreground: '#FF5370', background: '#2A1018' },
	warning: { foreground: '#FFCB6B', background: '#102014' },
	success: { foreground: '#C3E88D', background: '#102014' },
};
const darkTheme: VscodeTheme = {
	name: 'Stylta Flow Dark',
	type: 'dark',
	semanticHighlighting: true,
	colors: {
		//Backgrounds
		'editor.background': baseColors.background,
		'statusBar.background': baseColors.background,
		'dropdown.background':' baseColors.background',
		'input.background': baseColors.background,
		// 'badge.background': baseColors.background,
		'panel.background': baseColors.background,
		'button.background': baseColors.button.pry,
		'breadcrumb.background': baseColors.background,
		'breadcrumbPicker.background': baseColors.background,
		'checkbox.background': baseColors.background,
		'quickInput.background': baseColors.background,
		'keybindingLabel.background': baseColors.background,
		'statusBar.debuggingBackground': baseColors.background,
		'debugToolBar.background': baseColors.background,
		'editorGroupHeader.tabsBackground': baseColors.background,
		'editorGroupHeader.noTabsBackground': baseColors.background,
		'editorGroup.emptyBackground': baseColors.background,
		'editorWidget.background': baseColors.background,
		'statusBar.noFolderBackground': baseColors.background,
		'statusBarItem.prominentBackground': baseColors.background,
		'statusbar.background': baseColors.background,
		'activityBar.background': baseColors.background,
		'menu.background': baseColors.background,
		'sideBar.background': baseColors.background,
		'sideBarSectionHeader.background': baseColors.background,
		'explorer.background': baseColors.background,

		//Links
		'textLink.foreground': '#82AAFF',
		'textLink.activeForeground': '#89DDFF',

		//Unnecessary code
		'editorUnnecessaryCode.opacity': '#00000060',

		//Extension
		'extensionBadge.remoteBackground': '#82AAFF',
		'extensionIcon.preReleaseForeground': '#89DDFF',
		'extensionIcon.sponsorForeground': '#C792EA',
		'extensionIcon.starForeground': '#FFCB6B',
		'extensionIcon.verifiedForeground': '#C3E88D',

		//focusBorder
		focusBorder: baseColors.transparent,

		//foreground
		foreground: baseColors.foreground.pry,

		// Welcome page and Walkthrough
		'walkThrough.embeddedEditorBackground': baseColors.background,
		'walkThrough.embeddedEditorForeground': baseColors.foreground.pry,
		'walkThrough.embeddedEditorBorder': baseColors.border.pry,
		'welcomePage.tileHoverBackground': baseColors.selection,
		'welcomePage.productIconForeground': baseColors.foreground.pry,
		'walkthrough.stepBadge.background': baseColors.button.pry,
		'walkthrough.stepTitle.foreground': baseColors.foreground.pry,
		'welcomePage.progress.background': baseColors.button.pry,

		// checkbox
		'checkbox.border': baseColors.border.pry,
		'checkbox.foreground': baseColors.foreground.pry,

		// git
		'gitDecoration.addedResourceForeground': baseColors.git.added,
		'gitDecoration.modifiedResourceForeground': baseColors.git.modified,
		'gitDecoration.conflictingResourceForeground': baseColors.git.conflicting,
		'gitDecoration.stageModifiedResourceForeground': baseColors.git.stageModified,
		'gitDecoration.deletedResourceForeground': baseColors.git.deleted,
		'gitDecoration.stageDeletedResourceForeground': baseColors.git.stageDeleted,
		'gitDecoration.untrackedResourceForeground': baseColors.git.untracked,
		'gitDecoration.ignoredResourceForeground': baseColors.git.ignored,
		'gitDecoration.submoduleResourceForeground': baseColors.git.submodule,
		'gitlens.trailingLineBackgroundColor': baseColors.transparent,

		//sideBar
		'sideBar.border': baseColors.transparent,

		// sash (the draggable divider between panels)
		'sash.hoverBorder': baseColors.border.pry,

		// Menu
		'menu.border': baseColors.border.sec,

		//Tabs
		'tab.border': baseColors.transparent,
		'tab.inactiveBackground': baseColors.background,
		'tab.inactiveForeground': baseColors.foreground.inactive,
		'tab.activeBackground': baseColors.background,
		'tab.activeForeground': baseColors.foreground.active,
		'tab.activeModifiedBorder': baseColors.border.active,
		'tab.hoverBackground': baseColors.selection,
		'tab.hoverForeground': baseColors.foreground.active,
		'tab.dragAndDropBorder': baseColors.border.pry,
		'tab.activeBorderTop': baseColors.border.active,
		'tab.unfocusedActiveBorderTop': baseColors.background,
		'editorGroupHeader.border': baseColors.background,

		//breadCrumbs
		// 'breadcrumn'

		// List
		'list.hoverBackground': baseColors.selection,
		'list.inactiveSelectionBackground': baseColors.selection,
		'list.activeSelectionBackground': baseColors.selection,
		'list.inactiveFocusBackground': baseColors.selection,
		'list.focusBackground': baseColors.selection,

		//EditorGroup
		'editorGroup.border': baseColors.border.sec,
		'editorGroup.dropBackground': baseColors.dropBackground,
		'editorGroupHeader.tabsBorder': baseColors.border.sec,
		'editorGroupHeader.noTabsBorder': baseColors.border.sec,

		//settings page
		'settings.headerBorder': baseColors.border.sec,
		'settings.focusedRowBorder': baseColors.border.pry,

		// Button
		'button.hoverBackground': baseColors.button.pryHover,
		'button.foreground': baseColors.button.pryForeground,
		'button.secondaryBackground': baseColors.button.sec,
		'button.secondaryHoverBackground': baseColors.button.secHover,
		'button.secondaryForeground': baseColors.button.secForeground,
		'button.border': baseColors.border.sec,
		'button.secondaryBorder': baseColors.border.sec,
		'button.separator': baseColors.border.sec,

		//TitleBar
		'titleBar.activeBackground': baseColors.background,
		'titleBar.inactiveBackground': baseColors.background,
		'titleBar.activeForeground': baseColors.foreground.pry,
		'titleBar.inactiveForeground': baseColors.foreground.inactive,
	},
	semanticTokenColors: {
		rules: {},
	},
	tokenColors: [],
};

// write to JSON file
import * as fs from 'node:fs';
fs.writeFileSync('themes/Stylta-Flow-Dark.json', JSON.stringify(darkTheme, null, 2));
console.log('---------------Dark theme generated----------------.');
