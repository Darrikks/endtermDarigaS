const clientPath = path.join(__dirname, 'public'); app.use('/posts', express.static(clientPath)); 
app.use(express.static(__dirname + '/public'));

console.log("Its working");