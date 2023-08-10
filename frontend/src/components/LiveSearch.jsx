import { Autocomplete, Box, Stack, TextField } from "@mui/material"
import properties from "../data/properties"

const LiveSearch = () => {
  return (
    <Stack sx={{width:300, margin:"auto"}}>
        <Autocomplete
            id="property-suugest"
            getOptionLabel={(properties) => {
                return properties.filter(property => `${property.title}`)
            }}
            options={properties}
            sx={{width:300}}
            isOptionEqualToValue={(option, value) =>{
                return option.title === value.title
            }}
            noOptionsText = {"No houses found"}
            renderOption={(props, properties) => {
                properties.map(property => (
                    <Box component="li" {...props} key={property.id}>
                        {property.title}
                    </Box>
                ))
            }}
            renderInput={(params) => <TextField {...params} label="Search for a player"></TextField>}
        >
        </Autocomplete>
    </Stack>
  )
}

export default LiveSearch
