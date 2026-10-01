import { messengers } from "@/data/site";
import { TelegramIcon, ViberIcon, WhatsAppIcon } from "@/components/Icons/Icons";

const icons = {
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
  viber: ViberIcon,
};

export default function Messengers({
  className = "",
  itemClassName = "",
  showLabels = false,
}) {
  return (
    <ul className={className}>
      {messengers.map((item) => {
        const Icon = icons[item.id];
        const isHttp = item.href.startsWith("http");

        return (
          <li key={item.id}>
            <a
              className={itemClassName}
              href={item.href}
              {...(isHttp
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={showLabels ? undefined : item.label}
            >
              <Icon />
              {showLabels ? item.label : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
