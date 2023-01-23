class WorkedDay {
  constructor(workStartTime, lunchStartTime, lunchFinishTime, workFinishTime) {
    this.workStartTime = workStartTime;
    this.lunchStartTime = lunchStartTime;
    this.lunchFinishTime = lunchFinishTime;
    this.workFinishTime = workFinishTime;
  }
}

const calculateWorklog = () => {
  let worklogValues = document.forms["worklogForm"];

  //   workStartTime:
  const mondayStartTime = document.getElementById("mondayTime").value;
  const tuesdayStartTime = document.getElementById("tuesdayTime").value;
  const wednesdayStartTime = document.getElementById("wednesdayTime").value;
  const thursdayStartTime = document.getElementById("thursdayTime").value;
  const fridayStartTime = document.getElementById("fridayTime").value;
  const saturdayStartTime = document.getElementById("saturdayTime").value;
  const sundayStartTime = document.getElementById("sundayTime").value;

  //   lunchStartTime
  const mondayLunchStartTime = document.getElementById("mondayLunchTime").value;
  const tuesdayLunchStartTime =
    document.getElementById("tuesdayLunchTime").value;
  const wednesdayLunchStartTime =
    document.getElementById("wednesdayLunchTime").value;
  const thursdayLunchStartTime =
    document.getElementById("thursdayLunchTime").value;
  const fridayLunchStartTime = document.getElementById("fridayLunchTime").value;
  const saturdayLunchStartTime =
    document.getElementById("saturdayLunchTime").value;
  const sundayLunchStartTime = document.getElementById("sundayLunchTime").value;

  //   lunchFinishTime
  const mondayLunchFinishTime = document.getElementById(
    "mondayLunchTimeFinish"
  ).value;
  const tuesdayLunchFinishTime = document.getElementById(
    "tuesdayLunchTimeFinish"
  ).value;
  const wednesdayLunchFinishTime = document.getElementById(
    "wednesdayLunchTimeFinish"
  ).value;
  const thursdayLunchFinishTime = document.getElementById(
    "thursdayLunchTimeFinish"
  ).value;
  const fridayLunchFinishTime = document.getElementById(
    "fridayLunchTimeFinish"
  ).value;
  const saturdayLunchFinishTime = document.getElementById(
    "saturdayLunchTimeFinish"
  ).value;
  const sundayLunchFinishTime = document.getElementById(
    "sundayLunchTimeFinish"
  ).value;

  //   workFinishTime
  const mondayWorkFinishTime = document.getElementById(
    "mondayWorkFinishTime"
  ).value;
  const tuesdayWorkFinishTime = document.getElementById(
    "tuesdayWorkFinishTime"
  ).value;
  const wednesdayWorkFinishTime = document.getElementById(
    "wednesdayWorkFinishTime"
  ).value;
  const thursdayWorkFinishTime = document.getElementById(
    "thursdayWorkFinishTime"
  ).value;
  const fridayWorkFinishTime = document.getElementById(
    "fridayWorkFinishTime"
  ).value;
  const saturdayWorkFinishTime = document.getElementById(
    "saturdayWorkFinishTime"
  ).value;
  const sundayWorkFinishTime = document.getElementById(
    "sundayWorkFinishTime"
  ).value;

  const workedDays = [
    new WorkedDay(
      mondayStartTime,
      mondayLunchStartTime,
      mondayLunchFinishTime,
      mondayWorkFinishTime
    ),
    new WorkedDay(
      tuesdayStartTime,
      tuesdayLunchStartTime,
      tuesdayLunchFinishTime,
      tuesdayWorkFinishTime
    ),
    new WorkedDay(
      wednesdayStartTime,
      wednesdayLunchStartTime,
      wednesdayLunchFinishTime,
      wednesdayWorkFinishTime
    ),
    new WorkedDay(
      thursdayStartTime,
      thursdayLunchStartTime,
      thursdayLunchFinishTime,
      thursdayWorkFinishTime
    ),
    new WorkedDay(
      fridayStartTime,
      fridayLunchStartTime,
      fridayLunchFinishTime,
      fridayWorkFinishTime
    ),
    new WorkedDay(
      saturdayStartTime,
      saturdayLunchStartTime,
      saturdayLunchFinishTime,
      saturdayWorkFinishTime
    ),
    new WorkedDay(
      sundayStartTime,
      sundayLunchStartTime,
      sundayLunchFinishTime,
      sundayWorkFinishTime
    ),
  ];

  let grandTotalHoursWorked = 0;
  let grandTotalMinutesWorked = 0;

  const workedTimeCalculated = workedDays.map((day) => {
    const grandTotalResultsNode = document.getElementById("renderTotalResult");

    let previousResult = grandTotalResultsNode.lastElementChild;

    while (previousResult) {
      grandTotalResultsNode.removeChild(previousResult);
      previousResult = grandTotalResultsNode.lastElementChild;
    }

    const startWorkHour = parseInt(day.workStartTime.split(":")[0]);
    const startWorkMinutes = parseInt(day.workStartTime.split(":")[1]);

    const startLunchHour = parseInt(day.lunchStartTime.split(":")[0]);
    const startLunchMinutes = parseInt(day.lunchStartTime.split(":")[1]);

    const finishLunchHour = parseInt(day.lunchFinishTime.split(":")[0]);
    const finishLunchMinutes = parseInt(day.lunchFinishTime.split(":")[1]);

    const finishWorkHour = parseInt(day.workFinishTime.split(":")[0]);
    const finishWorkMinutes = parseInt(day.workFinishTime.split(":")[1]);

    if (!startWorkHour || !finishWorkHour) {
      const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
      const totalTimeWorkedNode = document.createElement("td");
      const totalTimeWorkedTextElement =
        document.createTextNode(`You worked 0 hours`);
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);
      return day;
    }

    if (!startLunchHour || !finishLunchHour) {
      let totalHoursWorked = finishWorkHour - startWorkHour;
      let totalMinutesWorked = finishWorkMinutes - startWorkMinutes;

      let surplusMinutes = totalMinutesWorked / 60;

      totalHoursWorked += surplusMinutes;

      const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
      const totalTimeWorkedNode = document.createElement("td");
      const totalTimeWorkedTextElement = document.createTextNode(
        `You worked for ${totalHoursWorked} hours`
      );
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

      grandTotalHoursWorked = grandTotalHoursWorked + totalHoursWorked;
      grandTotalMinutesWorked += totalMinutesWorked;
      return day;
    } else {
      const morningHoursWorked = startLunchHour - startWorkHour;
      const afternoonHoursWorked = finishWorkHour - finishLunchHour;
      const morningMinutesWorked = startLunchMinutes - startWorkMinutes;
      const afternoonMinutesWorked = finishWorkMinutes - finishLunchMinutes;

      let totalMinutesWorked = morningMinutesWorked + afternoonMinutesWorked;
      let totalHoursWorked = morningHoursWorked + afternoonHoursWorked;
      let surplusMinutes = totalMinutesWorked / 60;
      totalHoursWorked += surplusMinutes;

      day.totalTimeWorked = `You worked for ${totalHoursWorked} hours`;

      const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
      const totalTimeWorkedNode = document.createElement("td");
      const totalTimeWorkedTextElement = document.createTextNode(
        day.totalTimeWorked
      );
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

      grandTotalHoursWorked += totalHoursWorked;

      return day;
    }
  });

  const grandTotalResultsNode = document.getElementById("renderTotalResult");
  const grandTotalHoursWorkedTextNode = document.createTextNode(
    `This week you worked ${grandTotalHoursWorked.toFixed(2)} hours`
  );
  grandTotalResultsNode.appendChild(grandTotalHoursWorkedTextNode);
  grandTotalResultsNode.style.display = "block";
};

const worklogCTA = document.getElementById("worklogSubmit");

resetCTA.addEventListener("click", (event) => {
  event.preventDefault();
  // window.scrollTo(0, Position(document.getElementById("worklogSubmit")));
  location.reload();
});

worklogCTA.addEventListener("click", (event) => {
  event.preventDefault();
  // window.scrollTo(0, Position(document.getElementById("worklogSubmit")));
  calculateWorklog();
  const submitCTA = document.getElementById("submitCTA");
  submitCTA.style.display = "none";
  const resetCTA = document.getElementById("resetCTAContainer");

  resetCTA.style.display = "block";
});
