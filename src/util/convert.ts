export const convertTimestampToDate = (
    timestamp: number,
    type: "default" | "short" = "default"
) => {
    const date = new Date(timestamp * 1000);

    let day = date.getDate().toString();
    if (Number(day) < 10) {
        day = "0" + day;
    }
    let month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
    if (type === "short") {
        if (date.getMonth() < 10) {
            month = "0" + date.getMonth().toString();
        } else {
            month = date.getMonth().toString();
        }
    }
    const year = date.getFullYear();

    return type === "default" ? `${day} ${month} ${year}` : `${day}/${month}`;
};

export const convertTimestampToAge = (timestamp: number) => {
    const birthDate = new Date(timestamp * 1000);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    // Kiểm tra nếu sinh nhật trong năm hiện tại chưa tới thì giảm tuổi đi 1
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
};
