import classNames from "classnames/bind";
import Header from "~/components/Layout/components/header";
import Sidebar from "./sidebar";
import styles from "./defaultLayout.module.css";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
