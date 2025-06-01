# 弹出层 Popup

> v0.2.0 新增

## 引入

```js
import { UiPopup } from "react-handless-ui";
```

## 语法

先定义变量：

```js
let [val, setVal] = useState();
```

然后在页面中使用即可：

```html
<UiPopup value={val}> 自定义内容 </UiPopup>
```

### Popup 事件

| 属性 | 说明 | 回调参数 |
| ------- | ------- | ------- |
| onClick | 用户点击弹框的时候触发 | - |

完整的例子代码你可以访问： [../test/Popup](../test/Popup) 。