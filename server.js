export default function(app, isDev, renderPage) {
  
  app.use('/api', (req, res) => {
    res.write(JSON.stringify({
      "result": "You are really cool!"
    }));
    res.end();
  });
  
  app.use('/api', (req, res) => {
    res.write(JSON.stringify({
      "result": "You are really cool!"
    }));
    res.end();
  });
  
  app.listen(8080);
  
}