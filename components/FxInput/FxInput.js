import React, {PropTypes} from 'react';

import Button from '../Button';
import Group from '../Group';
import Icon from '../Icon';
import Input from '../Input';

class FxInput extends React.Component {
  static propTypes = {
    auto: PropTypes.bool,
  };

  static defaultProps = {
    width: 250,
  };

  render() {
    const {width} = this.props;

    const inputProps = {};
    let button = null;
    if (this.props.auto) {
      inputProps.leftIcon = <Icon name="fx" />;
    } else {
      button = (
        <Button narrow onClick={this.props.onRestore}>
          <Icon name="undo" />
        </Button>
      );
    }

    return (
      <Group width={width}>
        {button}
        <Input mainInGroup align="right" {...this.props} {...inputProps} />
      </Group>
    );
  }
}

module.exports = FxInput;