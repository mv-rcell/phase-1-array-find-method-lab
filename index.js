const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  // ... more records
];

function superbowlWin(records) {
  const winningRecord = records.find(record => record.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}

// Test the function with the provided record array
console.log(superbowlWin(record)); // This should output "2015" if a win is found

// Example with an array where no win exists
const noWinRecord = [
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" }
];
console.log(superbowlWin(noWinRecord)); // This should output undefined
