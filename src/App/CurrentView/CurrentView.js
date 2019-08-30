import React from 'react';
import { Route } from 'react-router-dom';
import { Editor } from '../../Editor/Editor.js';
import { Feed } from '../../Feed/Feed.js';
import { Followers } from '../../Followers/Followers.js';
import { Settings } from '../../Settings/Settings.js';
import { Messages } from '../../Messages/Messages.js';

export function CurrentView() {
  return (
    <>
      <Route path="/" exact render={() => <Feed />} />
      <Route path="/editor" render={() => <Editor />} />
      <Route path="/Followers" render={() => <Followers />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/messages" render={() => <Messages />} />
    </>
  );
}
