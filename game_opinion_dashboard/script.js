// script.js - 主JavaScript文件

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('游数观 - 二游数据雷达已加载');
    
    // 排行榜项点击效果
    const rankItems = document.querySelectorAll('.rank-item');
    rankItems.forEach(item => {
        item.addEventListener('click', function() {
            const gameName = this.querySelector('h4').textContent;
            alert(`查看 ${gameName} 的详细数据\n\n这是一个示例，未来这里会:\n1. 跳转到游戏详情页\n2. 加载该游戏的详细数据\n3. 显示趋势图表`);
        });
    });
    
    // 模拟数据更新
    simulateDataUpdate();
    
    // 初始化图表（如果有的话）
    initCharts();
});

// 模拟数据更新
function simulateDataUpdate() {
    const updateTimes = document.querySelectorAll('.update-time');
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    updateTimes.forEach(el => {
        el.textContent = `更新于: 今天 ${timeStr}`;
    });
    
    // 每30秒更新一次时间
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        updateTimes.forEach(el => {
            el.textContent = `更新于: 今天 ${timeStr}`;
        });
    }, 30000);
}

// 初始化图表
function initCharts() {
    // 检查是否有ECharts容器
    if (typeof echarts === 'undefined') {
        console.log('ECharts未加载，跳过图表初始化');
        return;
    }
    
    // 这里可以添加图表的初始化代码
    // 例如：如果页面有<div id="chart">，就初始化一个图表
}

// 切换主题（未来功能）
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        console.log('切换到浅色主题');
    } else {
        console.log('切换到深色主题');
    }
}

// 复制分享链接
function copyShareLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(() => {
            alert('链接已复制到剪贴板！');
        })
        .catch(err => {
            console.error('复制失败:', err);
        });
}