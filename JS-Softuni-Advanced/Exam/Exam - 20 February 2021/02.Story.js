class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {

            //let { username } = Object.values(this._likes)[0];
            let obj = this._likes[0];
            return `${obj.username} likes this story!`;
        }

        let { username } = Object.values(this._likes)[0];
        let likes = this._likes.length - 1;
        return `${username} and ${likes} others like this story!`;
    }

    like(username) {
        let obj = { username }
        let user = this._likes.find(u => Object.values(u) == username);
        if (user) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(obj)
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        let user = this._likes.find(u => Object.values(u) == username);
        if (user == undefined) {
            throw new Error("You can't dislike this story!");
        }

        let i = this._likes.indexOf(user);
        this._likes.splice(i, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id == undefined || this._comments.some(c => Object.values(c)[0] == id) == false) {
            let id = this._comments.length + 1;
            const objComment = { id, username, content, replies: {} };
            this._comments.push(objComment);
            return `${username} commented on ${this.title}`;
        }
        if (id && this._comments.find(c => Object.values(c)[0] == id)) {
            const commentToReply = this._comments.find(c => Object.values(c)[0] == id);
            commentToReply.replies[`${Number(id)}.${Number(Object.values(commentToReply.replies).length) + 1}`] = { id: `${Number(id)}.${Number(Object.values(commentToReply.replies).length) + 1}`, username, content };
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        if (sortingType == 'asc') {
            let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`,];

            result.push('Comments:');

            Object.values(this._comments).forEach((c) => {

                result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                Object.values(c.replies).forEach((r) => {
                    result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                });
            });
            return result.join('\n');
        }

        if (sortingType == 'desc') {
            let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`,];

            result.push('Comments:');


            let sorted = this._comments.sort((a, b) => b.id - a.id);
            sorted.forEach(o => {
                result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                let sortedReplies = Object.values(o.replies).sort((a, b) => Number(b.id) - Number(a.id));

                sortedReplies.forEach(r => {
                    result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                });
            });

            return result.join('\n');
        }

        if (sortingType == 'username') {
            let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`,];

            result.push('Comments:');

            let sorted = this._comments.sort((a, b) => a.username.localeCompare(b.username));
            sorted.forEach(o => {
                result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                let sortedReplies = Object.values(o.replies).sort((a, b) => a.username.localeCompare(b.username));

                sortedReplies.forEach(r => {
                    result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                });
            });

            return result.join('\n');
        }
    }
}



//this solution is optimized rather than the previous one. 
class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.find(u => u == username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const user = this._likes.find((u) => u == username);
        if (user == undefined) {
            throw new Error("You can't dislike this story!");
        }

        const i = this._likes.indexOf(user);
        this._likes.splice(i, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (!id || this._comments.some(c => c.id == id) == false) {
            id = this._comments.length + 1;
            const comment = { id, username, content, replies: {} };
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }

        if (this._comments.find((c) => c.id == id)) {
            const commentToReply = this._comments.find(c => Object.values(c)[0] == id);
            commentToReply.replies[`${id}.${Object.values(commentToReply.replies).length + 1}`] = { id: `${id}.${Object.values(commentToReply.replies).length + 1}`, username, content };
            return `You replied successfully`;
        }
    }


    toString(sortingType) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:',];

        const typesToSort = {
            'asc': function (comments) {
                Object.values(comments).forEach((c) => {
                    result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                    Object.values(c.replies).forEach((r) => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            },
            'desc': function (comments) {
                const sorted = comments.sort((a, b) => b.id - a.id).forEach((o) => {
                    result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                    const sortedReplies = Object.values(o.replies).sort((a, b) => b.id - a.id).forEach(r => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            },
            'username': function (comments) {
                const sorted = comments.sort((a, b) => a.username.localeCompare(b.username)).forEach(o => {
                    result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                    const sortedReplies = Object.values(o.replies).sort((a, b) => a.username.localeCompare(b.username)).forEach(r => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            }
        }

        return typesToSort[sortingType](this._comments);
    }
}



// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log(art.toString('username'));

// console.log()
// //console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// //console.log(art.toString('desc'));

let art = new Story("My Story", "Anny");
art.like("John"); "John liked My Story!"
console.log(art.likes); "John likes this story!"
//assert.throw(()=>art.dislike("Sally"), "You can't dislike this story!");
art.like("Ivan");
art.like("Steven");
console.log(art.likes);
console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content", 1));
console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.toString('asc'));




// `Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`