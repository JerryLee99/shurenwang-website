# 乐活熟人官网

乐活熟人的公司官网。公司是宁波熟人网络科技有限公司，域名是 `www.shurenwang.com`。仓库名里的“熟人网”只作项目称呼，页面上的品牌名是「乐活熟人」。

合并到 `main`，以及之后的任何部署，都需要 **Jerry 确认**。

## 已经写上的正式文案

这些句子来自 Jerry，页面按原文使用，没有另写口号：

- 品牌：乐活熟人
- 公司：宁波熟人网络科技有限公司
- 定位：我们面向追求「健康@快乐」的企业与个人，在彼此熟悉的圈子里，搭建安全、安心、分享、便捷的服务平台。
- 宗旨：为重视健康、关爱环保的人，在生产与消费时坚持以健康、环保、时尚、有机、天然、绿色为主题。
- 域名：www.shurenwang.com
- 电话：13967875129（只在联系页和页脚，不放在页眉导航旁）
- 微信：联系页二维码，联系人 Jerry|李警瑞

集中在 `lib/site.ts`。首页主视觉和关于页使用定位；关于页和首页都放了宗旨；页眉、页脚和标题使用「乐活熟人」；页脚和关于页写公司名。主导航是首页、产品、服务、合作、联系我们。关于我们只留在页脚。

## 仍是占位

产品、服务和合作已经换成 Jerry 确认过的句子。还没有提供、因此页面上仍标明尚未提供的只有：

- 团队介绍
- 标志与品牌色（现在的双圆图形、墨色和陶土色都是临时视觉）

## 技术栈

- [Next.js](https://nextjs.org/) App Router + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- 静态导出（`output: 'export'`），构建结果在 `out/`

用 Next.js 做静态导出，是为了同一套构建既能放到 GitHub Pages，也能交给 Vercel。依赖只保留框架、React 和 Tailwind。

## 环境

- Node.js 20 或以上（本地验证使用 Node.js 22）

## 安装

```bash
npm install
```

## 本地预览

```bash
npm run dev
```

浏览器打开 <http://localhost:3000>。

## 构建

```bash
npm run build
```

静态文件输出到 `out/`。预览构建结果：

```bash
npm run preview
```

类型检查：

```bash
npm run typecheck
```

`npm run typecheck` 需要先跑过一次 `npm run dev` 或 `npm run build`，以便生成 `next-env.d.ts`。

## 页面

| 路径 | 页面 |
| --- | --- |
| `/` | 首页 |
| `/products/` | 产品 |
| `/services/` | 服务 |
| `/cooperation/` | 合作 |
| `/contact/` | 联系我们 |
| `/about/` | 关于我们（不在主导航，页脚有入口） |

## 改哪里

- `lib/site.ts`：品牌、公司、定位、宗旨、域名、电话、导航
- `lib/content.ts`：各页尚未定稿的栏目
- `app/globals.css` 里的 `@theme`：颜色
- `app/robots.ts`、`app/sitemap.ts`：收录规则和站点地图
- `public/og.png`：社交分享图

各页的 `<title>`、description、canonical 和 Open Graph 在 `lib/seo.ts` 与对应的 `page.tsx`。

## 部署

构建结果在 `out/`。主站点是自定义域名 <https://www.shurenwang.com/>。Jerry 已把 DNS（CNAME `www` → `jerrylee99.github.io`）和 **Settings → Pages → Custom domain** 配成 `www.shurenwang.com`，页面在域名根路径 `/`。

`next.config.ts` 读取环境变量 `BASE_PATH`，同时用作 `basePath` 和 `assetPrefix`。不设置时不加前缀。线上构建不要设置 `BASE_PATH`，否则 CSS、JS 和图片会请求 `/shurenwang-website/...` 而 404。不要在仓库里加 `CNAME`：Actions 发布会忽略它，自定义域名以 Pages 设置为准。

与线上一致的本地构建：

```bash
npm run build
```

`.github/workflows/build.yml` 在 pull request 和推送到 `main` 时都不设置 `BASE_PATH`。只有推送到 `main` 才会上传 `out/` 并部署到 GitHub Pages。合并到 `main` 之后才会重新部署到 <https://www.shurenwang.com/>。

**Settings → Pages → Source** 需要是 **GitHub Actions**。工作流不能代替这一步。如果 Source 不是 Actions，部署作业会失败，改完再重新跑那次 workflow。

旧的 GitHub 项目页 <https://jerrylee99.github.io/shurenwang-website/> 是次要/遗留地址。只有还要在那个子路径提供时，才单独构建：

```bash
BASE_PATH=/shurenwang-website npm run build
```

这次构建不能和根路径站点混用。

## 部署前还要 Jerry 拍板

- 标志和品牌色
- 团队介绍
- 上线前是否先禁止搜索引擎收录（改 `app/robots.ts`）
- 若服务器在中国大陆，备案信息需要确认后再加，不要先写占位号

未接入统计，仓库里也没有密钥。
