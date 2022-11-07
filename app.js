import child_process from 'child_process';

const child = child_process.spawn('python', ['1_Base.py',1,5,"hello"]);


child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', function(data) {
    console.log(data.toString());
});

// 2차원 배열을 전송하게 되면?
const data = 
[
    '2_2Darray.py',
    [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4],
    [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4],
    [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4]
]

const child2 = child_process.spawn('python', data);
child2.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
child2.stderr.on('data', function(data) {
    console.log(data.toString());
});