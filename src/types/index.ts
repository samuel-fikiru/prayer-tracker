export type Prayer = {
    id:string,
    title:string,
    prayerDescription?:string,
    whoItsFor?:string,
    category?:string,
    status:"answered" | "unanswered" | "ongoing",
    createdAt:string,
    updatedAt:string,
    answeredAt?:string,
    answeredDescription?:string
}