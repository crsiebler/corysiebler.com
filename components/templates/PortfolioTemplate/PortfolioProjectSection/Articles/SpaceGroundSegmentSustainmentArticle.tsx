import { SpaceGroundSegmentSustainmentImage } from '@/atoms/Images/SpaceGroundSegmentSustainmentImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function SpaceGroundSegmentSustainmentArticle() {
  return (
    <ProjectArticle
      description="NASA’s Space Network is made up of several Tracking and Data Relay Satellites (TDRS) in geosynchronous orbit which relay data signals from orbiting platforms, including the Hubble Space Telescope and International Space Station, to the ground. The Ground Segment, comprised of antennas, electronics, computers and networking equipment, receives the relayed data signals, processes them, and distributes them to the individual users."
      image={<SpaceGroundSegmentSustainmentImage />}
      link="https://gdmissionsystems.com/satellite-ground-systems/space-network-ground-segment-sustainment"
      title="NASA Space Network Ground Segment Sustainment (SGSS) Program"
    />
  );
}
