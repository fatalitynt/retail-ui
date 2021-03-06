import Button from './Button.js';

const ButtonAdapter = {
  click(inst) {
    if (inst.props.onClick) {
      inst.props.onClick();
    }
  },

  isDisabled(inst) {
    return !!inst.props.disabled;
  }
};

Button.__ADAPTER__ = ButtonAdapter;

export default Button;
