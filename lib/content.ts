import { site } from "@/lib/site";

/** 已定稿的句子放在 lib/site.ts。这里只保留各页结构和尚未提供的部分。 */

export const homeContent = {
  title: site.name,
  lede: site.positioning,
  primaryCta: "查看产品 / 服务",
  secondaryCta: "联系我们",
  purposeTitle: "宗旨",
  purpose: site.purpose,
  mapTitle: "了解更多",
  mapNote: "产品清单、团队和正式联系方式尚未提供。",
  map: [
    {
      href: "/about",
      title: "关于我们",
      body: "公司名称、品牌定位与宗旨。",
    },
    {
      href: "/products",
      title: "产品 / 服务",
      body: "具体产品尚未提供，此页为预留栏目。",
    },
    {
      href: "/contact",
      title: "联系我们",
      body: "正式联系方式尚未提供。表单会打开邮件客户端。",
    },
  ],
  closingTitle: "联系",
  closingBody: "正式联系方式尚未提供。留言只会打开本机的邮件客户端。",
  closingCta: "去联系页",
};

export const aboutContent = {
  title: "关于我们",
  description: site.description,
  purposeTitle: "宗旨",
  missingTitle: "尚未提供",
  missingNote: "下面这些还没有正式内容，因此页面不作介绍。",
  missing: ["团队介绍", "产品与服务清单", "正式联系方式"],
};

export const productsContent = {
  title: "产品 / 服务",
  description: "乐活熟人的产品与服务。具体清单尚未提供。",
  lede: "具体产品与服务尚未提供。以下栏目为预留，名称和说明待补充。",
  items: [
    {
      title: "栏目一",
      status: "待补充",
      body: "占位。产品名称与说明尚未提供。",
    },
    {
      title: "栏目二",
      status: "待补充",
      body: "占位。产品名称与说明尚未提供。",
    },
    {
      title: "栏目三",
      status: "待补充",
      body: "占位。产品名称与说明尚未提供。",
    },
  ],
};

export const contactContent = {
  title: "联系我们",
  description: "联系乐活熟人。正式联系方式尚未提供，当前表单为占位。",
  lede: "正式电话、地址和邮箱尚未提供。下面的表单只会打开你自己的邮件客户端。",
  formTitle: "发送留言",
  requiredHint: "标有 * 的为必填。",
  nameLabel: "姓名",
  emailLabel: "邮箱",
  messageLabel: "留言",
  namePlaceholder: "你的姓名",
  emailPlaceholder: "name@example.com",
  messagePlaceholder: "想了解或想告知的事情",
  submitLabel: "通过邮件发送",
  submitHint: "提交不会把内容存到网站服务器。",
  asideTitle: "邮箱",
  asideNote: "占位地址，不是已公布的官方邮箱。",
  statusOpened: "正在打开邮件客户端。如果没有反应，请直接使用页面上的邮箱。",
};

export const notFoundContent = {
  title: "没有找到这个页面",
  body: "链接可能写错了，或者这一页还没做。",
  cta: "返回首页",
};
