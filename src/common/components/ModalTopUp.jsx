import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useState } from "react";
import styles from "src/common/styles/ModalTopUp.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import topUpAction from "src/redux/actions/topUp";
import Link from "next/link";

const ModalTopUp = ({ setOpen, open, token }) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const directedLink = useSelector((state) => state.topUp.redirectUrl);
  const linkRef = useRef(null);
  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });

  const topUpSuccess = () => {
    setOpen(!open);
    toast.success("Redirecting you to payment page");
    window.open(`${directedLink}`, "_blank");
  };
  const topUpFailed = (errorMsg) => {
    setOpen(!open);
    toast.error(`${errorMsg}`);
  };
  const topupHandler = (e) => {
    e.preventDefault();
    dispatch(topUpAction.topUpThunk(body, token, topUpSuccess, topUpFailed));
  };
  return (
    <>
      {open && (
        <div onSubmit={topupHandler} className={styles.modal}>
          <form className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>Top Up Amount</p>
            </div>
            <input
              type="text"
              name="amount"
              className={styles["input-amount"]}
              onChange={changeHandler}
            />
            <div className={styles["modal-footer"]}>
              <button className={styles.confirm} type="submit">
                Confirm
              </button>
              <button onClick={() => setOpen(!open)} className={styles.cancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ModalTopUp;