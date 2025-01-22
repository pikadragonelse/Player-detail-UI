export const renderLinkImg = (
    type: "player" | "team",
    id: string,
    size: "medium" | "small"
) => {
    return `https://img.uniscore.com/football/${type}/${id}/image/${size}`;
};
