import PropTypes from 'prop-types';
import classnames from 'classnames';


function Button({
  children, 
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
  ...rest
  }) {
    const classes = classnames(rest.className, 'flex items-center px-3', 'py-1.5', 'border', {
      'text-white border-blue-500 bg-blue-500': primary,
      'text-white border-yellow-400 bg-yellow-400': warning,
      'text-white border-green-500 bg-green-500': success,
      'text-white border-gray-900 bg-gray-900': secondary,
      'text-white border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-500': outline && secondary,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
      'text-green-500': outline && success,
    });
  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, warning, success, danger}) => {
    const count = Number(!!primary) + 
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
      if (count > 1) 
        return new Error('Only one of the variations should be provided.')   
  },
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
}

export default Button