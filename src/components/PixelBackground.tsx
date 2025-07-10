const PixelBackground = () => {
  return (
    <>
      {/* Day mode background */}
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-700 dark:opacity-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/2590d42f-d68b-45b8-8f25-7b49e0a0a4a2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated'
        }}
      />
      
      {/* Night mode background */}
      <div 
        className="fixed inset-0 z-0 opacity-0 transition-opacity duration-700 dark:opacity-100"
        style={{
          backgroundImage: 'url(/lovable-uploads/3783c5cc-d602-45c7-b564-30c345827dbc.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
          imageRendering: 'pixelated'
        }}
      />
    </>
  );
};

export default PixelBackground;