import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

// Mock data that simulates what would come from the backend
const mockData = {
  select1: [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ],
  select2: {
    1: [
      { id: 11, name: "Option 1.1" },
      { id: 12, name: "Option 1.2" },
    ],
    2: [
      { id: 21, name: "Option 2.1" },
      { id: 22, name: "Option 2.2" },
    ],
    3: [
      { id: 31, name: "Option 3.1" },
      { id: 32, name: "Option 3.2" },
    ],
  },
  select3: {
    11: [
      { id: 111, name: "Option 1.1.1" },
      { id: 112, name: "Option 1.1.2" },
    ],
    21: [
      { id: 211, name: "Option 2.1.1" },
      { id: 212, name: "Option 2.1.2" },
    ],
    31: [
      { id: 311, name: "Option 3.1.1" },
      { id: 312, name: "Option 3.1.2" },
    ],
  },
  select4: {
    111: [
      { id: 1111, name: "Option 1.1.1.1" },
      { id: 1112, name: "Option 1.1.1.2" },
    ],
    211: [
      { id: 2111, name: "Option 2.1.1.1" },
      { id: 2112, name: "Option 2.1.1.2" },
    ],
    311: [
      { id: 3111, name: "Option 3.1.1.1" },
      { id: 3112, name: "Option 3.1.1.2" },
    ],
  },
};

const App = () => {
  const [select1Data, setSelect1Data] = useState([]);
  const [select2Data, setSelect2Data] = useState([]);
  const [select3Data, setSelect3Data] = useState([]);
  const [select4Data, setSelect4Data] = useState([]);

  const [select1Value, setSelect1Value] = useState("");
  const [select2Value, setSelect2Value] = useState("");
  const [select3Value, setSelect3Value] = useState("");
  const [select4Value, setSelect4Value] = useState("");

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setSelect1Data(mockData.select1);
  }, []);

  useEffect(() => {
    if (select1Value && select2Value && select3Value && select4Value) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [select1Value, select2Value, select3Value, select4Value]);

  useEffect(() => {
    if (select1Value) {
      setSelect2Data(mockData.select2[select1Value] || []);
      setSelect2Value("");
      setSelect3Value("");
      setSelect4Value("");
    }
  }, [select1Value]);

  useEffect(() => {
    if (select2Value) {
      setSelect3Data(mockData.select3[select2Value] || []);
      setSelect3Value("");
      setSelect4Value("");
    }
  }, [select2Value]);

  useEffect(() => {
    if (select3Value) {
      setSelect4Data(mockData.select4[select3Value] || []);
      setSelect4Value("");
    }
  }, [select3Value]);

  const handleSubmit = () => {
    console.log("Selected Values:", {
      select1Value,
      select2Value,
      select3Value,
      select4Value,
    });
  };

  const getSelectedItemName = (data, value) => {
    const selectedItem = data.find((item) => item.id === value);
    return selectedItem ? selectedItem.name : "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2, // Adds spacing between elements
        padding: 2,
      }}
    >
      {/* Select 1 */}
      <FormControl
        fullWidth
        margin="normal"
        size="small"
        sx={{ minWidth: 200, maxWidth: 250 }}
      >
        <InputLabel>Select 1</InputLabel>
        <Select
          value={select1Value}
          onChange={(e) => setSelect1Value(e.target.value)}
        >
          {select1Data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select 2 */}
      <FormControl
        fullWidth
        margin="normal"
        size="small"
        sx={{ minWidth: 200, maxWidth: 250 }}
        disabled={!select1Value}
      >
        <InputLabel>Select 2</InputLabel>
        <Select
          value={select2Value}
          onChange={(e) => setSelect2Value(e.target.value)}
        >
          {select2Data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select 3 */}
      <FormControl
        fullWidth
        margin="normal"
        size="small"
        sx={{ minWidth: 200, maxWidth: 250 }}
        disabled={!select2Value}
      >
        <InputLabel>Select 3</InputLabel>
        <Select
          value={select3Value}
          onChange={(e) => setSelect3Value(e.target.value)}
        >
          {select3Data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select 4 */}
      <FormControl
        fullWidth
        margin="normal"
        size="small"
        sx={{ minWidth: 200, maxWidth: 250 }}
        disabled={!select3Value}
      >
        <InputLabel>Select 4</InputLabel>
        <Select
          value={select4Value}
          onChange={(e) => setSelect4Value(e.target.value)}
        >
          {select4Data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Display selected item names */}
      <Box sx={{ margin: "20px 0" }}>
        <Typography variant="subtitle1">Selected Items:</Typography>
        <Typography variant="body1">
          Select 1: {getSelectedItemName(select1Data, select1Value)}
        </Typography>
        <Typography variant="body1">
          Select 2: {getSelectedItemName(select2Data, select2Value)}
        </Typography>
        <Typography variant="body1">
          Select 3: {getSelectedItemName(select3Data, select3Value)}
        </Typography>
        <Typography variant="body1">
          Select 4: {getSelectedItemName(select4Data, select4Value)}
        </Typography>
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        disabled={!isButtonEnabled}
        onClick={handleSubmit}
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default App;
