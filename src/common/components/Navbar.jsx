import React, { useState } from "react";
import Image from "next/image";
import defaultImg from "public/images/default.jpg";
import styles from "src/common/styles/Navbar.module.css";
import Sidebar from "src/common/components/sidebar";
import { useSelector } from "react-redux";

function Navbar({ children }) {
  const [show, setShow] = useState(false);
  const profile = useSelector((state) => state.user.profile);
  const link = process.env.CLOUDINARY_LINK;

  const notifHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const sidebarHandler = (e) => {
    e.preventDefault();
    show === true && setShow(false);
  };

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["navbar-left"]}>
          <div className={styles["on-mobile"]} onClick={sidebarHandler}>
            <Sidebar />
          </div>
          <p className={styles.title}>FazzPay</p>
        </div>
        <div className={styles["navbar-right"]}>
          <div className={styles["mobile"]}>
            <div className={styles["img-container"]}>
              <Image
                src={!profile.image ? defaultImg : `${link}/${profile.image}`}
                alt="profile"
                style={{ cursor: "pointer" }}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles["name-phone"]}>
              <p className={styles["greating"]}>Hello,</p>
              <p className={styles["navbar-name"]}>Robert Chandler</p>
              {/* <p className={styles["navbar-phone"]}>+62 8139 3877 7946</p> */}
            </div>
          </div>
          <div className={styles["pc"]}>
            <div className={styles["img-container"]}>
              <Image
                src={!profile.image ? defaultImg : `${link}/${profile.image}`}
                alt="profile"
                style={{ cursor: "pointer" }}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles["name-phone"]}>
              <p
                className={styles["navbar-name"]}
              >{`${profile.firstName} ${profile.lastName}`}</p>
              <p className={styles["navbar-phone"]}>{profile.noTelp}</p>
            </div>
          </div>
          <i
            className="fa-regular fa-bell"
            onClick={notifHandler}
            style={{
              fontSize: "1.6rem",
              color: "#4D4B57",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
      {show && (
        <>
          <div className={styles.modal}>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-down"
                style={{
                  color: "#1EC15F",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Accept from Joshua Lee</p>
                <p className={styles["price"]}>Rp220.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-up"
                style={{
                  color: "#FF5B37",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Transfer to Deni</p>
                <p className={styles["price"]}>Rp149.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-down"
                style={{
                  color: "#1EC15F",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Accept from Joshua Lee</p>
                <p className={styles["price"]}>Rp220.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-up"
                style={{
                  color: "#FF5B37",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Transfer to Deni</p>
                <p className={styles["price"]}>Rp149.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-down"
                style={{
                  color: "#1EC15F",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Accept from Joshua Lee</p>
                <p className={styles["price"]}>Rp220.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-up"
                style={{
                  color: "#FF5B37",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Transfer to Deni</p>
                <p className={styles["price"]}>Rp149.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-down"
                style={{
                  color: "#1EC15F",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Accept from Joshua Lee</p>
                <p className={styles["price"]}>Rp220.000</p>
              </div>
            </div>
            <div className={styles.card}>
              <i
                className="fa-solid fa-arrow-up"
                style={{
                  color: "#FF5B37",
                  fontSize: "30px",
                  marginBottom: "0.5rem",
                }}
              ></i>
              <div style={{ lineHeight: "15px" }}>
                <p className={styles["name"]}>Transfer to Deni</p>
                <p className={styles["price"]}>Rp149.000</p>
              </div>
            </div>
          </div>
        </>
      )}
      {children}
    </>
  );
}

export default Navbar;
