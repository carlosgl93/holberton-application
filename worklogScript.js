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

  console.log(typeof worklogValues);

  console.log(worklogValues);

  //   workStartTime:
  const mondayStartTime = document.getElementById("mondayTime").value;
  const tuesdayStartTime = document.getElementById("tuesdayTime").value;
  const wednesdayStartTime = document.getElementById("wednesdayTime").value;
  const thursdayStartTime = document.getElementById("thursdayTime").value;
  const fridayStartTime = document.getElementById("fridayTime").value;
  const saturdayStartTime = document.getElementById("saturdayTime").value;
  const sundayStartTime = document.getElementById("sundayTime").value;

  console.log({ mondayStartTime });
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
  console.log({ mondayLunchStartTime });

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

  const lunchMinusStartTime = mondayLunchStartTime - mondayStartTime;
  console.log({ lunchMinusStartTime });
  const mondayStartTimeSplitted = mondayStartTime.split(":");
  console.log(mondayStartTimeSplitted);

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

    // if (grandTotalResultsNode.lastElementChild) {
    //   console.log("ya corrio antes!, hay que borrar resultado anterior");
    //   grandTotalResultsNode.removeChild(grandTotalResultsNode.lastElementChild);
    //   // grandTotalResultsNode.removeChild(grandTotalResultsNode.childNodes[0]);
    // }
    console.log(grandTotalResultsNode);
    const startWorkHour = parseInt(day.workStartTime.split(":")[0]);
    const startWorkMinutes = parseInt(day.workStartTime.split(":")[1]);

    const startLunchHour = parseInt(day.lunchStartTime.split(":")[0]);
    const startLunchMinutes = parseInt(day.lunchStartTime.split(":")[1]);
    console.log({ startLunchHour });

    console.log("morningShiftHoursWorked", startLunchHour - startWorkHour);
    console.log(
      "morningShiftMinutesWorked",
      startLunchMinutes - startWorkMinutes
    );

    const finishLunchHour = parseInt(day.lunchFinishTime.split(":")[0]);
    const finishLunchMinutes = parseInt(day.lunchFinishTime.split(":")[1]);

    const finishWorkHour = parseInt(day.workFinishTime.split(":")[0]);
    const finishWorkMinutes = parseInt(day.workFinishTime.split(":")[1]);

    if (!startLunchHour || !finishLunchHour) {
      let totalHoursWorked = finishWorkHour - startWorkHour;
      let totalMinutesWorked = finishWorkMinutes - startWorkMinutes;

      console.log("no lunch hours worked", totalHoursWorked);
      if (totalMinutesWorked >= 60) {
        let surplusMinutes = totalMinutesWorked / 60;
        console.log(surplusMinutes);
        totalHoursWorked += surplusMinutes;
        // if (surplusMinutes == 1) {
        //   totalMinutesWorked = 0;
        //   totalHoursWorked += 1;
        // } else {

        //   totalMinutesWorked = 60 * surplusMinutes;
        // }
      }

      if (totalMinutesWorked < 0)
        totalMinutesWorked = 60 - totalMinutesWorked * -1;
      day.totalTimeWorked = `${new String(totalHoursWorked)}:${new String(
        totalMinutesWorked
      )}`;

      const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
      const totalTimeWorkedNode = document.createElement("td");
      const totalTimeWorkedTextElement = document.createTextNode(
        `${totalHoursWorked} hours with ${totalMinutesWorked} minutes`
      );
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

      grandTotalHoursWorked = grandTotalHoursWorked + totalHoursWorked;
      grandTotalMinutesWorked += totalMinutesWorked;
      console.log("grandTotalHoursWorked", grandTotalHoursWorked);
      return day;
    } else {
      const morningHoursWorked = startLunchHour - startWorkHour;
      const afternoonHoursWorked = finishWorkHour - finishLunchHour;
      const morningMinutesWorked = startLunchMinutes - startWorkMinutes;
      const afternoonMinutesWorked = finishWorkMinutes - finishLunchMinutes;

      let totalMinutesWorked = morningMinutesWorked + afternoonMinutesWorked;
      let totalHoursWorked = morningHoursWorked + afternoonHoursWorked;
      console.log("total minutes worked", totalMinutesWorked);
      if (totalMinutesWorked >= 60) {
        // si los minutos sumados dan mas o igual a 60 tengo que pasarlo a horas
        let surplusMinutes = totalMinutesWorked / 60;
        console.log(surplusMinutes);
        totalHoursWorked += surplusMinutes;
        // if (surplusMinutes == 1) {
        //   totalMinutesWorked = 0;
        // } else totalMinutesWorked = 60 * surplusMinutes;
      } else if (totalMinutesWorked < 0) {
        console.log("totalMinutesWorked before conversion", totalMinutesWorked);
        totalMinutesWorked = 60 - totalMinutesWorked * -1;
        console.log("totalMinutesWorked after conversion", totalMinutesWorked);
        totalHoursWorked = totalHoursWorked - 1;
      }

      day.totalTimeWorked = `${new String(totalHoursWorked)}:${new String(
        totalMinutesWorked
      )}`;

      const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
      const totalTimeWorkedNode = document.createElement("td");
      const totalTimeWorkedTextElement = document.createTextNode(
        `${totalHoursWorked} hours with ${totalMinutesWorked} minutes`
      );
      totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
      totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

      grandTotalHoursWorked += totalHoursWorked;
      grandTotalMinutesWorked += totalMinutesWorked;
      console.log("grandTotalHoursWorked", grandTotalHoursWorked);

      return day;
    }

    // if (totalMinutesWorked >= 60) {
    //   let surplusMinutes = totalMinutesWorked / 60;
    //   console.log(surplusMinutes);
    //   totalHoursWorked += 1;
    //   if (surplusMinutes == 1) {
    //     totalMinutesWorked = 0;
    //   } else totalMinutesWorked = 60 * surplusMinutes;
    // }

    // if (totalMinutesWorked < 0)
    //   totalMinutesWorked = 60 - totalMinutesWorked * -1;
    // day.totalTimeWorked = `${new String(totalHoursWorked)}:${new String(
    //   totalMinutesWorked
    // )}`;

    // const totalTimeWorkedRow = document.getElementById("totalTimeWorked");
    // const totalTimeWorkedNode = document.createElement("td");
    // const totalTimeWorkedTextElement = document.createTextNode(
    //   `Hours: ${totalHoursWorked} with ${totalMinutesWorked} minutes`
    // );
    // totalTimeWorkedNode.appendChild(totalTimeWorkedTextElement);
    // totalTimeWorkedRow.appendChild(totalTimeWorkedNode);

    // return day;
  });

  if (grandTotalMinutesWorked > 60) {
    let minutesSurplus = grandTotalMinutesWorked / 60;
    grandTotalHoursWorked += minutesSurplus;
  }

  const grandTotalResultsNode = document.getElementById("renderTotalResult");
  const grandTotalHoursWorkedTextNode = document.createTextNode(
    `This week you worked ${grandTotalHoursWorked.toFixed(2)} hours`
  );
  grandTotalResultsNode.appendChild(grandTotalHoursWorkedTextNode);
  grandTotalResultsNode.style.display = "block";

  console.log("workedTimeCalculatedMap", workedTimeCalculated);
  //   workedTimeCalculated

  console.log(workedDays);
  console.log(grandTotalResultsNode.childNodes);
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
