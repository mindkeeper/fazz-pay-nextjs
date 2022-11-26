import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "src/common/components/Button";
import PageTitle from "src/common/components/PageTitle";
import styles from "src/common/styles/LandingPage.module.css";

import phone from "public/images/phone.svg";
import phone2 from "public/images/phone2.svg";
import playstore from "public/images/playStore.svg";
import applestore from "public/images/appleStore.svg";
import microsoft from "public/images/microsoft.svg";
import dropbox from "public/images/dropbox.svg";
import hm from "public/images/hm.svg";
import bnb from "public/images/bnb.svg";
import canon from "public/images/canon.svg";
import dell from "public/images/dell.svg";
import phone_icon from "public/images/phone-icon.svg";
import key from "public/images/key.svg";
import download from "public/images/download.svg";
import profile from "public/images/profile.svg";
import arrow_left from "public/images/arrow-left.svg";
import arrow_right from "public/images/arrow-right.svg";
export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    console.log(">>>>>>>>>");
    router.push("/login");
  };
  const handleSignup = () => {
    console.log(">>>>>>>>>");
    router.push("/register");
  };
  return (
    <div className={styles.container}>
      <PageTitle title="Landing Page" />
      <header className={`${styles.header} ${styles.flex}`}>
        <sidebar className={styles.sidebar}>
          <p className={styles.title}>FazzPay</p>
        </sidebar>
        <navbar className={`${styles.flex} ${styles.navbar}`}>
          <Button text="Login" variant="login" onClick={() => handleLogin()} />
          <Button
            text="Sign Up"
            variant="signup"
            onClick={() => handleSignup()}
          />
        </navbar>
      </header>
      <main className={styles.main}>
        <section className={`${styles["section-1"]} ${styles.flex}`}>
          <aside className={`${styles.aside}`}>
            <Image src={phone} alt="zwallet" priority></Image>
          </aside>
          <section className={`${styles["section-content"]}`}>
            <p className={styles["display-1"]}>
              Awesome App For Saving{" "}
              <span className={styles.textspan}>Time&#46;</span>
            </p>
            <p className={styles["display-2"]}>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times&#46;
            </p>
            <Button text="Try It Free" variant="try" />
            <p className={styles["display-3"]}>Available on</p>
            <div className={styles.available}>
              <Image
                src={playstore}
                alt="zwallet"
                priority
                className={styles.available}
              ></Image>
              <Image src={applestore} alt="zwallet" priority></Image>
            </div>
          </section>
        </section>
        <section className={`${styles["section-2"]} ${styles.flex}`}>
          <Image src={microsoft} alt="partnership" priority></Image>
          <Image src={dropbox} alt="partnership" priority></Image>
          <Image src={hm} alt="partnership" priority></Image>
          <Image src={bnb} alt="partnership" priority></Image>
          <Image src={canon} alt="partnership" priority></Image>
          <Image src={dell} alt="partnership" priority></Image>
        </section>
        <section className={`${styles["section-3"]} ${styles.flex}`}>
          <div>
            <p className={`${styles["display-4"]}`}>
              <span className={styles.textspan}>About</span> the
              Application&#46;
            </p>
            <p className={`${styles["display-5"]}`}>
              We have some great features from the application and it&#39;s
              totally free <br /> to use by all users around the world&#46;
            </p>
          </div>
          <div className={`${styles["wrapper-card"]} ${styles.flex}`}>
            <div className={`${styles.card1} ${styles.flex}`}>
              <Image src={phone_icon} alt="application" priority></Image>
              <p className={`${styles["display-6"]}`}>24/7 Support</p>
              <p className={`${styles["display-7"]}`}>
                We have 24/7 contact support so you <br /> can contact us
                whenever you want <br /> and we will respond it&#46;
              </p>
            </div>
            <div className={`${styles.card2} ${styles.flex}`}>
              <Image src={key} alt="application" priority></Image>
              <p className={`${styles["display-6"]}`}>Data Privacy</p>
              <p className={`${styles["display-7"]}`}>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us&#46;
              </p>
            </div>
            <div className={`${styles.card1} ${styles.flex}`}>
              <Image src={download} alt="application" priority></Image>
              <p className={`${styles["display-6"]}`}>Easy Download</p>
              <p className={`${styles["display-7"]}`}>
                Zwallet is 100% totally free to use it&#39;s now available on
                Google Play Store and App Store&#46;
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles["section-4"]} ${styles.flex}`}>
          <aside className={`${styles.aside2}`}>
            <Image src={phone2} alt="zwallet" priority></Image>
          </aside>
          <section className={styles.features}>
            <p className={styles["display-8"]}>
              All The <span className={styles.textspan}>Great</span> FazzPay
              Features&#46;
            </p>
            <div>
              <div className={`${styles["card-feature"]} ${styles.flex}`}>
                <p className={styles["display-9"]}>
                  <span className={styles.textspan2}>1&#46;</span>Small Fee
                </p>
                <p className={styles["display-10"]}>
                  We only charge 5&#37; of every success transaction done in
                  FazzPay app&#46;
                </p>
              </div>
              <div className={`${styles["card-feature"]} ${styles.flex}`}>
                <p className={styles["display-9"]}>
                  <span className={styles.textspan2}>1&#46;</span>Data Secured
                </p>
                <p className={styles["display-10"]}>
                  All your data is secured properly in our system and it&#39;s
                  encrypted&#46;
                </p>
              </div>
              <div className={`${styles["card-feature"]} ${styles.flex}`}>
                <p className={styles["display-9"]}>
                  <span className={styles.textspan2}>1&#46;</span>User Friendly
                </p>
                <p className={styles["display-10"]}>
                  FazzPay come up with modern and sleek design and not
                  complicated.&#46;
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className={`${styles["section-5"]} ${styles.flex}`}>
          <p className={`${styles["display-4"]}`}>
            What Users are <span className={styles.textspan}>Saying&#46;</span>
          </p>
          <p className={`${styles["display-5"]}`}>
            We have some great features from the application and it&#39;s
            totally free <br />
            to use by all users around the world&#46;
          </p>
          <div className={`${styles["wrapper-review"]} ${styles.flex}`}>
            <div className={styles["wrapper-arrow1"]}>
              <Image src={arrow_left} alt="arrow" />
            </div>
            <div className={styles.review}>
              <div>
                <Image src={profile} alt="Profile" className={styles.profile} />
              </div>
              <p className={styles["display-11"]}>Alex Hansinburg</p>
              <p className={styles["display-12"]}>Designer</p>
              <p className={styles["display-13"]}>
                &#34;This is the most outstanding app that I&#39;ve ever try in
                my live, this app is such an amazing masterpiece and it&#39;s
                suitable for you who is bussy with their bussiness and must
                transfer money to another person aut there. Just try this app
                and see the power&#33;&#34;
              </p>
            </div>
            <div className={styles["wrapper-arrow2"]}>
              <Image src={arrow_right} alt="arrow" />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <section className={styles["title-footer"]}>
          <p className={styles.textTitle}>FazzPay</p>
          <p className={styles.descTitle}>
            Simplify financial needs and saving <br />
            much time in banking needs with <br />
            one single app&#34;
          </p>
        </section>
        <section className={`${styles.contacts} ${styles.flex}`}>
          <p>2020 FazzPay. All right reserved.</p>
          <div className={`${styles.contact} ${styles.flex}`}>
            <p>+62 5637 8882 9901</p>
            <p>contact&#64;fazzpay.com</p>
          </div>
        </section>
      </footer>
    </div>
  );
}
