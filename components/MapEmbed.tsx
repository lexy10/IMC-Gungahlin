interface MapEmbedProps {
  src: string;
}

export default function MapEmbed({ src }: MapEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Infinity Medical Centre Gungahlin location on Google Maps"
      />
    </div>
  );
}
