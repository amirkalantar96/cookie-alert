"use strict";

function cA() {
    const cookie = navigator.cookieEnabled;
    if (cookie === true) {
        alert("به سایت خوش آمدید\n کوکی‌های سایت شما فعال است");
    } else {
        alert("خوش آمدید\nکوکی‌های شما فعال نیست.\nلطفا ابتدا کوکی‌ها را فعال کنید.")
    }
}
window.addEventListener("load", cA);