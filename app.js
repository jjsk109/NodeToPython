import child_process from 'child_process';

// const child = child_process.spawn('python', ['1_Base.py',1,5,"hello"]);


// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', function(data) {
//     console.log(data.toString());
// });

// // 2차원 배열을 전송하게 되면?
// const data = 
// [
//     '2_2Darray.py',
//     [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4],
//     [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4],
//     [20,30,50,50,60,80,10,21,43,53,36,543,5,53,63,67,345,36,754,546,45,456,45,645,645,645,6,456,47,32,7,257,256,27,5,6,2457,25,7,27,245,4]
// ]

// const child2 = child_process.spawn('python', data);
// child2.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });
// child2.stderr.on('data', function(data) {
//     console.log(data.toString());
// });


const js_data =  [
    {
      ctr: 1.12,     
      convAmt: 65900,
      crto: 0.39,    
      ccnt: 1,
      dateEnd: '2022-10-01',
      salesAmt: 214401,
      clkCnt: 259,
      ror: 30.74,
      dateStart: '2022-10-01',
      viewCnt: 0,
      cpc: 828,
      cpConv: 214401,
      impCnt: 23204
    },
    {
      ctr: 1.36,
      convAmt: 65900,
      crto: 0.29,
      ccnt: 1,
      dateEnd: '2022-10-02',
      salesAmt: 273724,
      clkCnt: 347,
      ror: 24.08,
      dateStart: '2022-10-02',
      viewCnt: 0,
      cpc: 789,
      cpConv: 273724,
      impCnt: 25601
    },
    {
      ctr: 1.39,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-03',
      salesAmt: 275704,
      clkCnt: 360,
      ror: 0,
      dateStart: '2022-10-03',
      viewCnt: 0,
      cpc: 766,
      cpConv: 0,
      impCnt: 26052
    },
    {
      ctr: 1.56,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-04',
      salesAmt: 269236,
      clkCnt: 354,
      ror: 0,
      dateStart: '2022-10-04',
      viewCnt: 0,
      cpc: 761,
      cpConv: 0,
      impCnt: 22708
    },
    {
      ctr: 1.5,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-05',
      salesAmt: 264385,
      clkCnt: 327,
      ror: 0,
      dateStart: '2022-10-05',
      viewCnt: 0,
      cpc: 809,
      cpConv: 0,
      impCnt: 21801
    },
    {
      ctr: 1.39,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-06',
      salesAmt: 233651,
      clkCnt: 323,
      ror: 0,
      dateStart: '2022-10-06',
      viewCnt: 0,
      cpc: 723,
      cpConv: 0,
      impCnt: 23373
    },
    {
      ctr: 1.4,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-07',
      salesAmt: 270820,
      clkCnt: 337,
      ror: 0,
      dateStart: '2022-10-07',
      viewCnt: 0,
      cpc: 804,
      cpConv: 0,
      impCnt: 24103
    },
    {
      ctr: 1.35,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-08',
      salesAmt: 236401,
      clkCnt: 305,
      ror: 0,
      dateStart: '2022-10-08',
      viewCnt: 0,
      cpc: 775,
      cpConv: 0,
      impCnt: 22682
    },
    {
      ctr: 1.77,
      convAmt: 33900,
      crto: 0.19,
      ccnt: 1,
      dateEnd: '2022-10-09',
      salesAmt: 399619,
      clkCnt: 521,
      ror: 8.48,
      dateStart: '2022-10-09',
      viewCnt: 0,
      cpc: 767,
      cpConv: 399619,
      impCnt: 29530
    },
    {
      ctr: 1.91,
      convAmt: 65900,
      crto: 0.13,
      ccnt: 1,
      dateEnd: '2022-10-10',
      salesAmt: 485001,
      clkCnt: 752,
      ror: 13.59,
      dateStart: '2022-10-10',
      viewCnt: 0,
      cpc: 645,
      cpConv: 485001,
      impCnt: 39494
    },
    {
      ctr: 2.17,
      convAmt: 65900,
      crto: 0.15,
      ccnt: 1,
      dateEnd: '2022-10-11',
      salesAmt: 406956,
      clkCnt: 653,
      ror: 16.19,
      dateStart: '2022-10-11',
      viewCnt: 0,
      cpc: 623,
      cpConv: 406956,
      impCnt: 30231
    },
    {
      ctr: 2.37,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-12',
      salesAmt: 396803,
      clkCnt: 540,
      ror: 0,
      dateStart: '2022-10-12',
      viewCnt: 0,
      cpc: 735,
      cpConv: 0,
      impCnt: 22808
    },
    {
      ctr: 2.06,
      convAmt: 0,
      crto: 0,
      ccnt: 0,
      dateEnd: '2022-10-13',
      salesAmt: 303424,
      clkCnt: 416,
      ror: 0,
      dateStart: '2022-10-13',
      viewCnt: 0,
      cpc: 729,
      cpConv: 0,
      impCnt: 20284
    },
    {
      ctr: 3.16,
      convAmt: 650000,
      crto: 0.94,
      ccnt: 4,
      dateEnd: '2022-10-14',
      salesAmt: 166903,
      clkCnt: 427,
      ror: 389.45,
      dateStart: '2022-10-14',
      viewCnt: 0,
      cpc: 391,
      cpConv: 41726,
      impCnt: 13531
    },
    {
      ctr: 3.66,
      convAmt: 254000,
      crto: 0.32,
      ccnt: 2,
      dateEnd: '2022-10-15',
      salesAmt: 240526,
      clkCnt: 624,
      ror: 105.6,
      dateStart: '2022-10-15',
      viewCnt: 0,
      cpc: 385,
      cpConv: 120263,
      impCnt: 17085
    },
    {
      ctr: 3.21,
      convAmt: 462000,
      crto: 0.46,
      ccnt: 3,
      dateEnd: '2022-10-16',
      salesAmt: 320397,
      clkCnt: 658,
      ror: 144.2,
      dateStart: '2022-10-16',
      viewCnt: 0,
      cpc: 487,
      cpConv: 106799,
      impCnt: 20549
    },
    {
      ctr: 2.84,
      convAmt: 832900,
      crto: 0.76,
      ccnt: 7,
      dateEnd: '2022-10-17',
      salesAmt: 540551,
      clkCnt: 925,
      ror: 154.08,
      dateStart: '2022-10-17',
      viewCnt: 0,
      cpc: 584,
      cpConv: 77222,
      impCnt: 32596
    },
    {
      ctr: 1.21,
      convAmt: 2935000,
      crto: 1.15,
      ccnt: 17,
      dateEnd: '2022-10-18',
      salesAmt: 1294667,
      clkCnt: 1474,
      ror: 226.7,
      dateStart: '2022-10-18',
      viewCnt: 7,
      cpc: 878,
      cpConv: 76157,
      impCnt: 122016
    },
    {
      ctr: 1.28,
      convAmt: 3123900,
      crto: 1.61,
      ccnt: 21,
      dateEnd: '2022-10-19',
      salesAmt: 1089473,
      clkCnt: 1305,
      ror: 286.73,
      dateStart: '2022-10-19',
      viewCnt: 7,
      cpc: 835,
      cpConv: 51880,
      impCnt: 102607
    },
    {
      ctr: 1.2,
      convAmt: 4629900,
      crto: 2.22,
      ccnt: 24,
      dateEnd: '2022-10-20',
      salesAmt: 918522,
      clkCnt: 1080,
      ror: 504.06,
      dateStart: '2022-10-20',
      viewCnt: 4,
      cpc: 850,
      cpConv: 38272,
      impCnt: 90366
    },
    {
      ctr: 1.3,
      convAmt: 2447000,
      crto: 0.93,
      ccnt: 9,
      dateEnd: '2022-10-21',
      salesAmt: 857637,
      clkCnt: 963,
      ror: 285.32,
      dateStart: '2022-10-21',
      viewCnt: 4,
      cpc: 891,
      cpConv: 95293,
      impCnt: 74389
    },
    {
      ctr: 1.31,
      convAmt: 2392000,
      crto: 1.63,
      ccnt: 13,
      dateEnd: '2022-10-22',
      salesAmt: 858715,
      clkCnt: 799,
      ror: 278.56,
      dateStart: '2022-10-22',
      viewCnt: 3,
      cpc: 1075,
      cpConv: 66055,
      impCnt: 61435
    },
    {
      ctr: 1.13,
      convAmt: 1335000,
      crto: 0.92,
      ccnt: 8,
      dateEnd: '2022-10-23',
      salesAmt: 767184,
      clkCnt: 870,
      ror: 174.01,
      dateStart: '2022-10-23',
      viewCnt: 8,
      cpc: 882,
      cpConv: 95898,
      impCnt: 77338
    },
    {
      ctr: 1.22,
      convAmt: 5483900,
      crto: 2.04,
      ccnt: 25,
      dateEnd: '2022-10-24',
      salesAmt: 1154989,
      clkCnt: 1228,
      ror: 474.8,
      dateStart: '2022-10-24',
      viewCnt: 4,
      cpc: 941,
      cpConv: 46200,
      impCnt: 101445
    },
    {
      ctr: 1.1,
      convAmt: 4560000,
      crto: 1.84,
      ccnt: 22,
      dateEnd: '2022-10-25',
      salesAmt: 1190860,
      clkCnt: 1193,
      ror: 382.92,
      dateStart: '2022-10-25',
      viewCnt: 0,
      cpc: 998,
      cpConv: 54130,
      impCnt: 109252
    },
    {
      ctr: 1.09,
      convAmt: 3106900,
      crto: 1.48,
      ccnt: 17,
      dateEnd: '2022-10-26',
      salesAmt: 1332309,
      clkCnt: 1151,
      ror: 233.2,
      dateStart: '2022-10-26',
      viewCnt: 4,
      cpc: 1158,
      cpConv: 78371,
      impCnt: 106423
    },
    {
      ctr: 1.09,
      convAmt: 2601900,
      crto: 1.47,
      ccnt: 14,
      dateEnd: '2022-10-27',
      salesAmt: 1037168,
      clkCnt: 953,
      ror: 250.87,
      dateStart: '2022-10-27',
      viewCnt: 4,
      cpc: 1088,
      cpConv: 74083,
      impCnt: 88067
    },
    {
      ctr: 1.04,
      convAmt: 2456000,
      crto: 1.71,
      ccnt: 12,
      dateEnd: '2022-10-28',
      salesAmt: 717013,
      clkCnt: 703,
      ror: 342.53,
      dateStart: '2022-10-28',
      viewCnt: 3,
      cpc: 1020,
      cpConv: 59751,
      impCnt: 67712
    },
    {
      ctr: 1.19,
      convAmt: 1155000,
      crto: 1.34,
      ccnt: 8,
      dateEnd: '2022-10-29',
      salesAmt: 600567,
      clkCnt: 597,
      ror: 192.32,
      dateStart: '2022-10-29',
      viewCnt: 3,
      cpc: 1006,
      cpConv: 75071,
      impCnt: 50257
    },
    {
      ctr: 1.19,
      convAmt: 1454000,
      crto: 1.24,
      ccnt: 8,
      dateEnd: '2022-10-30',
      salesAmt: 644336,
      clkCnt: 643,
      ror: 225.66,
      dateStart: '2022-10-30',
      viewCnt: 3,
      cpc: 1002,
      cpConv: 80542,
      impCnt: 54230
    },
    {
      ctr: 1.04,
      convAmt: 1887800,
      crto: 1.41,
      ccnt: 11,
      dateEnd: '2022-10-31',
      salesAmt: 880055,
      clkCnt: 779,
      ror: 214.51,
      dateStart: '2022-10-31',
      viewCnt: 0,
      cpc: 1130,
      cpConv: 80005,
      impCnt: 75040
    }
  ]

  const child3 = child_process.spawn('python', ['3_JSON.py',JSON.stringify(js_data) ]);


  child3.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
  });
  
  child3.stderr.on('data', function(data) {
      console.log(data.toString());
  });