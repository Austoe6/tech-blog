import * as React from 'react';
import classNames from 'classnames';
import './index.scss';

export default function Divider({
  prefixCls = 'ant',
  type = 'horizontal',
  orientation = '',
  className,
  children,
  dashed,
  ...restProps
}) {
  const orientationPrefix = (orientation.length > 0) ? '-' + orientation : orientation;
  const classString = classNames(
    className, `${prefixCls}-divider`, `${prefixCls}-divider-${type}`, {
    [`${prefixCls}-divider-with-text${orientationPrefix}`]: children,
    [`${prefixCls}-divider-dashed`]: !!dashed,
  });
  return (
    <div className={classString} {...restProps}>
      {children && <span className={`${prefixCls}-divider-inner-text`}>{children}</span>}
    </div>
  );
}
