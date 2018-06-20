const comments = [
    {_id: 1, content: 'comment 1', userid: 1, postid: 1, createat: 222, editat: 444},
    {_id: 2, content: 'comment 1', userid: 2, postid: 1, createat: 222, editat: 444},
    {_id: 3, content: 'comment 1', userid: 1, postid: 2, createat: 222, editat: 444},
    {_id: 4, content: 'comment 1', userid: 2, postid: 2, createat: 222, editat: 444},
    {_id: 5, content: 'comment 1', userid: 1, postid: 2, createat: 222, editat: 444},
]

export const getComments = (userid, postid) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(comments);
        }, 1000);
    });
}

