'use client';
import Image from "next/image";
import styles from "./hero.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0
  });

  // Calculate time remaining to September 3, 2025
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('September 4, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return null;

  return (
    <div id="hero-section" className="relative w-full h-screen overflow-hidden">
      <Image
        alt="background"
        src="/assets/svgs/2025/Background.svg"
        fill
        priority
        className="object-cover z-1"
      />

      <div className="relative z-2 w-full h-full flex items-center">
        <div className={clsx(styles.heroContainer)}>
          {/* Left Content */}
          <div className={styles.heroLeftContainer}>
            <motion.div
              className={styles.heroContentContainer}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <p className={clsx(styles.descriptionText)}>
                Come for the hack.
                <br />
                Stay for the vibes.
              </p>

              <p className={clsx(styles.dateText)}>
                3RD SEPTEMBER, 2025 <span className="text-[#fc74c2]">--</span> <span className={clsx(styles.dateEvents)}>ETHAccra Developer Summit</span>
              </p>
               <p className={clsx(styles.dateText)}>
                4TH - 6TH SEPTEMBER, 2025 <span className="text-[#fc74c2]">--</span> <span className={clsx(styles.dateEvents)}>Hackathon</span>
              </p><br/>

              <p className={clsx(styles.venueText)}>
                ISSER Conference Hall, University of Ghana.
              </p>
            
              {/* Countdown Timer with MORE text */}
              <div className={styles.countdownWrapper}>
                <div className={styles.countdownContainer}>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownValue}>{timeLeft.days}</span>
                    <span className={styles.countdownLabel}>Days</span>
                  </div>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownValue}>{timeLeft.hours}</span>
                    <span className={styles.countdownLabel}>Hours</span>
                  </div>
                </div>
              </div>

              <div className={styles.buttonContainer}>
                <a
                  href="https://taikai.network/ethaccra/hackathons/Hackathon2025"
                  target="_blank"
                  className={clsx(styles.heroButton)}
                >
                  APPLY NOW
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;