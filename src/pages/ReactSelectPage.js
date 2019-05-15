import React from 'react';
import Select from 'react-select';
// import MultiSelect from 'components/select/MultiSelect';

// Sample data
const options = [
  { value: 'Kim', label: '김사원' },
  { value: 'Lee', label: '이대리' },
  { value: 'Park', label: '박과장' },
  { value: 'Oh', label: '오차장' },
  { value: 'Choe', label: '최부장' }
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
