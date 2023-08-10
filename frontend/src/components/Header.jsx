import { Button, Divider, IconButton, Toolbar, Typography } from "@mui/material"
import HouseIcon from '@mui/icons-material/House';


function Header() {
  return (
    <>
        <Toolbar style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <>
                <IconButton>
                    <HouseIcon style={{fontSize:"2rem"}}></HouseIcon>
                </IconButton>
                <Typography variant="h5" sx={{flexGrow: 1}}>Rentalery</Typography>
            </>
            <>
                <Button style={{background:"blue", color:"white",}} sx={{"&:hover": {backgroundColor: "transparent", }}}>Rent</Button>
                <Button>Buy</Button>
                <Button>Sell</Button>
            </>
        </Toolbar>
        <Divider></Divider>
    </>
  )
}

export default Header
