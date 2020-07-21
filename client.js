// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('slideshow_demo', {
      photos: [
        {uri: './static_assets/1.jpg', title: 'My Room', format: '3D'},
        {uri: './static_assets/2.jpg', title: 'My Room2', format: '3D'},
        {uri: './static_assets/360_world.jpg', title: 'My World', format: '3D'},       
      ], 
    }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
