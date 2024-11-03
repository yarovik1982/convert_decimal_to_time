export function decimalToTime(decimal) {
   const hours = Math.floor(decimal);
   const minutes = Math.round((decimal - hours) * 60);
   return { hours, minutes };
}


export function formatTime(hours, minutes) {
   return `${String(hours).padStart(2, "0")}ч ${String(minutes).padStart(
       2,
       "0"
   )}м`;
}

export function timeToDecimal(time) {
   const [hours, minutes] = time.split(':').map(Number);
   return hours + (minutes / 60);
   }
