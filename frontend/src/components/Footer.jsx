import {Container} from "@mui/material";
import {Typography} from "@mui/material";
import {Link} from "@mui/material";
import { grey } from "@mui/material/colors";


export default function Footer({ description, title }) {

  return (
    <footer sx={{footer: {
    backgroundColor: grey,
    marginTop: spacing(4),
    padding: spacing(6, 0),
    },}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}