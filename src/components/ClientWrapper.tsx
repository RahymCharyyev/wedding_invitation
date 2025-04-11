'use client';

import { useState } from 'react';
import FirstScreenCover from '@/components/FirstScreenCover';
import HeroSection from '@/components/HeroSection';
import InvitationText from '@/components/InvitationText';
import CountdownSection from '@/components/CountdownSection';
import VenueSection from '@/components/VenueSection';
import ScheduleSection from '@/components/ScheduleSection';
import RsvpSection from '@/components/RsvpSection';
import FooterSection from '@/components/FooterSection';

export default function ClientWrapper() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked ? (
        <FirstScreenCover setUnlocked={setUnlocked} />
      ) : (
        <>
          <HeroSection />
          <InvitationText />
          <CountdownSection />
          <VenueSection />
          <ScheduleSection />
          <RsvpSection />
          <FooterSection />
        </>
      )}
    </>
  );
}
