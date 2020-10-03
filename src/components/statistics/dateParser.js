
import dayjs from 'dayjs';

const period = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
    YEARLY: 'yearly'
}

export const parseToGraphData = (rawData, timePeriod=period.DAILY) => {
    let lastSeen = dayjs(rawData[0].date + " " + rawData[0].time, 'DD/MM/YYYY HH:mm').hour(0).minute(0); //first day
    let timestamp = lastSeen.valueOf(); // milliseconds since the Unix Epoch
    let nCups = 0;
    let time = 0;
    let parsedData = [];
    let cDate = null; // current date
    rawData.forEach(element => {
      cDate = dayjs(element.date + " " + element.time, 'DD/MM/YYYY HH:mm');

      // check if we should add the new element based on the selected time period
      let addEntry = false;
      switch (timePeriod) {
        case period.DAILY: 
            if (cDate.dayOfYear() !== lastSeen.dayOfYear()) {
                addEntry = true;
            } break;
        case period.WEEKLY: 
            if (cDate.week() !== lastSeen.week()) {
                addEntry = true;
            } break;
        case period.MONTHLY: 
            if (cDate.month() !== lastSeen.month()) {
                addEntry = true;
            } break;
        case period.YEARLY:
            if (cDate.year() !== lastSeen.year()) {
                addEntry = true;
            } break;
        default:
            console.warn("Time period did not match with any available options");
      }

      if (addEntry) {
          addEntry = false;
          parsedData.push({
            x: timestamp + time,
            y: nCups
          });
          nCups = 1;
          time += cDate.diff(lastSeen, 'millisecond');
      } else {
          nCups++;
      }
      lastSeen = cDate; // remember last seen
    });
    // add last entry
    time += cDate.diff(lastSeen, 'millisecond');
    parsedData.push({
      x: timestamp + time,
      y: nCups
    });
    console.log(parsedData)
    return parsedData;
};

