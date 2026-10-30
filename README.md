# 乐活熟人官网

乐活熟人的公司官网。公司是宁波熟人网络科技有限公司，域名是 `www.shurenwang.com`。仓库名里的“熟人网”只作项目称呼，页面上的品牌名是「乐活熟人」。

合并到 `main`，以及之后的任何部署，都需要 **Jerry 确认**。

## 已经写上的正式文案

这些句子来自 Jerry，页面按原文使用，没有另写口号：

- 品牌：乐活熟人
- 公司：宁波熟人网络科技有限公司
- 定位：为追求「健康@快乐」一族彼此熟悉的企业或个人，搭建安全、安心、分享、便捷的服务平台。
- 宗旨：为重视健康、关爱环保，在生产与消费时以健康、环保、时尚、有机、天然、绿色为主题。
- 域名：www.shurenwang.com

集中在 `lib/site.ts`。首页主视觉和关于页使用定位；关于页和首页都放了宗旨；页眉、页脚和标题使用「乐活熟人」；页脚和关于页写公司名。

## 仍是占位

Jerry 还没有提供这些，页面上会标明尚未提供，没有编造：

- 产品 / 服务清单
- 正式联系方式（表单里的 `contact@shurenwang.com` 只是占位，提交会打开邮件客户端）
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
| `/about/` | 关于我们 |
| `/products/` | 产品 / 服务 |
| `/contact/` | 联系我们 |

## 改哪里

- `lib/site.ts`：品牌、公司、定位、宗旨、域名、占位邮箱、导航
- `lib/content.ts`：各页尚未定稿的栏目
- `app/globals.css` 里的 `@theme`：颜色
- `app/robots.ts`、`app/sitemap.ts`：收录规则和站点地图
- `public/og.png`：社交分享图

各页的 `<title>`、description、canonical 和 Open Graph 在 `lib/seo.ts` 与对应的 `page.tsx`。

## 部署前还要 Jerry 拍板

- 托管用 GitHub Pages 还是 Vercel。若用 GitHub 项目页、又还没绑 `www.shurenwang.com`，需要再加 `basePath`
- 标志和品牌色
- 产品清单、团队介绍、正式联系方式
- 上线前是否先禁止搜索引擎收录（改 `app/robots.ts`）
- 若服务器在中国大陆，备案信息需要确认后再加，不要先写占位号

未接入统计，仓库里也没有密钥。
