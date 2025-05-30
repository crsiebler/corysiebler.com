import { LoneButteCasinoImage } from '@/atoms/Images/LoneButteCasinoImage';
import { ProjectArticle } from '@/organisms/ProjectArticle';

export function LoneButteCasinoArticle() {
  return (
    <ProjectArticle
      description="Lone Butte Casino was opened in November of 2008 and features unique design elements. Dramatic entryway canopies with changing lights greet each player as they enter through one of three themed passages. One represents earth, one fire and the third represents water. The art work displayed throughout the casino is commissioned from local Native American artists. Provided estimation and project management as the landscape subcontractor under general contactor J.E. Dunn Construction."
      image={<LoneButteCasinoImage />}
      link="https://playatgila.com/"
      title="Lone Butte Casino"
    />
  );
}
