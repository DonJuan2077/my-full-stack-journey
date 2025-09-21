console.log("订单1: 开始");

setTimeout(() => {
  console.log("订单3: 开始吃0毫秒的超大汉堡 (耗时任务开始)");
  
  // 这段代码会空转3秒，模拟一个耗时的计算任务
  const startTime = Date.now();
  while (Date.now() - startTime < 3000) {
    // 循环3秒钟
  }
  
  console.log("订单3: 终于吃完了汉堡 (耗时任务结束)");
}, 0);

setTimeout(() => {
  console.log("订单4: 1毫秒的普通可乐好了");
}, 1);

console.log("订单2: 结束");

