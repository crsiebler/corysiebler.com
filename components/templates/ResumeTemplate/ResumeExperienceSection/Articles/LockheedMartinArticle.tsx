import { LockheedMartinImage } from '@/atoms/Images/LockheedMartinImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function LockheedMartinArticle() {
  return (
    <ExperienceArticle
      image={<LockheedMartinImage />}
      title="Lockheed Martin | Technologies Specialist"
      location="Goodyear, AZ | May 2014 - January 2015"
      roles={[
        'Assist IRAD to provide Processing, Exploitation, and Dissemination (PED) on UAS Control Segment (UCS).',
        'Develop OSGi bundles utilizing Java, Apache Maven, and Apache Karaf.',
        'Incorporate third-party FOSS such as Xuggler, FFmpeg, and OpenCV for use in project.',
        'Deploy distributed system add-ons within the DreamHammer Ballista application.',
        'Defect analysis and resolution work, test, integration, regression testing, tool development, software design, and design documentation.',
      ]}
      technologies="Java, Maven, OSGi, Xuggler, FFmpeg, OpenCV, Jira, Git, NetBeans, DreamHammer Ballista®, TCP/IP video dissemination, UDP video broadcast, Apache Karaf, Apache ActiveMQ, Apache Derby, Apache ZooKeeper"
    />
  );
}
