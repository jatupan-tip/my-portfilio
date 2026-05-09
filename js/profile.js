export const profile = {
    name: "Jatupan",
    lastname: "Tiptem",
    nickname: "Petch",
    gender: "male",
    status: "single",
    nationality: "Thai",
    race: "Thai",
    religion: "Buddhist",
}

/* Find Fullname */
function findFullName(datas) {
    let prefix = "";

    if(datas.gender === "male"){
        prefix = "Mr.";
    } else if(datas.gender === "female"){
        prefix = datas.status === "single" ? "Miss" : "Mrs.";
    } else {
        prefix = "";
    }
    
    return `${datas.name} ${datas.lastname}`;
}
profile.fullName = findFullName(profile);

/* Find Date of Birth */
const birth = new Date(2003, 3, 11);
const birthDate = birth.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
});
profile.birthDate = birthDate;

/* Find Age */
function findAge(birthDate) {
    const today = new Date();

    if(!(birthDate instanceof Date)) {
        birthDate = new Date(birthDate);
    }

    if(birthDate > today) {
        return "Invalid birth date";
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return `${age} year${age !== 1 ? 's' : ''} old`;
}
profile.age = findAge(birth);