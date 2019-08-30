import React from 'react';
import { Button } from '@blueprintjs/core';
import { Tag } from '@blueprintjs/core';
import { Route } from 'react-router-dom';
import { Popover, PopoverInteractionKind } from '@blueprintjs/core';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Navbar, Alignment } from '@blueprintjs/core';
import { User } from '../../User/User.js';

export function NavigationBar() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>UI Labs</Navbar.Heading>
        <Navbar.Divider />
        <Button>hehe</Button>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          hoverOpenDelay={0}
          content={
            <Menu>
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
              <MenuItem text="logout" icon="log-out" />
            </Menu>
          }
        >
          <User imageSize={28} name="Random User" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
}
