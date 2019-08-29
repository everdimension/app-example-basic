import React from 'react';
import { MenuItem } from '@blueprintjs/core';
import { Route } from 'react-router-dom';

// NOTE:
// copy-paste this to Sidenav

export function MessagesNavigationItem() {
  return (
    <Route
      render={({ history }) => (
        <MenuItem
          text="Messages"
          icon="chat"
          href="/messages"
          onClick={event => {
            event.preventDefault();
            history.push(event.currentTarget.pathname);
          }}
        />
      )}
    />
  );
}
