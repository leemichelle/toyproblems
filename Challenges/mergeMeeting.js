function mergeRanges(meetings) {
  // create deep copy of meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // sort meeting times by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.start - b.start;
  });

  //initialize meeting with earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    if (currentMeeting.start <= lastMergedMeeting.end) {
      lastMergedMeeting.end = Math.max(lastMergedMeeting.end, currentMeeting.end);
    } else {
      mergedMeetings.push(currentMeeting)
    }
  }

  return mergedMeetings
}

let meetings = [
  {start: 0, end: 1},
  {start: 3, end: 5},
  {start: 4, end: 8},
  {start: 10, end: 12},
  {start: 9, end: 10}
]

console.log(mergeRanges(meetings))