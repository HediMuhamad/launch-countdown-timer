import Image from "next/image";
import { Social, socials } from "./constants";
import styles from "./style.module.css";

export const SocialSection = () => {
  return (
    <footer className={styles.container}>
      {socials?.map((social) => (
        <Button {...social} key={social?.name} />
      ))}
    </footer>
  );
};

const Button = ({ url, icon, name }: Social) => {
  return (
    <a href={url} target="_blank" className={styles.icon}>
      <Image src={icon} alt={name} width={25} height={25} />
    </a>
  );
};
