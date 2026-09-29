import CallButton from "@/components/CallButton/CallButton";
import { TelegramIcon, ViberIcon, WhatsAppIcon } from "@/components/Icons/Icons";
import { messengers } from "@/data/site";
import styles from "./Hero.module.css";

const messengerIcons = {
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
  viber: ViberIcon,
};

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.frame}`}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              Треба перевезти?
              <span>Беремо й веземо</span>
            </h1>
            <p className={styles.text}>
              Меблі, техніка, особисті речі та будматеріали по Зеленодольську,
              Криворізькому району та між містами України.
            </p>
          </div>
          <div className={styles.actions}>
            <CallButton wide className={styles.callHero} />
            <ul className={styles.messengers}>
              {messengers.map((item) => {
                const Icon = messengerIcons[item.id];

                return (
                  <li key={item.id}>
                    <a className={styles.messenger} href={item.href} target="_blank" rel="noopener noreferrer">
                      <Icon />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
