import classNames from "classnames/bind";
import styles from "./AccountItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountsItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("shape")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/de36861a1f9bcdac648055e0193a2b4a~c5_100x100.jpeg?x-expires=1686222000&x-signature=T0AqHW1R6d0BnIVmrvNsXK52AZc%3D"
          alt=""
        />
      </div>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>slendyy</span>
          <FontAwesomeIcon
            className={cx("checked")}
            icon={faCheckCircle}
            style={{ color: "#20d5ec" }}
          />
        </p>
        <span className={cx("username")}>slendyy1406</span>
      </div>
    </div>
  );
}

export default AccountsItem;
