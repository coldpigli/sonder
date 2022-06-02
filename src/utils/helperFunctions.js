export const checkUserPresence = (arr, value) => {
    return arr.find((item)=>item.username === value)
}
