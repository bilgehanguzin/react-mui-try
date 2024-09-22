const express = require("express");
const cors = require("cors"); // To allow CORS for client requests
const app = express();

// Enable CORS
app.use(cors());

// Sample data for each select box
const selectData = {
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

// API to get data for the first select box
app.get("/api/select1", (req, res) => {
  res.json(selectData.select1);
});

// API to get data for the second select box based on the selected value of the first select box
app.get("/api/select2/:id", (req, res) => {
  const select1Id = req.params.id;
  const select2Options = selectData.select2[select1Id] || [];
  res.json(select2Options);
});

// API to get data for the third select box based on the selected value of the second select box
app.get("/api/select3/:id", (req, res) => {
  const select2Id = req.params.id;
  const select3Options = selectData.select3[select2Id] || [];
  res.json(select3Options);
});

// API to get data for the fourth select box based on the selected value of the third select box
app.get("/api/select4/:id", (req, res) => {
  const select3Id = req.params.id;
  const select4Options = selectData.select4[select3Id] || [];
  res.json(select4Options);
});

// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
