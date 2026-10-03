function SpriteIcon({ id, width = 24, height = 24, className, viewBox = "0 0 24 24" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
    >
      <use href={`/images/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export function TelegramIcon() {
  return <SpriteIcon id="telegram" />;
}

export function WhatsAppIcon() {
  return <SpriteIcon id="whatsapp" />;
}

export function ViberIcon() {
  return <SpriteIcon id="viber" />;
}

export function PhoneIcon({ className }) {
  return <SpriteIcon id="phone" width={18} height={18} className={className} />;
}
