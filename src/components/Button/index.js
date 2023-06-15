import classNames from "classnames/bind";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Button({
  href,
  to,
  children,
  onClick,
  primary = false,
  outline = false,
  upload = false,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("buttonWrapper");
  const spann = cx("spann", {
    primary,
    outline,
    upload,
  });
  return (
    <Comp classNames={classes} {...props}>
      <span className={spann}>{children}</span>
    </Comp>
  );
}

export default Button;
