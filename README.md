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


## react-select
### Installation and usage
The easiest way to use **react-select** is to install it from npm and build it into your app with Webpack.
```shell
yarn add react-select
```

Then use it in your app:
```javascript
import React from 'react';
import Select from 'react-select';

// Sample data
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

// Component in select component
const CustomClearText = () => '모두 삭제';
const ClearIndicator = (props) => {
  const { children = <CustomClearText/>, getStyles, innerProps: { ref, ...restInnerProps } } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
      <div style={{ padding: '0px 5px' }}>
        {children}
      </div>
    </div>
  );
};

// Component styles in select component
const ClearIndicatorStyles = (base, state) => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
});

class ReactSelectPage extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder='dasdda'
        closeMenuOnSelect={false}
        components={{ ClearIndicator }}   // embedded
        styles={{ clearIndicator: ClearIndicatorStyles }}
        isMulti
      />
    );
  }
}

export default ReactSelectPage;
```