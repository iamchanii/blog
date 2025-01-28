export function OgImage({
  title,
  formattedDate,
}: {
  title: string;
  formattedDate: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 120,
        gap: 8,
        background: '#fffcf0',
        color: '#403e3c',
        width: '100%',
        height: '100%',
        fontFamily: 'Intel One Mono',
        position: 'relative',
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          margin: 0,
          letterSpacing: -0.9,
          whiteSpace: 'pre',
        }}
      >
        {title}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <p
          style={{
            fontSize: 24,
            margin: 0,
          }}
        >
          {formattedDate}
        </p>

        <span style={{ height: 1, width: 32, background: 'currentColor' }} />

        <p
          style={{
            fontSize: 24,
            margin: 0,
          }}
        >
          Chanhee Lee
        </p>
      </div>
    </div>
  );
}
