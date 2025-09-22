import { useEffect, useRef } from "react";
import logoImage from "@/assets/logo-ck.jpg";
export const AnimatedLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Create floating animation
    const floatKeyframes = [{
      transform: 'translateY(0px)'
    }, {
      transform: 'translateY(-10px)'
    }, {
      transform: 'translateY(0px)'
    }];
    const floatAnimation = logo.animate(floatKeyframes, {
      duration: 3000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
    return () => {
      floatAnimation.cancel();
    };
  }, []);
  return <div className="flex justify-center mb-4">
      <div ref={logoRef} className="relative w-32 h-32 md:w-40 md:h-40 group">
        
        
        {/* Green shader effect */}
        
        
        {/* Aerodynamic green lines */}
        
      </div>
    </div>;
};