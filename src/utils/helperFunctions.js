export const checkUserPresence = (arr, value) => {
    return arr?.find((item)=>item.username === value)
}

export const checkIfBookmarked = (bookmarks, post) => {
    return bookmarks.find((postId)=>postId === post?._id);
} 

export const filterUsers = (userList, searchItem) => {
    const regexTest = new RegExp(`${searchItem}`, "i");
    return userList.filter((user)=>regexTest.test(user.username) || regexTest.test(user.firstName+user.lastName));
}   