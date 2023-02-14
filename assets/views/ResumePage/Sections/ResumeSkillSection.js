import React from 'react';
import Image from 'material-ui-image';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SectionHeader from 'components/SectionHeader';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import MemoryIcon from '@material-ui/icons/Memory';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BowlingIcon from 'icons/BowlingIcon';
import ChristianityIcon from 'icons/ChristianityIcon';
import logoASU from 'images/logo-asufulton.webp';

const ResumeSkillSection = () => (
  <Grid
    container
    item
    direction="column"
    md={4}
    xs={12}
    className="m-resume__main__skills"
  >
    <Grid item>
      <SectionHeader variant="h5" text="Skills" />
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="JavaScript"
            secondary="Next.js, React.js, Redux.js"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Python" secondary="Pyramid, Django" />
        </ListItem>
        <ListItem>
          <ListItemText primary="PHP" secondary="Symfony" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Java" secondary="J2EE, OSGi, Spring" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Web Languages" secondary="HTML5, CSS3, Sass" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Databases"
            secondary="Oracle, Snowflake, MySQL, PostgreSQL"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Styling" secondary="Tailwind, Material-UI" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cloud Computing"
            secondary="Vercel, AWS, Heroku"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="DevOps"
            secondary="Docker, Kubernetes, Jenkins"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="IDEs"
            secondary="Visual Studio Code, JetBrains, Eclipse"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Agile Methodologies"
            secondary="Kanban, Scrum"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tools"
            secondary="Redis, Nginx, RabbitMQ, Jira, Bitbucket, GitHub"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Other" secondary="GraphQL, Webpack, Node.js" />
        </ListItem>
      </List>
    </Grid>
    <Grid item>
      <SectionHeader variant="h5" text="Education" />
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Image
                  src={logoASU}
                  imageStyle={{ height: 'auto' }}
                  style={{
                    width: '100%',
                    maxWidth: '230px',
                    paddingTop: '60px',
                  }}
                  aria-label="Arizona State University"
                />
                <Typography variant="body1">
                  Bachelor of Computer Science
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Grid>
    <Grid item>
      <SectionHeader variant="h5" text="Interests" />
      <List>
        <ListItem>
          <ListItemIcon>
            <ChristianityIcon />
          </ListItemIcon>
          <ListItemText primary="Faith" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SportsBaseballIcon />
          </ListItemIcon>
          <ListItemText primary="Softball" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BowlingIcon />
          </ListItemIcon>
          <ListItemText primary="Bowling" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText primary="Arduino & Raspberry Pi" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Fitness" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="eSports" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmojiNatureIcon />
          </ListItemIcon>
          <ListItemText primary="Hiking" />
        </ListItem>
      </List>
    </Grid>
  </Grid>
);

export default ResumeSkillSection;
