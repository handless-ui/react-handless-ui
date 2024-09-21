# 开关 Switch

## 引入

```js
import { UiSwitch } from "react-handless-ui";
```

## 语法

先定义变量：

```js
let [val, setVal] = useState(false);
```

然后在页面中使用即可：

```html
<UiSwitch value={val} onChange={newValue => { setVal(newValue) }}></UiSwitch>
```

完整的例子代码你可以访问： [../test/Switch](../test/Switch) 。