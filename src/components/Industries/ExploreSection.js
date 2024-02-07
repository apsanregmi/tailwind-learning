import Link from "next/link";
import styles from "./ExploreSection.module.css"

const ExploreSection = () => {
    return <section className={`price-plan-page-middle ${styles.exploreSection}`}>
        <div className={`container ${styles.exploreContainer}`}>
            <div className={styles.exploreContent}>
                <h2 className={styles.exploreTitle}>Explore Our Services</h2>
                <p className={styles.exploreDescription}>
                    Elevate your global standards
                    with our comprehensive suite of services.
                    Our expert team is dedicated to providing
                    innovative solutions tailored to meet your
                    unique challenges. Partner with us to
                    transform your business, enhance security,
                    and achieve unparalleled success on a
                    global scale.
                </p>

                <Link legacyBehavior href="/services">
                    <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                        Explore <i className="fas fa-long-arrow-right" />
                    </a>
                </Link>
            </div>
        </div>
    </section>
}

export default ExploreSection;