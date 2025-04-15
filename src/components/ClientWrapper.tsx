'use client';

import { FC, useState } from 'react';
import FirstScreenCover from '@/components/FirstScreenCover';
import HeroSection from '@/components/HeroSection';
import InvitationText from '@/components/InvitationText';
import CountdownSection from '@/components/CountdownSection';
import VenueSection from '@/components/VenueSection';
import ScheduleSection from '@/components/ScheduleSection';
import RsvpSection from '@/components/RsvpSection';
import FooterSection from '@/components/FooterSection';

interface ClientWrapperProps {
  side: 'boy' | 'girl' | 'selbi';
}

export const ClientWrapper: FC<ClientWrapperProps> = ({ side }) => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked ? (
        <FirstScreenCover setUnlocked={setUnlocked} />
      ) : (
        <>
          <HeroSection side={side} />
          <InvitationText side={side} />
          <CountdownSection side={side} />
          <VenueSection side={side} />
          {side !== 'selbi' ? <ScheduleSection side={side} /> : undefined}
          <RsvpSection side={side} />
          <FooterSection side={side} />
        </>
      )}
    </>
  );
};
