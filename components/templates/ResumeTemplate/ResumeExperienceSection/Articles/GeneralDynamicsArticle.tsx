import { GeneralDynamicsImage } from '@/atoms/Images/GeneralDynamicsImage';
import { ExperienceArticle } from '@/organisms/ExperienceArticle';

export function GeneralDynamicsArticle() {
  return (
    <ExperienceArticle
      image={<GeneralDynamicsImage />}
      title="General Dynamics | Senior Software Engineer II"
      location="Scottsdale, AZ | June 2015 - June 2019"
      roles={[
        'Worked on mission-critical defense software for secure communications.',
        'Implemented and tested embedded systems and real-time applications.',
        'Collaborated with cross-disciplinary teams to meet strict security requirements.',
        'Assisted in all database operations for the Enterprise Infrastructure segment of the NASA SGSS project.',
        'Designed and developed relational databases utilizing Oracle Exadata, MS SQL, and MySQL products.',
        'Employed OLTP 3NF & OLAP star schema principles and created entity relationship models depicting database structure.',
        'Created Python scripts to perform tasks such as parsing Excel spreadsheets and generating SQL statements.',
        'Maintained and configured COTS applications, such as ODI, GoldenGate, and OBIEE, for use on projects.',
        'Communicated with NASA engineers at White Sands and Goddard to verify data and provide pre-deployment training.',
      ]}
      technologies="Java, J2EE, JPA, Jenkins, Python, NumPy, OpenPyxl, SQL, PL/SQL, Bash, Embedded Systems, Linux, RedHat Linux, VMware vSphere, Oracle Database, Oracle WebLogic, Oracle Exadata, Oracle Business Intelligence, Oracle Data Integrator, Oracle GoldenGate, MS SQL, MySQL, ODI, GoldenGate, OBIEE, Eclipse, Star Schema, 3NF, Git"
    />
  );
}
