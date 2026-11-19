"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";

/**
 * 乐活熟人（https://www.shurenwang.com）官方访问统计。只使用这两个已开通的 ID。
 * 百度统计 HM ID 844057caff39f0ca216f0925fab7fc77（站点 ID 23709699）。
 * GA4 衡量 ID G-NQ7H54KEKS（网站数据流 https://www.shurenwang.com，媒体资源 565145375）。
 *
 * React 会把 async 的 script src 抽到 head 前部，打乱官方顺序。
 * 下面整段 HTML 由 Next 插到每个静态页的 </head> 之前；外层只包第一对 script，避免被重新排序。
 */
const officialSnippets = `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?844057caff39f0ca216f0925fab7fc77";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NQ7H54KEKS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NQ7H54KEKS');
</script>`;

const visitTrackingHtml = officialSnippets.replace(/^<script>/, "").replace(/<\/script>$/, "");

export function VisitTracking() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) {
      return null;
    }
    inserted.current = true;
    return <script dangerouslySetInnerHTML={{ __html: visitTrackingHtml }} />;
  });

  return null;
}
