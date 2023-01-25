class WorkedDay {
  constructor(workStartTime, lunchStartTime, lunchFinishTime, workFinishTime) {
    this.workStartTime = workStartTime;
    this.lunchStartTime = lunchStartTime;
    this.lunchFinishTime = lunchFinishTime;
    this.workFinishTime = workFinishTime;
  }
}

let workedDays;

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

  workedDays = [
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
      day.totalTimeWorked = 0;
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
        `You worked for ${totalHoursWorked.toFixed(2)} hours`
      );
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

      grandTotalHoursWorked = grandTotalHoursWorked + totalHoursWorked;
      grandTotalMinutesWorked += totalMinutesWorked;
      day.totalTimeWorked = totalHoursWorked;

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
      day.totalTimeWorked = totalHoursWorked;

      return day;
    }
  });

  const grandTotalResultsNode = document.getElementById("renderTotalResult");
  const grandTotalHoursWorkedTextNode = document.createTextNode(
    `This week you worked ${grandTotalHoursWorked.toFixed(2)} hours`
  );
  grandTotalResultsNode.appendChild(grandTotalHoursWorkedTextNode);
  grandTotalResultsNode.style.display = "block";
  // console.log(workedDays);
  return workedDays;
};

const worklogCTA = document.getElementById("worklogSubmit");

resetCTA.addEventListener("click", (event) => {
  event.preventDefault();
  // window.scrollTo(0, Position(document.getElementById("worklogSubmit")));
  location.reload();
});

const submitCTA = document.getElementById("submitCTA");

worklogCTA.addEventListener("click", (event) => {
  event.preventDefault();
  // window.scrollTo(0, Position(document.getElementById("worklogSubmit")));
  calculateWorklog();
  submitCTA.style.display = "none";
  const resetCTA = document.getElementById("resetCTAContainer");

  resetCTA.style.display = "block";
});

const toogleRateInput = document.getElementById("toogleRateInput");
const calculatePaymentForm = document.getElementById("calculatePaymentForm");

const activateRate = () => {
  const showRateForm = toogleRateInput.checked;
  if (showRateForm) {
    calculatePaymentForm.style.display = "block";
    submitCTA.style.display = "none";
  } else calculatePaymentForm.style.display = "none";
};

toogleRateInput.addEventListener("click", () => activateRate());

const calculatePaymentCTA = document.getElementById("calculatePaymentCTA");

const calculatePayment = () => {
  // calculateWorklog();
  console.log(document.forms[1][0].value);
  const regularRate = document.forms[1][0].value;
  const saturdayRate = document.forms[1][1].value;
  const sundayRate = document.forms[1][2].value;
  const publicHolidayRate = document.forms[1][3].value;
  let totalRegularWage = 0,
    saturdayWage = 0,
    sundayWage = 0,
    holidayWage = 0;
  console.log(workedDays);
  workedDays.forEach((day, i) => {
    if (i <= 4) {
      console.log("week day"), day;
      totalRegularWage += day.totalHoursWorked * regularRate;
      console.log(day.totalHoursWorked);
      console.log(regularRate);
      console.log(totalRegularWage);
    } else if (i == 5) {
      console.log("saturday");
      saturdayWage += day.totalHoursWorked * saturdayRate;
    } else if (i == 6) {
      console.log("sunday");
      sundayWage += day.totalHoursWorked * sundayRate;
    }
  });
  console.log({ regularRate });
  console.log({ saturdayRate });
  console.log({ sundayRate });
};

calculatePaymentCTA.addEventListener("click", (event) => {
  event.preventDefault();
  calculateWorklog();
  activateRate();
  calculatePayment();
});
