import styled from 'styled-components';
// import { BrowserRouter, ServerRouter, createServerRenderContext}  from 'react-router/BrowserRouter';

import App from './components/App';

export const getApplication = (ctx, forServer) => {
  return <App />;
}

// 
// export const getApplication = (ctx, forServer) => {
//   if(forServer) {
//     ctx.serverRouteContext = createServerRenderContext();
//     return <ServerRouter location={ctx.req.url}><App /></ServerRouter>
//   } else {
//     return <BrowserRouter><App /></BrowserRouter>;
//   }
// }

// export const getPageHTML = (ctx, renderedString) => {
//   return `
//     <html>
//       <head>
//         <title>Test</title>
//         <style type="text/css" id="initialStyles">${styleSheet.rules().map(item => item.cssText).join('\n')}</style>
//       </head>
//       <body>
//         <div id="root">${renderedString}</div>
//         <script type='text/javascript'>window.module = {};</script>
//         <script type='text/javascript' src='/main.js'></script>
//       </body>
//     </html>
//   `;
// }