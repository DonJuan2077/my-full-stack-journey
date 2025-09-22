const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

console.log("正在发送请求...");

fetch(apiUrl)
  .then(response => {
    console.log("收到服务器响应，正在解析...");
    return response.json(); 
  })
  .then(data => {
    console.log("解析完成！获取到的数据是:");
    console.log(data);
  })
  .catch(error => {
    console.error("请求失败:", error);
  });

console.log("请求已发送，主线程继续执行...");