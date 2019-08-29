import React from 'react';
import { ShortcutSwitch } from '../Settings/ShortcutSwitch/ShortcutSwitch.js';

// NOTE:
// copy-paste this to Settings

export function MessagesKeybinding() {
  return <ShortcutSwitch label="Messages" shortcut="ctrl+M" />;
}
