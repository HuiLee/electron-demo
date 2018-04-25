// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.setInterval(function () {
    const agents = ['鹿晗', '李易峰', '白敬亭', '迪丽热巴', '张艺兴', '彭于晏', '鲁班', '孙尚香', '虞姬'];
    const n = Math.floor(Math.random() * agents.length + 1) - 1;
    notify = new Notification('明星欢乐汇', {
        silent: true,
        icon: 'img/agent.png',
        body: agents[n] + '等明星在线等你玩！'
    });

}, 1000)

