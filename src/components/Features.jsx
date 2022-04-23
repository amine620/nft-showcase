import assets from "../assets"
import styles from "../styles/global"

const FeaturesCard=({iconUrl,iconText})=>(
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
       <div className={`${styles.subSection} flex-col text-center`}>
            <div>
              <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
              <p className={`${styles.pText} ${styles.whiteText}`}>
                ProNef has been developed using a cross-platfom technology , React Native
              </p>
            </div>
            <div className={styles.flexWrap}>
               <FeaturesCard iconUrl={assets.react} iconText={"React Native"} />
               <FeaturesCard iconUrl={assets.javascript} iconText={"JavaScript"} />
            </div>
       </div>
    </div>
  )
}

export default Features