# OpenClaw Intro Site

一个可直接部署到 GitHub Pages 的静态介绍页。

## 本地预览

```bash
cd openclaw-intro-site
python3 -m http.server 8080
```

打开：`http://localhost:8080`

## 部署到 GitHub Pages

1. 把当前仓库推到 GitHub（默认分支 `main`）
2. 在 GitHub 仓库里进入 **Settings → Pages**
3. Source 选择 **GitHub Actions**
4. 推送任意改动到 `main`，自动触发工作流：
   - `.github/workflows/deploy-openclaw-site.yml`
5. 部署完成后会得到地址：
   - `https://<你的用户名>.github.io/<仓库名>/`

## 已包含功能

- 中英双语切换
- 深浅色主题切换
- 响应式布局
- Demo 区 + FAQ
- 基础 SEO（OG/Twitter Meta）
