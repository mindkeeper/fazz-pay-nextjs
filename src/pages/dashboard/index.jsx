import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "src/common/components/Navbar";
import Sidebar from "src/common/components/Sidebar";
import Footer from "src/common/components/Footer";
import styles from "src/common/styles/Dashboard.module.css";
import { useRouter } from "next/router";
import PageTitle from "src/common/components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import historyAction from "src/redux/actions/history";
import Card from "src/common/components/CardHistory";
import userAction from "src/redux/actions/user";
import Modal from "src/common/components/ModalTopUp";

function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const history = useSelector((state) => state.history);
  const [showModal, setShowModal] = useState(false);

  const [query, setQuery] = useState({ page: 1, limit: 10, filter: "MONTH" });
  const currency = (price) => {
    return (
      "RP. " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  const modalControl = () => setShowModal(!showModal);
  useEffect(() => {
    dispatch(
      userAction.getUserDetailThunk(auth.userData.token, auth.userData.id)
    );
    dispatch(historyAction.getHistoryThunk(auth.userData.token, query));
  }, []);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <>
      <PageTitle title="Dashboard" />
      <Modal
        open={showModal}
        setOpen={setShowModal}
        token={auth.userData.token}
      />
      <Navbar history={history.data}>
        <div className={styles.container}>
          <div className={`col-lg-3 ${styles.onMobile}`}>
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <aside className={styles.side}>
              <div className={styles["side-top"]}>
                <div className={styles["top-left"]}>
                  <p className={styles.balance}>Balance</p>
                  <p className={styles.price}>{currency(profile.balance)}</p>
                  <p className={styles.phone}>{profile.noTelp}</p>
                </div>
                <div className={`${styles["top-btn"]} ${styles.btnHide}`}>
                  <div className={styles.btn}>
                    <i className="fa-sharp fa-solid fa-arrow-up"></i>
                    <p>Transfer</p>
                  </div>
                  <div className={styles.btn} onClick={modalControl}>
                    <i className="fa-solid fa-plus"></i>
                    <p>Top Up</p>
                  </div>
                </div>
              </div>
              <div className={`${styles["top-btn"]} ${styles.hide}`}>
                <div className={styles.btn}>
                  <i className="fa-sharp fa-solid fa-arrow-up"></i>
                  <p>Transfer</p>
                </div>
                <div className={styles.btn} onClick={modalControl}>
                  <i className="fa-solid fa-plus"></i>
                  <p>Top Up</p>
                </div>
              </div>
              <div className={styles["bottom"]}>
                <aside className={styles["right-side"]}>
                  <div className={styles["left-top"]}>
                    <div>
                      <i
                        className="fa-solid fa-arrow-down"
                        style={{
                          color: "#1EC15F",
                          fontSize: "30px",
                          marginBottom: "0.5rem",
                        }}
                      ></i>
                      <p style={{ color: "#6A6A6A" }}>Income</p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          marginTop: "0.5rem",
                        }}
                      >
                        Rp2.120.000
                      </p>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-arrow-up"
                        style={{
                          color: "#FF5B37",
                          fontSize: "30px",
                          marginBottom: "0.5rem",
                        }}
                      ></i>
                      <p style={{ color: "#6A6A6A" }}>Expense</p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          marginTop: "0.5rem",
                        }}
                      >
                        Rp1.560.000
                      </p>
                    </div>
                  </div>
                  <div className={styles["left-middle"]}>
                    <p className={styles["plus"]}>+Rp65.000</p>
                    <div className={styles["static"]}>
                      <div className={styles.sat}></div>
                      <p>Sat</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.sun}></div>
                      <p>Sun</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.mon}></div>
                      <p>Mon</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.tue}>
                        <div className={styles.circle}></div>
                        <div className={styles["circle-blue"]}></div>
                      </div>
                      <p>Tue</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.wed}></div>
                      <p>Wed</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.thu}></div>
                      <p>Thu</p>
                    </div>
                    <div className={styles["static"]}>
                      <div className={styles.fri}></div>
                      <p>Fri</p>
                    </div>
                  </div>
                </aside>
                <div className={styles["bottom-right"]}>
                  <div className={styles["right-top"]}>
                    <p className={styles["transaction"]}>Transaction History</p>
                    <p
                      className={styles["seall"]}
                      onClick={() => {
                        router.push("/history");
                      }}
                    >
                      See all
                    </p>
                  </div>
                  {history?.data?.length < 1 ? (
                    <p>No transaction yet</p>
                  ) : (
                    history?.data?.map((data, index) => {
                      if (index < 4) return <Card data={data} key={index} />;
                    })
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </Navbar>
    </>
  );
}

export default Dashboard;
