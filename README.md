# React Playground
React.js 기반의 컴포넌트를 지지고 볶아 보는 공간입니다.



## Directory Structure
디렉토리 구조는 다음과 같습니다.

```
src
	components
    		common
    			Button
    				Button.js
    				Button.scss

			material
				OutlinedTextField.js
				SimpleSelect.js

			modal
				AskShareModal
					AskShareModal.js
					AskShareModal.scss
					index.js
				ModalWrapper
					ModalWrapper.js
```


### Installing
```shell
yarn add react-quill
# npm i react-quill
```

## Usage
```shell
yarn install
```



다음과 같은 오류가 발생합니다.

```
To import Sass files, you first need to install node-sass.
Run `npm install node-sass` or `yarn add node-sass` inside your workspace.
```



그래서 설치해줍니다.

```shell
yarn add node-sass
```



### Customize `sass-loader` Settings

```shell
git add .
git commit -m 'Commit before yarn eject'
```

And then, execute below the command.

```shell
yarn eject
? Are you sure you want to eject? This action is permanent. (y/N) y
```



`sassRegex` 로 검색합니다.

`webpack.config.js` 에서 다음 부분을 추가합니다.

```javascript
use: getStyleLoaders({
    importLoaders: 2,
    sourceMap: isEnvProduction && shouldUseSourceMap
}).concat({
    loader: require.resolve('sass-loader'),
    options: {
        includePaths: [paths.appSrc + '/styles'],
        sourceMap: isEnvProduction && shouldUseSourceMap
    }
}),
```



```javascript
@import 'utils.scss';
```

