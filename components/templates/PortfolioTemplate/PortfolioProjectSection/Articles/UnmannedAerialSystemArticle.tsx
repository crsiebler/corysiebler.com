import { LockheedMartinUasImage } from '@/atoms/Images/LockheedMartinUasImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function UnmannedAerialSystemArticle() {
  return (
    <ProjectArticle
      description="The Lockheed Martin team integrated C2 and ISR systems to provide mission planning, sensor and common operational control for multiple UAS platforms, including Lockheed Martin's UCLASS concept. Using an open architecture framework integrated with DreamHammer's Ballista drone control software and Navy compliant software protocols, a single operator managed multiple UAS platforms simultaneously."
      image={<LockheedMartinUasImage />}
      link="https://www.lockheedmartin.com/en-us/products/isr-uas.html"
      title="Unmanned Aerial System (UAS) Command and Control (C2)"
    />
  );
}
