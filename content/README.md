# 站点内容

首页文案、作品和链接都从 `site.json` 读取。改完推到 `main` 后会自动部署。

中英文字段写成 `{ "zh": "...", "en": "..." }`。平台名如果两种语言一样，可以直接写字符串。

## 社交链接 `social`

数组里每一项会渲染成一枚图标链接。没有条目时，页面不显示「社交」这一栏。

```json
{
  "name": "Bilibili",
  "icon": "/social/bilibili.svg",
  "url": "https://space.bilibili.com/your-id"
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 平台名称，可用字符串或 `{ "zh", "en" }` |
| `url` | 是 | 主页链接 |
| `icon` | 否 | 图标。本地文件用 `/social/xxx.svg`（放到 `public/social/`），也可以填 `https://...` 图片地址。不填则显示名称首字 |

缺 `name` 或 `url` 的项会被忽略，方便先打草稿。

Figma 和爱发电已经写在 `profiles` 里，不必再放到 `social`。
