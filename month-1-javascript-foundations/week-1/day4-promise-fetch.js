const createOrder = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    
    console.log("订单处理中... (状态: pending)");
    
    setTimeout(() => {
      if (shouldSucceed) {
        // 如果操作成功，我们调用 resolve() 函数
        // 这会将 Promise 的状态从 pending 变为 fulfilled
        resolve("包裹已送达！(状态: fulfilled)"); 
      } else {
        // 如果操作失败，我们调用 reject() 函数
        // 这会将 Promise 的状态从 pending 变为 rejected
        reject("配送失败：地址不存在。(状态: rejected)");
      }
    }, 2000); 
  });
};


const successfulOrder = createOrder(true); 

successfulOrder
  .then((successMessage) => {
    console.log("快递员发来消息:", successMessage);
  })
  .catch((errorMessage) => {
    console.error("快递员发来消息:", errorMessage);
  });