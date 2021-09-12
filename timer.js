class CountdownTimer {
  daysRef;
  hoursRef;
  minsRef;
  secRef;
  interval;

  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.initRefs(selector);
  }

  initRefs(selector) {
    const container = document.querySelector(selector);
    this.daysRef = container.querySelector('[data-value="days"]');
    this.hoursRef = container.querySelector('[data-value="hours"]');
    this.minsRef = container.querySelector('[data-value="mins"]');
    this.secRef = container.querySelector('[data-value="secs"]');
  }

  getDateNow() {
    return Date.now();
  }

  updateTimer() {
    let time = this.targetDate - this.getDateNow();
    if (time < 0) {
      clearInterval(this.interval);
      return;
    }

    const msInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(time / msInDay);
    this.daysRef.textContent = this.pad(days);

    time = time % msInDay;
    const msInHour = 1000 * 60 * 60;
    const hours = Math.floor(time / msInHour);
    this.hoursRef.textContent = this.pad(hours);

    time = time % msInHour;
    const msInMin = 1000 * 60;
    const mins = Math.floor(time / msInMin);
    this.minsRef.textContent = this.pad(mins);

    time = time % msInMin;
    const msInSec = 1000;
    const secs = Math.floor(time / msInSec);
    this.secRef.textContent = this.pad(secs);
  }

  start() {
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-09-12T20:50:00'),
});

timer.start();
