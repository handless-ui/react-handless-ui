# 单选 RadioGroup、Radio

## 引入

```js
import { UiRadioGroup, UiRadio } from "react-handless-ui";
```

## 语法

先定义变量：

```js
let [val, setVal] = useState();
```

然后在页面中使用即可：

```html
<UiRadioGroup value={val} onChange={newValue => { setVal(newValue) }}>
    <UiRadio value="val1"></UiRadio>条目一
    <UiRadio value="val2"></UiRadio>条目二
    <UiRadio value="val3"></UiRadio>条目三
</UiRadioGroup>
```

完整的例子代码你可以访问： [../test/Radio](../test/Radio) 。