<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>游数观 | 二游数据雷达</title>
    <link rel="stylesheet" href="style.css">
    <!-- 引入图标库 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- 引入ECharts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
</head>
<body>
    <!-- 顶部导航 -->
    <nav class="main-nav">
        <div class="nav-brand">
            <i class="fas fa-chart-network"></i>
            <h1>游数观</h1>
            <span class="tagline">二游数据雷达</span>
        </div>
        <div class="nav-links">
            <a href="index.html" class="active"><i class="fas fa-home"></i> 首页</a>
            <a href="discussion.html"><i class="fas fa-comments"></i> 游戏讨论</a>
            <a href="trend.html"><i class="fas fa-chart-bar"></i> 数据趋势</a>
            <a href="about.html"><i class="fas fa-info-circle"></i> 关于</a>
        </div>
    </nav>

    <!-- 主页横幅 -->
    <header class="hero-banner">
        <div class="hero-content">
            <h2>用数据洞察二次元游戏</h2>
            <p>实时热度 · 流水分析 · 社区动态 · 客观评分</p>
            <div class="hero-stats">
                <div class="stat">
                    <span class="number">6</span>
                    <span class="label">监测游戏</span>
                </div>
                <div class="stat">
                    <span class="number">3</span>
                    <span class="label">数据维度</span>
                </div>
                <div class="stat">
                    <span class="number">24h</span>
                    <span class="label">实时更新</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 双榜布局 -->
    <main class="dashboard">
        <!-- 左侧：游戏热度排行榜 -->
        <section class="ranking-card">
            <div class="card-header">
                <i class="fas fa-fire"></i>
                <h3>游戏热度排行榜</h3>
                <span class="update-time">更新于: 今天 14:30</span>
            </div>
            <div class="ranking-list">
                <!-- 排行榜项 -->
                <div class="rank-item rank-1">
                    <div class="rank-number">1</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://uploadstatic.mihoyo.com/contentweb/20210330/2021033014183882898.png" alt="原神">
                        </div>
                        <div class="game-details">
                            <h4>原神</h4>
                            <div class="game-tags">
                                <span class="tag">开放世界</span>
                                <span class="tag">动作</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">9.4</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 94%;"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item rank-2">
                    <div class="rank-number">2</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://uploadstatic.mihoyo.com/contentweb/20230426/2023042614315321978.png" alt="崩坏：星穹铁道">
                        </div>
                        <div class="game-details">
                            <h4>崩坏：星穹铁道</h4>
                            <div class="game-tags">
                                <span class="tag">回合制</span>
                                <span class="tag">科幻</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">9.1</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 91%;"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item rank-3">
                    <div class="rank-number">3</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://img.1999.com/logo.png" alt="重返未来：1999">
                        </div>
                        <div class="game-details">
                            <h4>重返未来：1999</h4>
                            <div class="game-tags">
                                <span class="tag">卡牌</span>
                                <span class="tag">复古</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.7</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 87%;"></div>
                        </div>
                    </div>
                </div>

                <!-- 第4-6名 -->
                <div class="rank-item">
                    <div class="rank-number">4</div>
                    <div class="game-info">
                        <h4>明日方舟·终末地</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.5</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 85%;"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item">
                    <div class="rank-number">5</div>
                    <div class="game-info">
                        <h4>深空之眼</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.2</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 82%;"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item">
                    <div class="rank-number">6</div>
                    <div class="game-info">
                        <h4>无期迷途</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.0</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 80%;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <span>热度评分基于社区讨论量、搜索指数、二创热度等综合计算</span>
            </div>
        </section>

        <!-- 右侧：游戏流水排行榜 -->
        <section class="ranking-card">
            <div class="card-header">
                <i class="fas fa-chart-line"></i>
                <h3>游戏流水排行榜</h3>
                <span class="update-time">更新于: 今天 14:30</span>
            </div>
            <div class="ranking-list">
                <!-- 流水榜项 -->
                <div class="rank-item rank-1">
                    <div class="rank-number">1</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://uploadstatic.mihoyo.com/contentweb/20210330/2021033014183882898.png" alt="原神">
                        </div>
                        <div class="game-details">
                            <h4>原神</h4>
                            <div class="game-tags">
                                <span class="tag revenue-tag">¥ 2.1亿</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">9.8</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 98%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item rank-2">
                    <div class="rank-number">2</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://uploadstatic.mihoyo.com/contentweb/20230426/2023042614315321978.png" alt="崩坏：星穹铁道">
                        </div>
                        <div class="game-details">
                            <h4>崩坏：星穹铁道</h4>
                            <div class="game-tags">
                                <span class="tag revenue-tag">¥ 1.8亿</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">9.5</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 95%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item rank-3">
                    <div class="rank-number">3</div>
                    <div class="game-info">
                        <div class="game-icon">
                            <img src="https://img.1999.com/logo.png" alt="重返未来：1999">
                        </div>
                        <div class="game-details">
                            <h4>重返未来：1999</h4>
                            <div class="game-tags">
                                <span class="tag revenue-tag">¥ 1.2亿</span>
                            </div>
                        </div>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">9.2</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 92%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>

                <!-- 第4-6名 -->
                <div class="rank-item">
                    <div class="rank-number">4</div>
                    <div class="game-info">
                        <h4>明日方舟·终末地</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.8</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 88%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item">
                    <div class="rank-number">5</div>
                    <div class="game-info">
                        <h4>深空之眼</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.5</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 85%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>

                <div class="rank-item">
                    <div class="rank-number">6</div>
                    <div class="game-info">
                        <h4>无期迷途</h4>
                    </div>
                    <div class="rank-score">
                        <div class="score-value">8.3</div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: 83%; background: linear-gradient(90deg, #f39c12, #e67e22);"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <span>流水评分基于近30日预估流水、付费率、ARPU等综合计算</span>
            </div>
        </section>
    </main>

    <!-- 跳转按钮区域 -->
    <section class="cta-section">
        <div class="cta-content">
            <h3><i class="fas fa-external-link-alt"></i> 深入各游戏讨论区</h3>
            <p>点击下方按钮，查看各游戏的详细讨论、社区动态和玩家反馈</p>
            <div class="cta-buttons">
                <a href="discussion.html" class="cta-btn primary">
                    <i class="fas fa-comments"></i>
                    进入游戏讨论中心
                </a>
                <a href="#" class="cta-btn secondary">
                    <i class="fas fa-chart-network"></i>
                    查看数据方法论
                </a>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <i class="fas fa-chart-network"></i>
                <h3>游数观</h3>
                <p>二游数据雷达 · 客观呈现 · 数据驱动</p>
            </div>
            <div class="footer-links">
                <a href="index.html">首页</a>
                <a href="discussion.html">游戏讨论</a>
                <a href="trend.html">数据趋势</a>
                <a href="about.html">关于我们</a>
            </div>
            <div class="footer-disclaimer">
                <p>⚠️ 免责声明：本网站数据来源于公开渠道估算，仅供参考。游戏评分基于多维度算法，非官方评价。</p>
                <p>© 2026 游戏数据. 本网站与各游戏厂商无官方关联。</p>
            </div>
        </div>
    </footer>

    <!-- 引入JavaScript -->
    <script src="script.js"></script>
</body>
</html>
