import { TriangulatorImage } from '@/atoms/Images/TriangulatorImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function TriangulatorArticle() {
  return (
    <ProjectArticle
      description={
        'Credit Mobility Triangulator is a service developed by OneOrigin and sponsored by Arizona State University. It assists post K-12 faculty with analysis and discovery of courses that count for transfer credits from other institutions. This greatly speeds up processing of transfer students and provides them an interface to search for other schools that accept their existing credits. Currently in development.'
      }
      image={<TriangulatorImage />}
      link={'https://demo.creditmobility.net'}
      title={'Credit Mobility Triangulator'}
    />
  );
}
