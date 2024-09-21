# 多选 CheckGroup、Check

## 引入

```js
import { UiCheckGroup, UiCheck } from "react-handless-ui";
```

## 语法

先定义变量：

```js
let [vals, setVals] = useState([]);
```

然后在页面中使用即可：

```html
<UiCheckGroup value={vals} onChange={newValues => { setVals(newValues) }}>
    <UiCheck value="val1"></UiCheck>条目一
    <UiCheck value="val2"></UiCheck>条目二
    <UiCheck value="val3"></UiCheck>条目三
</UiCheckGroup>
```

完整的例子代码你可以访问： [../test/Check](../test/Check) 。