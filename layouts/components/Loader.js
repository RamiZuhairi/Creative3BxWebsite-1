import styles from "../../styles/Loader.module.css";
import Image from "next/image";
import loadingImage from "../../public/images/loadingGifGreen.gif";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Image alt="loading" src={loadingImage} width={200} height={200} />
      
    </div>
  );
}
