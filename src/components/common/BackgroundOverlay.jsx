const BackgroundOverlay = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
};

export default BackgroundOverlay;
