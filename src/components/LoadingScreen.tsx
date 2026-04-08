import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500); // kasih delay biar fade out smooth
    }, 9000); // durasi loading

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-black transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <DotLottieReact
        src="https://lottie.host/bed46377-e16c-4a5e-91a6-3818674c8a12/Y4o69CmYML.lottie"
        autoplay
        loop
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
}