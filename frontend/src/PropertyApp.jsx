// src/PropertyApp.js
import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Button,
} from "@mui/material";
import properties from "./data/properties";

const PropertyApp = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    type: "",
    bedrooms: 0,
    bathrooms: 0,
    rent: 0,
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      return (
        (property.type === filters.type || filters.type === "") &&
        property.bedrooms >= filters.bedrooms &&
        property.bathrooms >= filters.bathrooms &&
        property.rent <= filters.rent
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Rent a Property</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div style={{ margin: "20px 0" }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                >
                  <MenuItem value="">Any Type</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Bedrooms</InputLabel>
                <Select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
                  <MenuItem value={0}>Any</MenuItem>
                  <MenuItem value={1}>1+</MenuItem>
                  <MenuItem value={2}>2+</MenuItem>
                  <MenuItem value={3}>3+</MenuItem>
                  <MenuItem value={4}>4+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Bathrooms</InputLabel>
                <Select
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <MenuItem value={0}>Any</MenuItem>
                  <MenuItem value={1}>1+</MenuItem>
                  <MenuItem value={2}>2+</MenuItem>
                  <MenuItem value={3}>3+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Typography id="rent-slider-label">Max Rent</Typography>
                <Slider
                  name="rent"
                  value={filters.rent}
                  onChange={(event, newValue) =>
                    handleFilterChange({
                      target: { name: "rent", value: newValue },
                    })
                  }
                  min={0}
                  max={3000}
                  valueLabelDisplay="auto"
                  aria-labelledby="rent-slider-label"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={applyFilters}>
            Apply Filters
          </Button>
        </div>
        <Grid container spacing={3}>
          {filteredProperties.map((property) => (
            <Grid item xs={4} key={property.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{property.title}</Typography>
                  <Typography>{property.type}</Typography>
                  <Typography>
                    {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms
                  </Typography>
                  <Typography>Rent: ${property.rent} / month</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PropertyApp;
