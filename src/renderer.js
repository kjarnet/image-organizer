// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
<App name={'World'} />,
document.getElementById('app')
);

