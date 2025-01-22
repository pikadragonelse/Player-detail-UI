export const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const day = date.getDate();
    const month = date
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase();
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
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
