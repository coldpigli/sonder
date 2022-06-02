export const checkUserPresence = (arr, value) => {
    return arr.find((item)=>item.username === value)
}

export const checkIfBookmarked = (bookmarks, post) => {
    return bookmarks.find((item)=>item._id === post._id);
} 