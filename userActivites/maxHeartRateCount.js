export const maxHeartRateCount = (profile) => {
    const birthdayDate = profile.birth;
    const currentYear = (new Date()).getFullYear();
    const birthdayYear = birthdayDate.getFullYear();
    const yearDiff = currentYear - birthdayYear;

    const currentMonth = (new Date()).getMonth();
    const birthdayMonth = birthdayDate.getMonth();
    
    const age = currentMonth < birthdayMonth ? yearDiff - 1 : yearDiff;

    const HRRmax = 220 - age;
    return HRRmax;
}  