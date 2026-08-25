# 站点内容：添加项目和平台链接

你只需要编辑这个文件：[`site.json`](./site.json)。不需要修改网页代码。

保存后，本地页面会自动刷新；确认无误后，把修改提交并推送到 `main`，网站就会自动更新。

> 小提示：每一项之间要有英文逗号 `,`，最后一项后面不要加逗号。网址需要保留双引号。

## 添加项目链接 `projects`

1. 打开 `site.json`。
2. 找到 `"projects": [`。
3. 复制下面整段，粘贴到 `projects` 的方括号中。
4. 把示例文字和网址换成你的内容。

```json
{
  "id": "my-project",
  "title": "我的项目",
  "description": {
    "zh": "用一句话介绍这个项目。",
    "en": "Describe this project in one sentence."
  },
  "href": "https://example.com",
  "tag": { "zh": "网页", "en": "Web" }
}
```

字段说明：

| 字段 | 填什么 |
| --- | --- |
| `id` | 不重复的英文短名，例如 `my-project` |
| `title` | 页面上显示的项目名称 |
| `description` | 中文和英文简介 |
| `href` | 点击项目后打开的网址，需要以 `https://` 开头 |
| `tag` | 项目类别，例如网页、应用、Figma 插件 |

如果前面已经有项目，请记得在前一个项目的 `}` 后面加英文逗号：

```json
"projects": [
  { "这里是原来的项目": "..." },
  { "这里是新项目": "..." }
]
```

## 添加平台链接 `links`

1. 打开 `site.json`。
2. 在文件靠下的位置找到 `"links": [`。
3. 在这个数组里添加新内容。Figma、爱发电和社交平台都放在这里，页面会以相同的卡片样式显示。

```json
"links": [
  {
    "name": "Bilibili",
    "url": "https://space.bilibili.com/your-id"
  }
]
```

添加多个社交链接时，复制 `{ ... }` 部分，并用英文逗号隔开：

```json
"links": [
  {
    "name": "Bilibili",
    "url": "https://space.bilibili.com/your-id"
  },
  {
    "name": "小红书",
    "url": "https://www.xiaohongshu.com/user/profile/your-id"
  }
]
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 平台名称，可用字符串或 `{ "zh", "en" }` |
| `url` | 是 | 主页链接 |
| `icon` | 否 | 可以先不填，网站会显示名称首字。以后想加图标时，可把图片放进 `public/social/`，再填写 `/social/文件名.svg` |

缺 `name` 或 `url` 的项会被忽略，方便先打草稿。

Figma、爱发电和社交平台现在共用一个 `links` 列表。

## 修改邮箱

`site.json` 第一行附近的 `email` 就是页面底部邮箱：

```json
"email": "你的邮箱@example.com"
```

## 修改后检查

如果页面没有显示新内容，通常是漏了逗号或双引号。运行下面的命令可以检查文件格式和网站构建：

```bash
npm run build
```
