import { site } from "@/lib/site";

/** 各页结构。品牌名、定位、宗旨、电话与微信从 lib/site.ts 读取。 */

export const homeContent = {
  title: site.name,
  lede: site.positioning,
  primaryCta: "查看产品",
  secondaryCta: "联系我们",
  purposeTitle: "宗旨",
  purpose: site.purpose,
  mapTitle: "了解更多",
  map: [
    {
      href: "/products",
      title: "产品",
      body: "药食同源的健康产品",
    },
    {
      href: "/services",
      title: "服务",
      body: "软件定制、数据治理、AI 赋能与营销咨询等",
    },
    {
      href: "/cooperation",
      title: "合作",
      body: "产品渠道合作，以及项目落地与企业咨询",
    },
  ],
  closingTitle: "联系",
  closingBody: "可以通过电话或微信联系。",
  closingCta: "去联系页",
};

export const aboutContent = {
  title: "关于我们",
  description: "乐活熟人是宁波熟人网络科技有限公司旗下的专属服务品牌。",
  paragraphs: [
    "乐活熟人是宁波熟人网络科技有限公司旗下的专属服务品牌。",
    site.positioning,
    `品牌宗旨：${site.purpose}`,
  ],
  missingTitle: "尚未提供",
  missingNote: "团队介绍尚未提供。",
};

export const productsContent = {
  title: "产品",
  description: "乐活熟人的产品。主要围绕药食同源的健康产品。",
  lede: "乐活熟人的产品，主要围绕药食同源的健康产品。",
  items: [
    {
      title: "药食同源健康产品",
      body: "面向重视健康与绿色消费的企业与个人。",
    },
  ],
};

export const servicesContent = {
  title: "服务",
  description: "面向企业的软件、数据与智能化落地，以及营销与咨询服务。",
  lede: "面向企业的软件、数据与智能化落地，以及营销与咨询服务。",
  items: [
    "软件定制",
    "数据治理",
    "AI 赋能",
    "人工智能+",
    "工业智能体",
    "FDE 交付落地",
    "SEO / GEO / AEO / SEM 营销",
    "咨询",
  ],
};

export const cooperationContent = {
  title: "合作",
  description:
    "欢迎认同「健康@快乐」与绿色主题的企业与个人，以彼此熟悉、安全安心的方式共建。",
  lede: "欢迎认同「健康@快乐」与绿色主题的企业与个人，以彼此熟悉、安全安心的方式共建。",
  types: [
    {
      title: "产品合作",
      body: "产品渠道、销售",
    },
    {
      title: "服务合作",
      body: "项目落地、企业咨询等",
    },
  ],
  cta: "电话或微信沟通",
};

export const contactContent = {
  title: "联系我们",
  description: "欢迎通过电话或微信联系乐活熟人，聊聊产品、服务或合作。",
  lede: "欢迎通过电话或微信联系乐活熟人，聊聊产品、服务或合作。",
};

export const notFoundContent = {
  title: "没有找到这个页面",
  body: "链接可能写错了，或者这一页还没做。",
  cta: "返回首页",
};
