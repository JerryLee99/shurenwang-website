import { site } from "@/lib/site";

/** 已定稿的句子放在 lib/site.ts。这里只保留各页结构和尚未提供的部分。 */

export const homeContent = {
  title: site.name,
  lede: site.positioning,
  primaryCta: "查看产品",
  secondaryCta: "联系我们",
  purposeTitle: "宗旨",
  purpose: site.purpose,
  mapTitle: "了解更多",
  mapNote: "产品、服务与合作的具体内容尚未提供。",
  map: [
    {
      href: "/products",
      title: "产品",
      body: "具体产品尚未提供，此页为预留栏目。",
    },
    {
      href: "/services",
      title: "服务",
      body: "具体服务尚未提供，此页为预留。",
    },
    {
      href: "/cooperation",
      title: "合作",
      body: "合作方式尚未提供，此页为预留。",
    },
  ],
  closingTitle: "联系",
  closingBody: "可以通过电话或微信联系。",
  closingCta: "去联系页",
};

export const aboutContent = {
  title: "关于我们",
  description: site.description,
  purposeTitle: "宗旨",
  missingTitle: "尚未提供",
  missingNote: "下面这些还没有正式内容，因此页面不作介绍。",
  missing: ["团队介绍", "产品说明", "服务说明", "合作方式"],
};

export const productsContent = {
  title: "产品",
  description: "乐活熟人的产品。具体清单尚未提供。",
  lede: "具体产品尚未提供。以下栏目为预留，名称和说明待补充。",
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

export const servicesContent = {
  title: "服务",
  description: "乐活熟人的服务。具体内容尚未提供。",
  lede: "具体服务尚未提供。此页为预留，说明待补充。",
  note: "占位。服务名称与说明尚未提供。",
};

export const cooperationContent = {
  title: "合作",
  description: "乐活熟人的合作。具体方式尚未提供。",
  lede: "合作方式尚未提供。此页为预留，说明待补充。",
  note: "占位。合作对象与方式尚未提供。可通过联系页的电话或微信沟通。",
};

export const contactContent = {
  title: "联系我们",
  description: "联系乐活熟人。电话 13967875129，或微信扫码添加 Jerry|李警瑞。",
  lede: "可以通过电话或微信联系。",
};

export const notFoundContent = {
  title: "没有找到这个页面",
  body: "链接可能写错了，或者这一页还没做。",
  cta: "返回首页",
};
