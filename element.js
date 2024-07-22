const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  // more years and results...
];

function superbowlWin(records) {
  const winningRecord = records.find(record => record.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}

console.log(superbowlWin(record)); // This will output "2015" if there's a win, otherwise undefined.
