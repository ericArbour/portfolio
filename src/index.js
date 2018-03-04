import React from 'react';
import ReactDOM from 'react-dom';

import './style.less';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development');
} else {
  console.log('Production');
}

const title = 'Portfolio';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));
