export const fghjk = {
    en: {
        label: {
            name: "Name",
            lastname: "Lastname",
            nickname: "Nickname",
            age: "Age",
            birthdate: "Date of birth",
            nationality: "Nationality",
            race: "Race",
            religion: "Religion",
        },
        data: {
            prefix: "Mr.",
            name: "Jatupan",
            lastname: "Tiptem",
            nickname: "Phet",
            nationality: "Thai",
            race: "Thai",
            religion: "Buddhist",
        },
    },
    th: {
        label: {
            name: "ชื่อ",
            lastname: "นามสกุล",
            nickname: "ชื่อเล่น",
            age: "อายุ",
            birthdate: "วันเกิด",
            nationality: "สัญชาติ",
            race: "เชื้อชาติ",
            religion: "ศาสนา",
        },
        data: {
            prefix: "นาย",
            name: "จตุพันธุ์",
            lastname: "ติ๊บเต็ม",
            nickname: "เพชร",
            nationality: "ไทย",
            race: "ไทย",
            religion: "พุทธ",
        },
    }
};

export function fullName(lang = "en") {
    const n = profile[lang].data;
    return `${n.prefix} ${n.name} ${n.lastname}`;
};

const birthDate = new Date("2003-04-11");

function calculateAge(date) {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }

    return age;
}

export function formatBirthDate(lang = "en") {
    const optionsEN = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const optionsTH = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    if (lang === "th") {
        return new Intl.DateTimeFormat("th-TH", optionsTH).format(birthDate);
    }

    return new Intl.DateTimeFormat("en-US", optionsEN).format(birthDate);
}

export const age = calculateAge(birthDate);
export const birth = birthDate;