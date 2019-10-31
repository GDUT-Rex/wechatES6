"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
function debounce(fn, gapTime) {
  let timeout = null
  return function(e) {
    timeout = new Date().getTime()
    if (timeout - this.lastTIme > gapTime || !this.lastTIme) {
      fn.call(this,e)
      this.lastTIme = timeout
    } else {

      return
    }
  }
 

}
exports.debounce = debounce;
var formatNumber = function (n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixVQUFVLENBQUMsSUFBVTtJQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDMUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFaEMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEgsQ0FBQztBQVRELGdDQVNDO0FBRUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFTO0lBQzdCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN4QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0FBQ2pDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpXG4gIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXG5cbiAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCcvJykgKyAnICcgKyBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJzonKVxufVxuXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHN0ciA9IG4udG9TdHJpbmcoKVxuICByZXR1cm4gc3RyWzFdID8gc3RyIDogJzAnICsgc3RyXG59XG4iXX0=