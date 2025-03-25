# 医学知识库系统

一个基于 React 和 Ant Design 的现代化医学知识检索系统，提供疾病、药品和医学检查等医疗信息的快速检索和展示功能。

## 功能特点

### 1. 智能搜索
- 🔍 实时搜索功能
- 🎯 高级筛选（按科室、症状等）
- 📊 相关度排序
- 🔄 智能推荐相关内容

### 2. 丰富的医学数据
- 🏥 常见疾病信息库
- 💊 药品使用指南
- 🔬 医学检查说明
- 📋 详细的症状描述

### 3. 用户友好界面
- 📱 响应式设计，支持移动端
- 🎨 清晰的分类展示
- 🔖 标签化信息组织
- 📈 直观的数据展示

### 4. 专业医学信息
- 🔗 疾病与药品关联
- 📝 详细用药说明
- ⚕️ 规范的医学术语
- 🚫 禁忌症提醒

## 技术栈

- **前端框架**: React 18
- **UI 组件**: Ant Design 5.x
- **路由管理**: React Router 6
- **样式方案**: CSS-in-JS
- **开发环境**: Node.js 16+

## 快速开始

### 环境要求
- Node.js 16.0 或以上版本
- npm 7.0 或以上版本

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/vivian0305/medical-knowledge-base.git
cd medical-knowledge-base
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 打开浏览器访问 http://localhost:3000

## 项目结构

```
medical-knowledge-base/
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── components/        # 通用组件
│   │   └── AdvancedSearch/# 高级搜索组件
│   ├── pages/            # 页面组件
│   │   ├── Home/         # 首页
│   │   └── SearchResults/# 搜索结果页
│   ├── services/         # 服务和数据
│   │   └── mockData.js   # 模拟医学数据
│   ├── App.jsx          # 应用入口
│   ├── App.css          # 全局样式
│   └── index.js         # 入口文件
└── package.json          # 项目配置
```

## 数据结构

### 疾病数据
- 基本信息（名称、类型、科室）
- 症状描述
- 治疗方案
- 相关药品和检查
- 预防措施和并发症

### 药品数据
- 基本信息（名称、类型、用法）
- 适应症和禁忌症
- 不良反应
- 注意事项
- 相关疾病

### 检查项目
- 基本信息（名称、类型、科室）
- 检查目的
- 注意事项
- 参考值范围
- 临床意义

## 待开发功能

- [ ] 用户账户系统
- [ ] 收藏夹功能
- [ ] 搜索历史记录
- [ ] 专家问答系统
- [ ] 医学图片库
- [ ] 多语言支持

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有问题或建议，欢迎提交 Issue 或通过以下方式联系：

- GitHub Issues: [提交 Issue](https://github.com/vivian0305/medical-knowledge-base/issues) 