import child_process from 'child_process';

const child = child_process.spawn('python', ['app.py',1,5,"hello"]);


child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', function(data) {
    console.log(data.toString());
});
