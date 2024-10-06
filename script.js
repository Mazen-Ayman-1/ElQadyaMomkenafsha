// إعداد الوقت
const goalTime = new Date('2020-11-27T21:26:45'); // وقت هدف القاضية
function updateCountdown() {
    const now = new Date();
    const timeToGoal = now - goalTime;

    const days = Math.floor(timeToGoal / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeToGoal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeToGoal % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeToGoal % (1000 * 60)) / 1000);
    const fridays = Math.floor(days / 7); // حساب عدد الجُمَع

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("fridays").innerText = fridays;
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);

// تحديث العد التنازلي عند تحميل الصفحة
updateCountdown();