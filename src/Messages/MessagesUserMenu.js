import React from 'react';
import { Route } from 'react-router-dom';
import { MenuItem } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';

// NOTE:
// Copy to App/NavigationBar

export function MessagesUserMenu() {
  return (
    <Route
      render={({ history }) => (
        <MenuItem
          text="Messages"
          labelElement={<Tag intent="primary">13</Tag>}
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
