import Script from "next/script";

export function HistatsCounter() {
  return (
    <div className="flex justify-center mt-12 mb-8">
      {/* Histats.com  (div with counter) */}
      <div id="histats_counter"></div>
      
      {/* Histats.com  START  (aync) */}
      <Script id="histats-script" strategy="afterInteractive">
        {`
          var _Hasync= _Hasync|| [];
          _Hasync.push(['Histats.start', '1,5047708,4,111,175,25,00001000']);
          _Hasync.push(['Histats.fasi', '1']);
          _Hasync.push(['Histats.track_hits', '']);
          (function() {
          var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
          hs.src = ('//s10.histats.com/js15_as.js');
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
          })();
        `}
      </Script>
      <noscript>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src="//sstatic1.histats.com/0.gif?5047708&101" alt="counter create hit" style={{ border: 0 }} />
        </a>
      </noscript>
      {/* Histats.com  END  */}
    </div>
  );
}
