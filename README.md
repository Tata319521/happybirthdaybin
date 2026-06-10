# 寿星大人攻略计划

这是一个纯静态 HTML/CSS/JavaScript 搞笑乙女文游模板，可以直接放到 GitHub Pages。

## 文件结构

- `index.html`：网页结构
- `style.css`：乙女游戏界面样式
- `script.js`：剧情、选择支、存档逻辑
- `assets/characters/`：5 个立绘占位图 + 最终合照占位图
- `assets/backgrounds/`：傍晚、夜晚、深夜三个酒吧背景占位图

## 替换素材

把你的立绘图片放进 `assets/characters/`，然后在 `script.js` 顶部修改路径：

```js
characters: {
  me: "assets/characters/你的主角立绘.png",
  birthday: "assets/characters/对象立绘.png",
  bartender: "assets/characters/酒保立绘.png",
  friend: "assets/characters/朋友立绘.png",
  system: "assets/characters/系统立绘.png",
}
```

最终合照替换 `assets/characters/final_cg.svg`，或者改 `index.html` 里 `.final-cg` 的图片路径。

## 改剧情

所有剧情都在 `script.js` 的 `script = [...]` 数组里。

- 普通台词：改 `speaker` 和 `text`
- 背景：改 `bg: "evening" / "night" / "midnight"`
- 立绘位置：改 `sprites: { left: "me", right: "birthday" }`
- 选项：改 `choices`

## 运行

直接双击 `index.html` 可以看。
如果图片路径或本地浏览器限制有问题，可以在文件夹里开一个本地服务器：

```bash
python -m http.server 8000
```

然后浏览器打开：

```text
http://localhost:8000
```
