import React from 'react';
import { Route } from 'react-router-dom';
import { Keybinding } from '../Hotkeys/Hotkeys.js';

// NOTE:
// copy-paste this to App/Keybindings

export function MessagesKeybinding() {
  return (
    <Route
      render={({ history }) => (
        <Keybinding
          combo="ctrl+m"
          onKeyDown={() => history.push('/messages')}
        />
      )}
    />
  );
}
